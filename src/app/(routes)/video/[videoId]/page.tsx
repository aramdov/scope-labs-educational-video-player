
import Header from "@/app/ui-components/Header";
import VideoPlayer from "@/app/ui-components/VideoPlayer";
import VideoCard from "@/app/ui-components/VideoCard";
import  fetchComments  from "@/actions/fetchComments";
import fetchVideos from "@/actions/fetchVideos";
import CommentSection from "@/app/ui-components/CommentSection";

interface VideoPageParams {
    videoId?: string;
  }
  
  export default async function VideoPage({
    params,
  }: {
    params: VideoPageParams;
  }) {
    const videoId  = params.videoId? params.videoId : "";
    // console.log("VIDEO ID ", videoId);
  
    const comments = await fetchComments(videoId);
    const videos = await fetchVideos(); // used for the sidebar view of other videos

    // Shuffle the videos array
    const shuffledVideos = videos.sort(() => Math.random() - 0.5);

    // Get the first 3 videos
    const selectedVideos = shuffledVideos.slice(0, 3);

    
    return (
      <>
        <Header/>
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-2">
              <VideoPlayer video_id={videoId} />

              <CommentSection comments={comments} video_id={videoId} />
            </div>
            
            <div className=" ml-5 col-span-2 flex flex-col space-y-4">
              {/* The 3 videos on the side */}
              {selectedVideos.map((video, index) => (
                <VideoCard key={index} {...video} />
              ))}
            </div>
          </div>
        </div>
      </>
    )}
