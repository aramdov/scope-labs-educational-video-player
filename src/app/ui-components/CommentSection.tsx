import { formatDistanceToNow, parseISO } from 'date-fns';
import { MessageSquare } from 'lucide-react';

interface VideoComment {
    created_at: string;
    user_id: string;
    content: string;
    id: string;
    video_id: string;
}

export default function CommentSection({ comments }: { comments: VideoComment[] }) {
    // iterate through all comments and calculate the time ago the comment was uploaded
    comments.forEach(comment => {
        const date = parseISO(comment.created_at);
        comment.created_at = formatDistanceToNow(date, { addSuffix: true });
    });

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold">Comments • {comments.length}</h2>
            <div className="mt-4">
                <div className="flex space-x-3 items-center">

                    <div className="flex-1 relative">
                        <input 
                            type="text" 
                            placeholder="Add your comment..." 
                            className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:border-cyan-500"
                        />
                        <MessageSquare size={24} className="absolute left-3 top-3 text-gray-400" />
                    </div>
                    <button className="bg-cyan-500 text-white px-4 py-2 rounded-full">Comment</button>
                </div>
            </div>
            <div className="mt-6 space-y-6">
                {comments.map((comment, index) => (
                    <div key={index} className="flex space-x-3">
                        <div className="flex-shrink-0">
                            <img src={`https://avatars.dicebear.com/api/human/${comment.user_id}.svg`} alt="avatar" className="w-5 h-5 rounded-full" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-semibold text-gray-800">{comment.user_id} • {comment.created_at}</p>
                            <div className="bg-gray-100 p-3 rounded-full mt-1">
                                <p className="text-sm text-black">{comment.content}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
