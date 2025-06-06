/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { TrainingBaseRequest } from "./TrainingBaseRequest";
import { StateTraining } from "./StateTraining";

export const JobTraining: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.JobTraining.Raw,
    Hume.expressionMeasurement.batch.JobTraining
> = core.serialization.object({
    jobId: core.serialization.property("job_id", core.serialization.string()),
    userId: core.serialization.property("user_id", core.serialization.string()),
    request: TrainingBaseRequest,
    state: StateTraining,
});

export declare namespace JobTraining {
    export interface Raw {
        job_id: string;
        user_id: string;
        request: TrainingBaseRequest.Raw;
        state: StateTraining.Raw;
    }
}
