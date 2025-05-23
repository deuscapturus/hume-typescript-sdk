/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { StateTlInferenceQueued } from "./StateTlInferenceQueued";
import { StateTlInferenceInProgress } from "./StateTlInferenceInProgress";
import { StateTlInferenceCompletedTlInference } from "./StateTlInferenceCompletedTlInference";
import { StateTlInferenceFailed } from "./StateTlInferenceFailed";

export const StateTlInference: core.serialization.Schema<
    serializers.expressionMeasurement.batch.StateTlInference.Raw,
    Hume.expressionMeasurement.batch.StateTlInference
> = core.serialization
    .union("status", {
        QUEUED: StateTlInferenceQueued,
        IN_PROGRESS: StateTlInferenceInProgress,
        COMPLETED: StateTlInferenceCompletedTlInference,
        FAILED: StateTlInferenceFailed,
    })
    .transform<Hume.expressionMeasurement.batch.StateTlInference>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace StateTlInference {
    export type Raw =
        | StateTlInference.Queued
        | StateTlInference.InProgress
        | StateTlInference.Completed
        | StateTlInference.Failed;

    export interface Queued extends StateTlInferenceQueued.Raw {
        status: "QUEUED";
    }

    export interface InProgress extends StateTlInferenceInProgress.Raw {
        status: "IN_PROGRESS";
    }

    export interface Completed extends StateTlInferenceCompletedTlInference.Raw {
        status: "COMPLETED";
    }

    export interface Failed extends StateTlInferenceFailed.Raw {
        status: "FAILED";
    }
}
