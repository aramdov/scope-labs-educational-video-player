
import { formatDistanceToNow, parseISO } from 'date-fns';
import { MessageSquare } from 'lucide-react';
import fetchSingleVideo from "@/actions/fetchSingleVideo";

/**
 * A Video Player component that plays a video and displays its metadata.
 * Uses the fetchSingleVideo action to fetch the video information.
 * Uses the date-fns library to format the time ago the video was uploaded.
 * It displays the video title, user_id, time ago, and number of comments.
 * It also uses HTML5 video player to play the video that provides playback controls to the user.
 * @param video_metadata An object containing the video_id of the video to be played
 * @returns A JSX element containing the video player and its metadata
 */
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