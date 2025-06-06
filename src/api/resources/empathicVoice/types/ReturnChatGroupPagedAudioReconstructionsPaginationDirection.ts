/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Indicates the order in which the paginated results are presented, based on their creation date.
 *
 * It shows `ASC` for ascending order (chronological, with the oldest records first) or `DESC` for descending order (reverse-chronological, with the newest records first). This value corresponds to the `ascending_order` query parameter used in the request.
 */
export type ReturnChatGroupPagedAudioReconstructionsPaginationDirection = "ASC" | "DESC";
export const ReturnChatGroupPagedAudioReconstructionsPaginationDirection = {
    Asc: "ASC",
    Desc: "DESC",
} as const;
