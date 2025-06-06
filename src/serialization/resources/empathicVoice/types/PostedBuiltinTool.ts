/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { PostedBuiltinToolName } from "./PostedBuiltinToolName";

export const PostedBuiltinTool: core.serialization.ObjectSchema<
    serializers.empathicVoice.PostedBuiltinTool.Raw,
    Hume.empathicVoice.PostedBuiltinTool
> = core.serialization.object({
    name: PostedBuiltinToolName,
    fallbackContent: core.serialization.property("fallback_content", core.serialization.string().optional()),
});

export declare namespace PostedBuiltinTool {
    export interface Raw {
        name: PostedBuiltinToolName.Raw;
        fallback_content?: string | null;
    }
}
