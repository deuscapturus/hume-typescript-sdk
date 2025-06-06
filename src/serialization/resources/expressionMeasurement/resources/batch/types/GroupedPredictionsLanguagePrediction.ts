/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { LanguagePrediction } from "./LanguagePrediction";

export const GroupedPredictionsLanguagePrediction: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.GroupedPredictionsLanguagePrediction.Raw,
    Hume.expressionMeasurement.batch.GroupedPredictionsLanguagePrediction
> = core.serialization.object({
    id: core.serialization.string(),
    predictions: core.serialization.list(LanguagePrediction),
});

export declare namespace GroupedPredictionsLanguagePrediction {
    export interface Raw {
        id: string;
        predictions: LanguagePrediction.Raw[];
    }
}
