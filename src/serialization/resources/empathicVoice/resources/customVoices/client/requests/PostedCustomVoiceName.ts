/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../index";
import * as Hume from "../../../../../../../api/index";
import * as core from "../../../../../../../core";

export const PostedCustomVoiceName: core.serialization.Schema<
    serializers.empathicVoice.PostedCustomVoiceName.Raw,
    Hume.empathicVoice.PostedCustomVoiceName
> = core.serialization.object({
    name: core.serialization.string(),
});

export declare namespace PostedCustomVoiceName {
    export interface Raw {
        name: string;
    }
}
