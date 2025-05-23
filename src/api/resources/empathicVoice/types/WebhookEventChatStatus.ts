/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type WebhookEventChatStatus =
    | "ACTIVE"
    | "USER_ENDED"
    | "USER_TIMEOUT"
    | "INACTIVITY_TIMEOUT"
    | "MAX_DURATION_TIMEOUT"
    | "ERROR";
export const WebhookEventChatStatus = {
    Active: "ACTIVE",
    UserEnded: "USER_ENDED",
    UserTimeout: "USER_TIMEOUT",
    InactivityTimeout: "INACTIVITY_TIMEOUT",
    MaxDurationTimeout: "MAX_DURATION_TIMEOUT",
    Error: "ERROR",
} as const;
