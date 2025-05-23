/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { JobInference } from "./JobInference";

export const InferenceJob: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.InferenceJob.Raw,
    Hume.expressionMeasurement.batch.InferenceJob
> = core.serialization
    .object({
        type: core.serialization.string(),
    })
    .extend(JobInference);

export declare namespace InferenceJob {
    export interface Raw extends JobInference.Raw {
        type: string;
    }
}
