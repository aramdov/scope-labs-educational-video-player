"use client";

import { useState } from "react";
import { Upload, Search, Type, Link as LinkIcon, X, Text } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { addVideo } from "@/actions/addVideo";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending} className="bg-cyan-500 text-white px-4 py-2 rounded-full">
      Upload
    </button>
  );
}

export default function Header() {
  const [search, setSearch] = useState(""); // Search state. However, currently search is not implemented.
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [state, formAction] = useFormState(
    async (prevState: { message: string; }, formData: FormData) => {
    const result = await addVideo(prevState, formData);
    if (result.message === "Video uploaded successfully") {
      setIsModalOpen(false); // Close modal on success
    }
    return result;
  }, initialState);

  return (
    <div className="mx-auto max-w-7xl">
      <header className="flex items-center justify-between p-8 bg-white mt-10">
        <div className="flex items-center">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2" color="#6b7280" />
            <input
              type="text"
              placeholder="Search videos..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-96 p-2 pl-8 border rounded-full bg-gray-200 placeholder-gray-500"
            />
          </div>
          <div className="ml-40">
            <Link href="/">
              <Image src="/FULL_LOGO_COLOR.png" 
                width={150} 
                height={150}
                priority={true} 
                alt="Learnwell Logo" />
            </Link>
          </div>
        </div>
        <button 
          className="flex items-center p-2 bg-cyan-500 text-white rounded-full"
          onClick={() => setIsModalOpen(true)}
        >
          <Upload className="h-5 w-5" />
          <span className="ml-2">Upload</span>
        </button>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-lg p-6 relative w-96" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-semibold mb-4">Upload a video</h2>
            <form action={formAction} className="space-y-4">
              <div className="flex items-center border rounded-full p-2 bg-gray-100">
                <span className="mr-2"><Type /></span>
                <input
                  type="text"
                  name="title"
                  placeholder="Title your video"
                  className="w-full bg-transparent border-none outline-none placeholder-gray-500"
                  required
                />
              </div>
              <div className="flex items-center border rounded-full p-2 bg-gray-100">
                <span className="mr-2"><LinkIcon /></span>
                <input
                  type="url"
                  name="url"
                  placeholder="https://www.your-video-link.com"
                  className="w-full bg-transparent border-none outline-none placeholder-gray-500"
                  required
                />
              </div>
              <div className="flex items-center border rounded-full p-2 bg-gray-100">
                <span className="mr-2"><Text /></span>
                <input
                  type="text"
                  name="description"
                  placeholder="Add a description"
                  className="w-full bg-transparent border-none outline-none placeholder-gray-500"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="bg-gray-300 text-black px-4 py-2 rounded-full"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <SubmitButton />
              </div>
              <p aria-live="polite" className="sr-only" role="status">
                {state?.message}
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
