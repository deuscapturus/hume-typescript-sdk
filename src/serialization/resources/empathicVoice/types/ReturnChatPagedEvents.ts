/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Hume from "../../../../api/index";
import * as core from "../../../../core";
import { ReturnChatPagedEventsStatus } from "./ReturnChatPagedEventsStatus";
import { ReturnChatPagedEventsPaginationDirection } from "./ReturnChatPagedEventsPaginationDirection";
import { ReturnChatEvent } from "./ReturnChatEvent";
import { ReturnConfigSpec } from "./ReturnConfigSpec";

export const ReturnChatPagedEvents: core.serialization.ObjectSchema<
    serializers.empathicVoice.ReturnChatPagedEvents.Raw,
    Hume.empathicVoice.ReturnChatPagedEvents
> = core.serialization.object({
    id: core.serialization.string(),
    chatGroupId: core.serialization.property("chat_group_id", core.serialization.string()),
    status: ReturnChatPagedEventsStatus,
    startTimestamp: core.serialization.property("start_timestamp", core.serialization.number()),
    endTimestamp: core.serialization.property("end_timestamp", core.serialization.number().optional()),
    paginationDirection: core.serialization.property("pagination_direction", ReturnChatPagedEventsPaginationDirection),
    eventsPage: core.serialization.property("events_page", core.serialization.list(ReturnChatEvent)),
    metadata: core.serialization.string().optional(),
    pageNumber: core.serialization.property("page_number", core.serialization.number()),
    pageSize: core.serialization.property("page_size", core.serialization.number()),
    totalPages: core.serialization.property("total_pages", core.serialization.number()),
    config: ReturnConfigSpec.optional(),
});

export declare namespace ReturnChatPagedEvents {
    export interface Raw {
        id: string;
        chat_group_id: string;
        status: ReturnChatPagedEventsStatus.Raw;
        start_timestamp: number;
        end_timestamp?: number | null;
        pagination_direction: ReturnChatPagedEventsPaginationDirection.Raw;
        events_page: ReturnChatEvent.Raw[];
        metadata?: string | null;
        page_number: number;
        page_size: number;
        total_pages: number;
        config?: ReturnConfigSpec.Raw | null;
    }
}
