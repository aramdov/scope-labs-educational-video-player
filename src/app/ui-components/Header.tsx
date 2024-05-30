"use client";

import { useState } from "react";
import { Upload, Search } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [search, setSearch] = useState(""); // The state is used to store the search query

  return (

    <div className="mx-auto max-w-7xl">
        <header className="flex items-center justify-between p-8 bg-white mt-10">
        <div className="flex items-center">

            <div className="relative"> {/* Add a wrapper div with relative positioning */}
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2" color="#6b7280" />
                <input
                type="text"
                placeholder="Search videos..."
                value={search}
                onChange={(e) => setSearch(e.target.value)} // Update the state with the search query
                className="w-96 p-2 pl-8 border rounded-full bg-gray-200 placeholder-gray-500" 
                />
            </div>

            <div className="ml-40">
                <Image src="/FULL_LOGO_COLOR.png" 
                width={150} 
                height={150}
                priority={true} 
                alt="Learnwell Logo" /> {/* App name prefix can be extracted to config and used here via "${config.appName} logo" */}
            </div>

        </div>
        <button className="flex items-center p-2 bg-cyan-500 text-white rounded-full">
            {/* TODO: Open a modal for the upload*/}
            <Upload className="h-5 w-5" />
            <span className="ml-2">Upload</span>
        </button>
        </header>
    </div>
  );
}
