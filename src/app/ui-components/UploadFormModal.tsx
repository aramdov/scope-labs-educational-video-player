"use client";

import { useState } from "react";

interface UploadFormModalProps {
  closeModal: () => void;
}

export default function UploadFormModal({ closeModal }: UploadFormModalProps) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    // TODO: Use Next.JS Server Actions to upload the video instead of handleSubmit function
    e.preventDefault();
    const response = await fetch("https://your-fastapi-server.com/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, link, userId }),
    });
    if (response.ok) {
      closeModal();
      // Optionally, you can call a function passed via props to update the parent component's state.
    } else {
      console.error("Failed to upload video");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Upload a video</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title your video
            </label>
            <input
              type="text"
              id="title"
              className="mt-1 p-2 block w-full border rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">
              Video Link
            </label>
            <input
              type="url"
              id="link"
              className="mt-1 p-2 block w-full border rounded-md"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              required
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <input
              type="text"
              id="userId"
              className="mt-1 p-2 block w-full border rounded-md"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              required
            />
          </div> */}
          <div className="flex justify-end">
            <button
              type="button"
              className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
