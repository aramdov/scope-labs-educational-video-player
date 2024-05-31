"use client";

import { formatDistanceToNow, parseISO } from 'date-fns';
import { MessageSquare } from 'lucide-react';
import { useFormStatus } from "react-dom";
import { addComment } from "@/actions/addComment";
import config from "@/config";
import { isValid } from 'date-fns';

interface VideoComment {
    created_at: string;
    user_id: string;
    content: string;
    id: string;
    video_id: string;
}

function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <button type="submit" className="bg-cyan-500 text-white px-4 py-2 rounded-full" aria-disabled={pending}>
        Comment
      </button>
    );
  }

export default function CommentSection({ comments, video_id }: { comments: VideoComment[], video_id: string }) {
    // log teh video id
    console.log(`CommentSection | video_id: ${video_id}`);
    // iterate through all comments and calculate the time ago the comment was uploaded. replace the created_at field with the time ago
    comments.forEach(comment => {
        const date = parseISO(comment.created_at);
        // log some meta data about the comment throughout this iteration
        // console.log(`CommentSection | user_id: ${comment.user_id}`);
        // console.log(`CommentSection | content: ${comment.content}`);
        // console.log(`CommentSection | video_id: ${comment.video_id}`);
        // console.log(`CommentSection | id: ${comment.id}`);
        // // log the date to the console to see if this is working
        // console.log(`CommentSection | date: ${date}`);
        // newline log
        // console.log(`\n`);
        if (isValid(date)) {
                comment.created_at = formatDistanceToNow(date, { addSuffix: true });
        }
    });

    // useEffect(() => {
    //     comments.forEach(comment => {
    //         console.log(`CommentSection | user_id: ${comment.user_id}`);
    //         console.log(`CommentSection | content: ${comment.content}`);
    //         console.log(`CommentSection | video_id: ${comment.video_id}`);
    //         console.log(`CommentSection | id: ${comment.id}`);

    //         if (comment.created_at === undefined || comment.created_at === null) {
    //             return;
    //         }
    //         const date = parseISO(comment.created_at);

    //         // log the date to the console to see if this is working
    //         console.log(`CommentSection | date: ${date}`);

    //         if (isValid(date)) {
    //             comment.created_at = formatDistanceToNow(date, { addSuffix: true });
    //         }
            
    //     });
    //   }, [comments]); // Depend on comments

    // add additional arguments to be passed to the addComment server action using bind
    // user_id is the user that is adding the comment (hardcoded for the entire application in the config file)
    const addCommentWithVideoAndUserId = addComment.bind(null, { video_id: video_id, user: config.user_id });

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold">Comments • {comments.length}</h2>
            <div className="mt-4">
                <form action={addCommentWithVideoAndUserId} className="flex space-x-3 items-center">
                    <div className="flex-shrink-0">
                        <img src="https://avatars.dicebear.com/api/human/default.svg" alt="avatar" className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="flex-1 relative">
                        <input 
                            type="text" 
                            name="content" 
                            placeholder="Add your comment..." 
                            className="w-full p-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:border-cyan-500"
                            required
                        />
                        <MessageSquare size={24} className="absolute left-3 top-3 text-gray-400" />
                    </div>
                    <SubmitButton />
                </form>
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
