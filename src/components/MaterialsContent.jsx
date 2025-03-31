"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Folder, FileText, Eye, MoreVertical, Upload } from "lucide-react";

export default function MaterialsContent() {
  return (
    <div className="flex-1">
      {/* Example Card for content listing */}
      <Card>
        <CardContent>
          <h3 className="text-lg font-semibold mb-4">Content</h3>

          {/* Folder hierarchy */}
          <div className="space-y-2">
            {/* Chapter 1 folder */}
            <div className="flex items-center space-x-2">
              <Folder size={20} />
              <span className="font-medium">Chapter 1</span>
              <Eye size={18} className="ml-auto cursor-pointer" />
              <MoreVertical size={18} className="cursor-pointer" />
            </div>

            {/* Sub-folder or file */}
            <div className="ml-6 flex items-center space-x-2">
              <Folder size={20} />
              <span className="font-medium">Chapter 1.1</span>
              <Eye size={18} className="ml-auto cursor-pointer" />
              <MoreVertical size={18} className="cursor-pointer" />
            </div>

            {/* Another file/folder */}
            <div className="ml-6 flex items-center space-x-2">
              <Folder size={20} />
              <span className="font-medium">Chapter 1.2</span>
              <Eye size={18} className="ml-auto cursor-pointer" />
              <MoreVertical size={18} className="cursor-pointer" />
            </div>

            {/* PDF file */}
            <div className="flex items-center space-x-2 mt-4">
              <FileText size={20} />
              <span>Chapter 2 revision notes.pdf</span>
              <Eye size={18} className="ml-auto cursor-pointer" />
              <MoreVertical size={18} className="cursor-pointer" />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <Button variant="outline" className="flex items-center gap-2">
              <Upload size={18} />
              Upload File
            </Button>
            <Button variant="outline">Upload Folder</Button>
            <Button variant="outline">Add Folder</Button>
            <Button variant="outline">Add Text</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
