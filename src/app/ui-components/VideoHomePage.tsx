"use client";

import { useState, useEffect } from "react";
import Header from "@/app/ui-components/Header";
import GridComponent from "@/app/ui-components/GridComponent";

export default function Home() {

  return (
    <div>
      <Header/>
      <main className="p-4">
        <GridComponent/>
      </main>
    </div>
  );
}
