
import VideoCard from "@/app/ui-components/VideoCard";
import fetchVideos from "@/actions/fetchVideos";



/**
 * A GridComponent that displays a grid of video cards.
 * It fetches the videos from the fetchVideos action and maps each video to a VideoCard component.
 * @returns A JSX element containing a grid of video cards.
 */
export default async function GridComponent() {

  const videos = await fetchVideos();

  return (
    <div className="mx-auto max-w-7xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );

}
