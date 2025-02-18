import React from "react";
import { BookOpen } from "lucide-react";
 const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-semibold text-white">EduTutor</span>
            </div>
            <p className="text-sm">
              Empowering students to achieve academic excellence through
              personalized tutoring.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Mathematics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Science
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  English
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Test Prep
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Education St</li>
              <li>contact@edututor.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; 2024 EduTutor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer