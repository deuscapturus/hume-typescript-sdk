/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const UserInterruption: core.serialization.ObjectSchema<
    serializers.empathicVoice.UserInterruption.Raw,
    Hume.empathicVoice.UserInterruption
> = core.serialization.object({
    customSessionId: core.serialization.property("custom_session_id", core.serialization.string().optional()),
    time: core.serialization.number(),
    type: core.serialization.stringLiteral("user_interruption"),
});

export declare namespace UserInterruption {
    export interface Raw {
        custom_session_id?: string | null;
        time: number;
        type: "user_interruption";
    }
}
