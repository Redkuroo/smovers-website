import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Left section - Logo and tagline */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold mb-4">SMOVERS</h2>
            <p className="text-xl text-blue-200 font-medium">
              DELIVER SOLUTIONS<br />
              NOT JUST SHIPMENTS
            </p>
          </div>

          {/* Center section - SVG placeholder */}
          <div className="lg:col-span-1 flex items-center justify-center">
            <div className="w-64 h-48 flex items-center justify-center">
              {/* Placeholder for SVG illustration */}
              <div className="w-full h-full bg-blue-800/30 rounded-lg flex items-center justify-center border-2 border-blue-700/50">
                <svg 
                  className="w-32 h-32 text-blue-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right section - Navigation links in 3 columns */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-3">
                <a href="/company" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  ABOUT
                </a>
                <a href="/services" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  SERVICES
                </a>
                <a href="/routes" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  ROUTES
                </a>
                <a href="/team" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  TEAM
                </a>
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                <a href="#contact" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  CONTACT
                </a>
                <a href="/blogs" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  BLOGS
                </a>
                <a href="#banking" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  BANKING
                </a>
                <a href="#testimonials" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  REVIEWS
                </a>
              </div>

              {/* Column 3 */}
              <div className="space-y-3">
                <a href="/careers" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  CAREERS
                </a>
                <a href="/faq" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  FAQ
                </a>
                <a href="/help" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  HELP CENTRE
                </a>
                <a href="/support" className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm font-medium">
                  SUPPORT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with copyright and policy links */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Left - Copyright */}
            <div className="text-blue-200 text-sm">
              &copy; {new Date().getFullYear()} SMOvers Logistics Services. All rights reserved.
            </div>

            {/* Right - Policy links */}
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-blue-200 hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-blue-200 hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/acceptable-use" className="text-blue-200 hover:text-white transition-colors duration-200">
                Acceptable Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}