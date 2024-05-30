"use client";

import { useState } from "react";
import UploadFormModal from "@/app/ui-components/UploadFormModal";
import { Upload } from "lucide-react";

export default function UploadButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className="flex items-center p-2 bg-blue-500 text-white rounded-md"
        onClick={() => setIsModalOpen(true)}
      >
        <Upload className="h-6 w-6" />
        <span className="ml-2">Upload</span>
      </button>
      {isModalOpen && <UploadFormModal closeModal={() => setIsModalOpen(false)} />}
    </>
  );
}
