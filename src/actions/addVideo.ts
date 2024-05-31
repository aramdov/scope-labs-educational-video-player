"use server";


import config from "@/config";
import { revalidatePath } from "next/cache";


export async function addVideo(
    prevState: { message: string },
    formData: FormData,
  ) {
    const title = formData.get("title");
    const video_url = formData.get("url");
    const description = formData.get("description");
    const user_id = config.user_id;
  
    if (!title || !video_url || !description) {
      return { message: "All fields are required" };
    }
  
    try {
      const response = await fetch(`${config.base_videos_api}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id, title, video_url, description }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to upload video");
      }
  
      revalidatePath("/");
      return { message: "Video uploaded successfully" };
    } catch (error) {
      return { message: "Failed to upload video" };
    }
  }