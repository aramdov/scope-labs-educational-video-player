"use server";
import config from "@/config";

interface VideoComment {
    created_at: string;
    user_id: string;
    content: string;
    id: string;
    video_id: string;
}

/**
 * Asynchronously fetches comments for a video from the API.
 * @param video_id The ID of the video for which comments are being fetched.
 * @returns A Promise that resolves to an array of Comment objects.
 */
export default async function fetchComments(video_id: string | undefined): Promise<VideoComment[]> {
    const response = await fetch(`${config.base_videos_api}/comments?video_id=${video_id}`, {
      next: { revalidate: 10 }, // Optional: Add revalidation for caching
    });
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = await response.json(); // Await the response.json() method
    return data.comments;
}