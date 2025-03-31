"use client";

import { Button } from "./ui/button";
import { useState } from "react";

export default function TopHeader() {
  const [selectedCourse, setSelectedCourse] = useState("Course for Chemistry");
  const [selectedBatch, setSelectedBatch] = useState("All Batches");

  return (
    <header className="w-full border-b bg-white p-4 flex items-center justify-between">
      {/* Left side: Possibly a brand or leftover space */}
      <div className="flex items-center space-x-4">
        {/* Course Dropdown */}
        <select
          className="border px-3 py-2 rounded"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          <option>Course for Chemistry</option>
          <option>Course for Physics</option>
          <option>Course for Biology</option>
        </select>

        {/* Batch Dropdown */}
        <select
          className="border px-3 py-2 rounded"
          value={selectedBatch}
          onChange={(e) => setSelectedBatch(e.target.value)}
        >
          <option>All Batches</option>
          <option>Batch 1</option>
          <option>Batch 2</option>
        </select>
      </div>

      {/* Right side: User Info + Take Class Button */}
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className="font-semibold">Sir 1</div>
          <div className="text-sm text-gray-500">Chemistry | Level 3</div>
        </div>
        <img
          src="https://via.placeholder.com/32" // Replace with actual avatar
          alt="User Avatar"
          className="rounded-full w-8 h-8"
        />
        <Button className="bg-black text-white">Take Class</Button>
      </div>
    </header>
  );
}
