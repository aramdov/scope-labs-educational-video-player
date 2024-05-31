'use server';
import config from "@/config";
import { revalidatePath } from "next/cache";


/**
 * Adds a comment to a video.
 * @param video_id The ID of the video to add the comment to.
 * @param user_id The user ID of the user adding the comment.
 * @param formData The form data containing the comment content.
 */
export const addComment = async (video_metadata: any, formData: any) => {
    const video_id = video_metadata.video_id;
    const user_id = config.user_id;
    const content = formData.get('content');

    // make a POST request to the API to add a comment
    const url = `${config.base_videos_api}/comments/`;
    // body includes video_id, user_id, and content
    const body = JSON.stringify({ video_id, user_id, content });
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    });
    if (!response.ok) {
        // log the response
        console.log(`addComment | response: ${response.json()}`);
        throw new Error("Failed to add comment");
    }
    revalidatePath(`/video/${video_id}`); // Revalidate the video page (so the comment that was submitted is shown in the list of comments)
    return response.json();

}