/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedTimeoutSpecsMaxDuration: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedTimeoutSpecsMaxDuration.Raw,
    Hume.empathicVoice.PostedTimeoutSpecsMaxDuration
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    durationSecs: core.serialization.property("duration_secs", core.serialization.number().optional()),
});

export declare namespace PostedTimeoutSpecsMaxDuration {
    export interface Raw {
        enabled: boolean;
        duration_secs?: number | null;
    }
}
