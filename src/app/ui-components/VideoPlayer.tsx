

import Link from "next/link";
import { formatDistanceToNow, parseISO } from 'date-fns';
import { MessageSquare } from 'lucide-react';
import fetchSingleVideo from "@/actions/fetchSingleVideo";

export default async function VideoPlayer(video_metadata: any) {

    // fetch single video information
    const video = await fetchSingleVideo(video_metadata.video_id);
    const { title, user_id, created_at, num_comments, video_url } = video;

    // calculate the time ago the video was uploaded
    const date = parseISO(created_at);
    const timeAgo = formatDistanceToNow(date, { addSuffix: true });

    return (
        <div>
            <video src={video_url} preload="none" controls className="w-full h-full object-cover rounded-lg" />
            {/* Video Metadata, */}
            <div className="mt-2">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-gray-600">@{user_id} · {timeAgo} </p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MessageSquare size={16}/> 
              <span>{num_comments} comments</span
              >
            </div>
        </div>
        </div>
    )
}