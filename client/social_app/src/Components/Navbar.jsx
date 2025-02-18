import React from "react";
import { BookOpen } from "lucide-react";
 const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-semibold text-gray-800">EduTutor</span>
        </div>
        <nav>
          <ul className="hidden md:flex space-x-8">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Tutors
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar