"use client"
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Folder, FileText, Eye, MoreVertical, Upload, ChevronDown, ChevronUp, Menu, Bell, Headset } from "lucide-react";
import Navbar from "../components/Navbar"

export default function TeacherDashboard() {
  const [selectedCourse, setSelectedCourse] = useState("Course for Chemistry");
  const [selectedBatch, setSelectedBatch] = useState("All Batches");
  const [isManageBatchOpen, setIsManageBatchOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar></Navbar>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-4 space-y-2">
          <nav className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">Teach</Button>
            <Button variant="ghost" className="w-full justify-start">Dashboard</Button>
            
            {/* Manage Batch Dropdown */}
            <div>
              <Button 
                variant="ghost" 
                className="flex justify-between items-center ml-12" 
                onClick={() => setIsManageBatchOpen(!isManageBatchOpen)}
              >
                Manage Batch <span>{isManageBatchOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
              </Button>
              {isManageBatchOpen && (
                <div className="pl-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-start">All Batches</Button>
                  <Button variant="ghost" className="w-full justify-start">Resources</Button>
                </div>
              )}
            </div>
            
            <Button variant="ghost" className="w-full justify-start">My Earnings</Button>
            <Button variant="ghost" className="w-full justify-start">Timetable</Button>
            <Button variant="ghost" className="w-full justify-start">Analytics</Button>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <select className="border p-2 rounded" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
                <option>Course for Chemistry</option>
                <option>Course for Physics</option>
              </select>
              <select className="border p-2 rounded ml-2" value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)}>
                <option>All Batches</option>
                <option>Batch 1</option>
              </select>
            </div>
            <Button className="bg-black text-white">Take Class</Button>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b pb-2 space-x-4">
            <Button variant="ghost">Students</Button>
            <Button variant="ghost">Announcements</Button>
            <Button variant="ghost" className="border-b-2 border-black">Materials</Button>
            <Button variant="ghost">Homework</Button>
            <Button variant="ghost">Attendance</Button>
            <Button variant="ghost">Discussion</Button>
          </div>
          
          {/* Content */}
          <Card className="mt-4">
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-4">Content</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Folder size={20} />
                  <span className="font-medium">Chapter 1.1</span>
                  <Eye size={18} className="ml-auto" />
                  <MoreVertical size={18} />
                </div>
                <div className="flex items-center space-x-2">
                  <FileText size={20} />
                  <span>Chapter 2 revision notes.pdf</span>
                  <Eye size={18} className="ml-auto" />
                  <MoreVertical size={18} />
                </div>
              </div>
              <div className="flex space-x-4 mt-4">
                <Button variant="outline" className="flex items-center"><Upload size={18} className="mr-2" /> Upload File</Button>
                <Button variant="outline">Upload Folder</Button>
                <Button variant="outline">Add Folder</Button>
                <Button variant="outline">Add Text</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}