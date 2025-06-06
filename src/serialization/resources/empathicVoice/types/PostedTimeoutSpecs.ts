/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedTimeoutSpecsInactivity } from "./PostedTimeoutSpecsInactivity";
import { PostedTimeoutSpecsMaxDuration } from "./PostedTimeoutSpecsMaxDuration";

export const PostedTimeoutSpecs: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedTimeoutSpecs.Raw,
    Hume.empathicVoice.PostedTimeoutSpecs
> = core.serialization.object({
    inactivity: PostedTimeoutSpecsInactivity.optional(),
    maxDuration: core.serialization.property("max_duration", PostedTimeoutSpecsMaxDuration.optional()),
});

export declare namespace PostedTimeoutSpecs {
    export interface Raw {
        inactivity?: PostedTimeoutSpecsInactivity.Raw | null;
        max_duration?: PostedTimeoutSpecsMaxDuration.Raw | null;
    }
}
