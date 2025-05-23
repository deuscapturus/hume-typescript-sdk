/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const PostedEventMessageSpec: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedEventMessageSpec.Raw,
    Hume.empathicVoice.PostedEventMessageSpec
> = core.serialization.object({
    enabled: core.serialization.boolean(),
    text: core.serialization.string().optional(),
});

export declare namespace PostedEventMessageSpec {
    export interface Raw {
        enabled: boolean;
        text?: string | null;
    }
}
