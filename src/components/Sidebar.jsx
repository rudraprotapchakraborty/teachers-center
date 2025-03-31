"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  // Define your nav links
  const navItems = [
    { label: "Teach", href: "/(dashboard)" },
    { label: "Students", href: "/(dashboard)/students" },
    { label: "Announcements", href: "/(dashboard)/announcements" },
    { label: "Materials", href: "/(dashboard)/materials" },
    { label: "Homework", href: "/(dashboard)/homework" },
    { label: "Attendance", href: "/(dashboard)/attendance" },
    { label: "Discussion", href: "/(dashboard)/discussion" },
    { label: "Manage Batch", href: "/(dashboard)/manage-batch" },
    { label: "All Batches", href: "/(dashboard)/all-batches" },
    { label: "Resources", href: "/(dashboard)/resources" },
    { label: "My Earnings", href: "/(dashboard)/my-earnings" },
    { label: "Timetable", href: "/(dashboard)/timetable" },
    { label: "Analytics", href: "/(dashboard)/analytics" },
  ];

  return (
    <aside className="w-64 bg-white border-r h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold">Teacher's Center</h2>
      </div>
      <nav className="flex-1 overflow-auto p-4 space-y-2">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`block px-3 py-2 rounded hover:bg-gray-100 ${
                active ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
