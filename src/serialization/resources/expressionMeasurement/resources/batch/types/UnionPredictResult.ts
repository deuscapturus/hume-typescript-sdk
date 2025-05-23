/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { InferenceSourcePredictResult } from "./InferenceSourcePredictResult";

export const UnionPredictResult: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.UnionPredictResult.Raw,
    Hume.expressionMeasurement.batch.UnionPredictResult
> = InferenceSourcePredictResult;

export declare namespace UnionPredictResult {
    export type Raw = InferenceSourcePredictResult.Raw;
}
