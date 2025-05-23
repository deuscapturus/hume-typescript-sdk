/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { ValidationArgs } from "./ValidationArgs";

export const EvaluationArgs: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.EvaluationArgs.Raw,
    Hume.expressionMeasurement.batch.EvaluationArgs
> = core.serialization.object({
    validation: ValidationArgs.optional(),
});

export declare namespace EvaluationArgs {
    export interface Raw {
        validation?: ValidationArgs.Raw | null;
    }
}
