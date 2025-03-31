"use client";

import MaterialsContent from "@/components/MaterialsContent";

export default function MaterialsPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Sub-navigation */}
      <div className="flex items-center space-x-4 border-b pb-2 mb-4">
        <button className="text-gray-700 font-medium">Content</button>
        <button className="text-gray-700">Course Details</button>
        <button className="text-gray-700">Revision</button>
        <button className="text-blue-600">Add main Folder</button>
      </div>

      {/* Main Content + Info Panel */}
      <div className="flex flex-1">
        <MaterialsContent />

        {/* Right info panel (optional) */}
        <div className="hidden lg:block w-80 border-l pl-4">
          <h3 className="text-lg font-semibold mb-2">Details</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Created on:</strong> 22 Dec 2023, 10:35 pm</p>
            <p><strong>Last Modified:</strong> 28 Dec 2023, 12:08 pm</p>
            <p><strong>Visible to:</strong> Batch 1, Batch 2, Batch 3</p>
            <p><strong>No. of subfolders:</strong> 2</p>
            <p><strong>No. of files:</strong> 6</p>
            <p><strong>Physical folder:</strong> 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
