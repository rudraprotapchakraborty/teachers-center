import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";

export default function Sidebar() {
  const [isManageBatchOpen, setIsManageBatchOpen] = useState(false);

  return (
    <aside className="w-64 bg-gray-100 p-4 space-y-2 flex flex-col justify-between h-full">
      <nav className="space-y-2">
        <div className="flex justify-between items-center mb-6">
          <Button variant="ghost" className="text-left w-full">
            Teach
          </Button>
          <Button variant="ghost">
            <ArrowLeft className="bg-black text-white rounded-full p-1" />
          </Button>
        </div>
        <Button variant="ghost" className="w-full text-left">
          Dashboard
        </Button>

        {/* Manage Batch Dropdown */}
        <div>
          <Button
            variant="ghost"
            className="flex justify-between items-center w-full text-left"
            onClick={() => setIsManageBatchOpen(!isManageBatchOpen)}
          >
            Manage Batch
            <span>
              {isManageBatchOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </span>
          </Button>
          {isManageBatchOpen && (
            <div className="pl-4 space-y-2 text-left">
              <Button variant="ghost" className="w-full text-left">
                All Batches
              </Button>
              <Button variant="ghost" className="w-full text-left">
                Resources
              </Button>
            </div>
          )}
        </div>

        <Button variant="ghost" className="w-full text-left">
          My Earnings
        </Button>
        <Button variant="ghost" className="w-full text-left">
          Timetable
        </Button>
        <Button variant="ghost" className="w-full text-left">
          Analytics
        </Button>
      </nav>

      {/* Bottom Section */}
      <div className="space-y-2 text-left">
        <Button variant="ghost" className="w-full text-left">
          Manage Profile
        </Button>
        <Button variant="ghost" className="w-full text-left">
          Settings
        </Button>
      </div>
    </aside>
  );
}
