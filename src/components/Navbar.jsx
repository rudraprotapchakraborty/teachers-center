import { Menu, Bell, Headset } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-2">
        <h1 className="text-lg font-semibold">Teacher's Center</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Headset size={24} />
        <Bell size={24} />
        
        {/* Separator after Bell icon */}
        <div className="w-px h-6 bg-gray-400"></div>

        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-600"
            >
              <path d="M12 2a5 5 0 0 1 5 5v1a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5zM4 20a8 8 0 1 1 16 0H4z" />
            </svg>
          </div>
          <div>
            <span className="text-sm font-medium">Sir 1</span>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Chemistry</span>
              
              {/* Separator between Chemistry and Level 3 */}
              <div className="w-px h-4 bg-gray-400"></div>

              <span className="text-sm text-gray-600">Level 3</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
