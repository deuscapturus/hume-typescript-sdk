/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { Queued } from "./Queued";

export const QueuedState: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.QueuedState.Raw,
    Hume.expressionMeasurement.batch.QueuedState
> = core.serialization.object({}).extend(Queued);

export declare namespace QueuedState {
    export interface Raw extends Queued.Raw {}
}
