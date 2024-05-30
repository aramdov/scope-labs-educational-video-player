"use server";

import config from "@/config";


interface Video {
  id: string; // id
  title: string; // title
  user_id: string; // user_id
  created_at: string; // created_at
  num_comments: number; // nummber of comments
  video_url: string; // video_url
  description: string; // description
  }
  
  

/**
 * Fetches a single video by its ID from the videos API
 * @param video_id - The ID of the video to fetch
 * @returns A Promise that resolves to an array of Video objects
 */
export default async function fetchSingleVideo(video_id: string | undefined): Promise<Video> {

    const response = await fetch(`${config.base_videos_api}/single?video_id=${video_id}`, {
      next: { revalidate: 10 }, // Optional: Add revalidation for caching
    });
    if (!response.ok) {
      throw new Error("Failed to fetch videos");
    }
    const data = await response.json(); // Await the response.json() method
    return data.video;
}

/*

Example response:
{
  "video": {
    "created_at": "2024-05-23T06:24:11.670339+00:00",
    "video_url": "video1",
    "user_id": "aram_dovlatyan",
    "description": "test1 edited",
    "title": "video1 title edited",
    "num_comments": 1,
    "id": "7GmiRhU1diSdqccd0nrw"
  }
}

*/