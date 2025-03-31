// src/app/(dashboard)/layout.js
"use client";

import Sidebar from "@/components/Sidebar";
import TopHeader from "@/components/TopHeader";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <TopHeader />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
