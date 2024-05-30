
import Link from "next/link";
import { formatDistanceToNow, parseISO } from 'date-fns';
import { MessageSquare } from 'lucide-react';
// import Image from 'next/image';

interface VideoCardProps {
  id: string; // id
  title: string; // title
  user_id: string; // user_id
  created_at: string; // created_at
  num_comments: number; // nummber of comments
  video_url: string; // video_url (ie something ending in .mp4 or .webm)
  }
  
  export default function VideoCard({ id, title, user_id, created_at, num_comments, video_url }: VideoCardProps) {
    const date = parseISO(created_at);
    const timeAgo = formatDistanceToNow(date, { addSuffix: true }); // calculate the time ago
    
    return (
    <Link href={`/video/${id}`}>
      <div className="block p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition w-72 h-60">
        <div className="aspect-w-16 aspect-h-9">
            {/* TODO: Add a better thumbnail */}
            {/* <Image src={thumbnail} alt={title} className="w-full h-full object-cover rounded-lg" /> */}
            <video src={video_url} preload="none" controls className="w-full h-full object-cover rounded-lg" />
          </div>
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
    </Link>
    );
  }
  