/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { File_ } from "./File_";

export const SourceFile: core.serialization.ObjectSchema<
    serializers.expressionMeasurement.batch.SourceFile.Raw,
    Hume.expressionMeasurement.batch.SourceFile
> = core.serialization.object({}).extend(File_);

export declare namespace SourceFile {
    export interface Raw extends File_.Raw {}
}
