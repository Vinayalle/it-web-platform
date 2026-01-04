import React from "react";

const Footer = () => {
  return (
    <footer className="w-full text-gray-300 bg-gray-900 rounded-md ">
      <div className="px-6 py-12 mx-auto max-w-7xl">
        
        {/* Top Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-semibold text-white">
              DevBlog
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Practical articles on Java, Spring Boot, React, and modern
              software engineering.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Docs</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase">
              Follow
            </h3>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white">GitHub</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center justify-between pt-6 mt-12 text-sm border-t border-gray-800 sm:flex-row">
          <p className="text-gray-400">
            © {new Date().getFullYear()} DevBlog. All rights reserved.
          </p>

          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
