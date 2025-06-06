/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";

export const MillisecondInterval: core.serialization.ObjectSchema<
    serializers.empathicVoice.MillisecondInterval.Raw,
    Hume.empathicVoice.MillisecondInterval
> = core.serialization.object({
    begin: core.serialization.number(),
    end: core.serialization.number(),
});

export declare namespace MillisecondInterval {
    export interface Raw {
        begin: number;
        end: number;
    }
}
