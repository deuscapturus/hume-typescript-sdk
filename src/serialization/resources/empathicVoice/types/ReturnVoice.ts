/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnVoiceProvider } from "./ReturnVoiceProvider";
import { ReturnCustomVoice } from "./ReturnCustomVoice";

export const ReturnVoice: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnVoice.Raw,
    Hume.empathicVoice.ReturnVoice
> = core.serialization.object({
    provider: ReturnVoiceProvider,
    name: core.serialization.string().optional(),
    customVoice: core.serialization.property("custom_voice", ReturnCustomVoice.optional()),
});

export declare namespace ReturnVoice {
    export interface Raw {
        provider: ReturnVoiceProvider.Raw;
        name?: string | null;
        custom_voice?: ReturnCustomVoice.Raw | null;
    }
}
