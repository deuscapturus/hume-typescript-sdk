/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { PredictionsOptionalNullFacePrediction } from "./PredictionsOptionalNullFacePrediction";
import { PredictionsOptionalNullBurstPrediction } from "./PredictionsOptionalNullBurstPrediction";
import { PredictionsOptionalTranscriptionMetadataProsodyPrediction } from "./PredictionsOptionalTranscriptionMetadataProsodyPrediction";
import { PredictionsOptionalTranscriptionMetadataLanguagePrediction } from "./PredictionsOptionalTranscriptionMetadataLanguagePrediction";
import { PredictionsOptionalTranscriptionMetadataNerPrediction } from "./PredictionsOptionalTranscriptionMetadataNerPrediction";
import { PredictionsOptionalNullFacemeshPrediction } from "./PredictionsOptionalNullFacemeshPrediction";

export const ModelsPredictions: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.ModelsPredictions.Raw,
    Hume.expressionMeasurement.batch.ModelsPredictions
> = core.serialization.object({
    face: PredictionsOptionalNullFacePrediction.optional(),
    burst: PredictionsOptionalNullBurstPrediction.optional(),
    prosody: PredictionsOptionalTranscriptionMetadataProsodyPrediction.optional(),
    language: PredictionsOptionalTranscriptionMetadataLanguagePrediction.optional(),
    ner: PredictionsOptionalTranscriptionMetadataNerPrediction.optional(),
    facemesh: PredictionsOptionalNullFacemeshPrediction.optional(),
});

export declare namespace ModelsPredictions {
    export interface Raw {
        face?: PredictionsOptionalNullFacePrediction.Raw | null;
        burst?: PredictionsOptionalNullBurstPrediction.Raw | null;
        prosody?: PredictionsOptionalTranscriptionMetadataProsodyPrediction.Raw | null;
        language?: PredictionsOptionalTranscriptionMetadataLanguagePrediction.Raw | null;
        ner?: PredictionsOptionalTranscriptionMetadataNerPrediction.Raw | null;
        facemesh?: PredictionsOptionalNullFacemeshPrediction.Raw | null;
    }
}
