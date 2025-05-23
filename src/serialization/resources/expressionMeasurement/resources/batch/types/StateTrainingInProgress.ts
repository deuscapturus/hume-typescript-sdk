/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InProgress } from "./InProgress";

export const StateTrainingInProgress: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.StateTrainingInProgress.Raw,
    Hume.expressionMeasurement.batch.StateTrainingInProgress
> = core.serialization.object({}).extend(InProgress);

export declare namespace StateTrainingInProgress {
    export interface Raw extends InProgress.Raw {}
}
