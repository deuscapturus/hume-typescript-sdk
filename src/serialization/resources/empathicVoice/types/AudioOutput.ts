/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const AudioOutput: core.serialization.ObjectSchema<
    serializers.empathicVoice.AudioOutput.Raw,
    Hume.empathicVoice.AudioOutput
> = core.serialization.object({
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    data: core.serialization.string(),
    id: core.serialization.string(),
    index: core.serialization.number(),
    type: core.serialization.stringLiteral("audio_output"),
});

export declare namespace AudioOutput {
    export interface Raw {
        custom_session_id?: string | null;
        data: string;
        id: string;
        index: number;
        type: "audio_output";
    }
}
