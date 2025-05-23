/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Hume from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { SourceUrl } from "./SourceUrl";
import { SourceFile } from "./SourceFile";
import { SourceTextSource } from "./SourceTextSource";

export const Source: core.serialization.Schema<
    serializers.expressionMeasurement.batch.Source.Raw,
    Hume.expressionMeasurement.batch.Source
> = core.serialization
    .union("type", {
        url: SourceUrl,
        file: SourceFile,
        text: SourceTextSource,
    })
    .transform<Hume.expressionMeasurement.batch.Source>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Source {
    export type Raw = Source.Url | Source.File | Source.Text;

    export interface Url extends SourceUrl.Raw {
        type: "url";
    }

    export interface File extends SourceFile.Raw {
        type: "file";
    }

    export interface Text extends SourceTextSource.Raw {
        type: "text";
    }
}
