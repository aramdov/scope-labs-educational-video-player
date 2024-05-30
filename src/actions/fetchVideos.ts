"use server";

import config from "@/config";


interface Video {
    id: string; // id
    title: string; // title
    user_id: string; // user_id
    created_at: string; // created_at
    num_comments: number; // nummber of comments
    video_url: string; // video_url
    }
  
/**
 * Fetches videos from the API that were uploaded by the provided user ID.
 * @returns A promise that resolves to an array of Video objects.
 */
export default async function fetchVideos(): Promise<Video[]> {
    const response = await fetch(`${config.base_videos_api}?user_id=${config.user_id}`, {
      next: { revalidate: 10 }, // Optional: Add revalidation for caching
    });
    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }
    const data = await response.json(); // Await the response.json() method
    return data.videos;
}