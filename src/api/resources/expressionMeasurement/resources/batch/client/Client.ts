/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Hume from "../../../../../index";
import * as serializers from "../../../../../../serialization/index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";
import * as stream from "stream";
import * as fs from "fs";
import { Blob } from "buffer";
import { toJson } from "../../../../../../core/json";

export declare namespace Batch {
    export interface Options {
        environment?: core.Supplier<environments.HumeEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        apiKey?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class Batch {
    constructor(protected readonly _options: Batch.Options = {}) {}

    /**
     * Sort and filter jobs.
     *
     * @param {Hume.expressionMeasurement.batch.BatchListJobsRequest} request
     * @param {Batch.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expressionMeasurement.batch.listJobs()
     */
    public async listJobs(
        request: Hume.expressionMeasurement.batch.BatchListJobsRequest = {},
        requestOptions?: Batch.RequestOptions,
    ): Promise<Hume.expressionMeasurement.batch.UnionJob[]> {
        const { limit, status, when, timestampMs, sortBy, direction } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (status != null) {
            if (Array.isArray(status)) {
                _queryParams["status"] = status.map((item) =>
                    serializers.expressionMeasurement.batch.Status.jsonOrThrow(item, {
                        unrecognizedObjectKeys: "strip",
                    }),
                );
            } else {
                _queryParams["status"] = serializers.expressionMeasurement.batch.Status.jsonOrThrow(status, {
                    unrecognizedObjectKeys: "strip",
                });
            }
        }

        if (when != null) {
            _queryParams["when"] = serializers.expressionMeasurement.batch.When.jsonOrThrow(when, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (timestampMs != null) {
            _queryParams["timestamp_ms"] = timestampMs.toString();
        }

        if (sortBy != null) {
            _queryParams["sort_by"] = serializers.expressionMeasurement.batch.SortBy.jsonOrThrow(sortBy, {
                unrecognizedObjectKeys: "strip",
            });
        }

        if (direction != null) {
            _queryParams["direction"] = serializers.expressionMeasurement.batch.Direction.jsonOrThrow(direction, {
                unrecognizedObjectKeys: "strip",
            });
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Production,
                "v0/batch/jobs",
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "hume/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.expressionMeasurement.batch.listJobs.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError("Timeout exceeded when calling GET /v0/batch/jobs.");
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Start a new measurement inference job.
     *
     * @param {Hume.expressionMeasurement.batch.InferenceBaseRequest} request
     * @param {Batch.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expressionMeasurement.batch.startInferenceJob({
     *         urls: ["https://hume-tutorials.s3.amazonaws.com/faces.zip"],
     *         notify: true
     *     })
     */
    public async startInferenceJob(
        request: Hume.expressionMeasurement.batch.InferenceBaseRequest,
        requestOptions?: Batch.RequestOptions,
    ): Promise<Hume.expressionMeasurement.batch.JobId> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Production,
                "v0/batch/jobs",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "hume/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.expressionMeasurement.batch.InferenceBaseRequest.jsonOrThrow(request, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.expressionMeasurement.batch.JobId.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError("Timeout exceeded when calling POST /v0/batch/jobs.");
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the request details and state of a given job.
     *
     * @param {string} id - The unique identifier for the job.
     * @param {Batch.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expressionMeasurement.batch.getJobDetails("job_id")
     */
    public async getJobDetails(
        id: string,
        requestOptions?: Batch.RequestOptions,
    ): Promise<Hume.expressionMeasurement.batch.UnionJob> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Production,
                `v0/batch/jobs/${encodeURIComponent(id)}`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "hume/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.expressionMeasurement.batch.UnionJob.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError("Timeout exceeded when calling GET /v0/batch/jobs/{id}.");
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the JSON predictions of a completed inference job.
     *
     * @param {string} id - The unique identifier for the job.
     * @param {Batch.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expressionMeasurement.batch.getJobPredictions("job_id")
     */
    public async getJobPredictions(
        id: string,
        requestOptions?: Batch.RequestOptions,
    ): Promise<Hume.expressionMeasurement.batch.UnionPredictResult[]> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Production,
                `v0/batch/jobs/${encodeURIComponent(id)}/predictions`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "hume/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.expressionMeasurement.batch.getJobPredictions.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError("Timeout exceeded when calling GET /v0/batch/jobs/{id}/predictions.");
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the artifacts ZIP of a completed inference job.
     */
    public async getJobArtifacts(id: string, requestOptions?: Batch.RequestOptions): Promise<stream.Readable> {
        const _response = await (this._options.fetcher ?? core.fetcher)<stream.Readable>({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Production,
                `v0/batch/jobs/${encodeURIComponent(id)}/artifacts`,
            ),
            method: "GET",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "hume/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            responseType: "streaming",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError("Timeout exceeded when calling GET /v0/batch/jobs/{id}/artifacts.");
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Start a new batch inference job.
     *
     * @param {File[] | fs.ReadStream[] | Blob[]} file
     * @param {Hume.expressionMeasurement.batch.BatchStartInferenceJobFromLocalFileRequest} request
     * @param {Batch.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.expressionMeasurement.batch.startInferenceJobFromLocalFile([fs.createReadStream("/path/to/your/file")], {})
     */
    public async startInferenceJobFromLocalFile(
        file: File[] | fs.ReadStream[] | Blob[],
        request: Hume.expressionMeasurement.batch.BatchStartInferenceJobFromLocalFileRequest,
        requestOptions?: Batch.RequestOptions,
    ): Promise<Hume.expressionMeasurement.batch.JobId> {
        const _request = await core.newFormData();
        if (request.json != null) {
            _request.append(
                "json",
                toJson(
                    serializers.expressionMeasurement.batch.InferenceBaseRequest.jsonOrThrow(request.json, {
                        unrecognizedObjectKeys: "strip",
                    }),
                ),
            );
        }

        for (const _file of file) {
            await _request.appendFile("file", _file);
        }

        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.HumeEnvironment.Production,
                "v0/batch/jobs",
            ),
            method: "POST",
            headers: {
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "hume",
                "X-Fern-SDK-Version": "0.10.3",
                "User-Agent": "hume/0.10.3",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ..._maybeEncodedRequest.headers,
                ...requestOptions?.headers,
            },
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.expressionMeasurement.batch.JobId.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.HumeError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.HumeError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.HumeTimeoutError("Timeout exceeded when calling POST /v0/batch/jobs.");
            case "unknown":
                throw new errors.HumeError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-Hume-Api-Key": apiKeyValue };
    }
}
