import WebSocket from "ws";
import { v4 as uuid } from "uuid";
import { parse } from "./StreamingClient";
import { base64Encode } from "../../base64Encode";
import * as Hume from "../../../api";
import * as errors from "../../../errors";
import * as serializers from "../../../serialization";
import * as fs from "fs";

export declare namespace StreamSocket {
    interface Args {
        websocket: WebSocket;
        config: Hume.expressionMeasurement.stream.Config;
        streamWindowMs?: number;
    }
}

export class StreamSocket {
    readonly websocket: WebSocket;
    private readonly streamWindowMs?: number;
    private config: Hume.expressionMeasurement.stream.Config;

    constructor({ websocket, config, streamWindowMs }: StreamSocket.Args) {
        this.websocket = websocket;
        this.config = config;
        this.streamWindowMs = streamWindowMs;
    }

    /**
     * Send file on the `StreamSocket`
     *
     * @param file A fs.ReadStream | File | Blob
     * @param config This method is intended for use with a `LanguageConfig`.
     * When the socket is configured for other modalities this method will fail.
     */
    public async sendFile({
        file,
        config,
    }: {
        file: fs.ReadStream | Blob;
        config?: Hume.expressionMeasurement.stream.Config;
    }): Promise<Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage> {
        if (config != null) {
            this.config = config;
        }
        let contents = "";
        if (file instanceof fs.ReadStream) {
            const chunks: Buffer[] = [];
            for await (const chunk of file) {
                chunks.push(Buffer.from(chunk));
            }
            contents = Buffer.concat(chunks).toString("base64");
        } else if (file instanceof Blob) {
            const toBase64 = (file: Blob): Promise<string> =>
                new Promise((res) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => res(reader.result as string);
                });
            contents = await toBase64(file);
        } else {
            throw new errors.HumeError({
                message: `file must be one of ReadStream or Blob.`,
            });
        }
        const request: Hume.expressionMeasurement.stream.StreamModelsEndpointPayload = {
            payloadId: uuid(),
            data: contents,
            models: this.config,
            rawText: false,
        };
        if (this.streamWindowMs != null) {
            request.streamWindowMs = this.streamWindowMs;
        }
        const response = await this.send(request);
        if (response == null) {
            throw new errors.HumeError({
                message: `Received no response after sending file: ${file}`,
            });
        }
        return response;
    }

    /**
     * Send text on the `StreamSocket`
     *
     * @param text Text to send to the language model.
     * @param config This method is intended for use with a `LanguageConfig`.
     * When the socket is configured for other modalities this method will fail.
     */
    public async sendText({
        text,
        config,
    }: {
        text: string;
        config?: Hume.expressionMeasurement.stream.Config;
    }): Promise<Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage> {
        if (config != null) {
            this.config = config;
        }
        const request: Hume.expressionMeasurement.stream.StreamModelsEndpointPayload = {
            payloadId: uuid(),
            data: text,
            rawText: true,
            models: this.config,
        };
        if (this.streamWindowMs != null) {
            request.streamWindowMs = this.streamWindowMs;
        }
        const response = await this.send(request);
        if (response == null) {
            throw new errors.HumeError({
                message: `Received no response after sending text: ${text}`,
            });
        }
        return response;
    }

    /**
     * Send facemesh landmarks on the `StreamSocket`
     *
     * @param landmarks List of landmark points for multiple faces.
     * The shape of this 3-dimensional list should be (n, 478, 3) where n is the number
     * of faces to be processed, 478 is the number of MediaPipe landmarks per face and 3
     * represents the (x, y, z) coordinates of each landmark.
     * @param config List of model configurations.
     * If set these configurations will overwrite existing configurations
     */
    public async sendFacemesh({
        landmarks,
        config,
    }: {
        landmarks: number[][][];
        config?: Hume.expressionMeasurement.stream.Config;
    }): Promise<Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage> {
        const response = this.sendText({
            text: base64Encode(JSON.stringify(landmarks)),
            config,
        });
        return response;
    }

    /**
     *
     * Reset the streaming sliding window.
     *
     * Call this method when some media has been fully processed and you want to continue using the same
     * streaming connection without leaking context across media samples.
     */
    public async reset(): Promise<void> {
        await this.send({
            resetStream: true,
        });
    }

    /**
     *
     * Get details associated with the current streaming connection.
     *
     */
    public async getJobDetails(): Promise<void> {
        await this.send({
            jobDetails: true,
        });
    }

    /**
     * Closes the underlying socket.
     */
    public close(): void {
        this.websocket.close();
    }

    private async send(
        payload: Hume.expressionMeasurement.stream.StreamModelsEndpointPayload,
    ): Promise<Hume.expressionMeasurement.stream.Config | void> {
        await this.tillSocketOpen();
        const jsonPayload = serializers.expressionMeasurement.stream.StreamModelsEndpointPayload.jsonOrThrow(payload, {
            unrecognizedObjectKeys: "strip",
        });
        this.websocket.send(JSON.stringify(jsonPayload));
        const response = await new Promise<
            Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage | undefined
        >((resolve) => {
            this.websocket.addEventListener("message", (event) => {
                const response = parse(event.data);
                resolve(response);
            });
        });
        if (response != null && isError(response)) {
            throw new errors.HumeError({
                message: `CODE ${response.code}: ${response.error}`,
            });
        }
        return response;
    }

    private async tillSocketOpen(): Promise<WebSocket> {
        if (this.websocket.readyState === WebSocket.OPEN) {
            return this.websocket;
        }
        return new Promise((resolve, reject) => {
            this.websocket.addEventListener("open", () => {
                resolve(this.websocket);
            });

            this.websocket.addEventListener("error", (event) => {
                reject(event);
            });
        });
    }
}

function isError(
    response: Hume.expressionMeasurement.stream.Config | Hume.expressionMeasurement.stream.StreamErrorMessage,
): response is Hume.expressionMeasurement.stream.StreamErrorMessage {
    return (response as Hume.expressionMeasurement.stream.StreamErrorMessage).error != null;
}
