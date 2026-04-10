function Footer() {
  return (
    <div className="w-full bg-white border mt-20 px-6 lg:px-16 py-10">
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-blue-700 text-2xl font-semibold">
            Softix Solution
          </h3>
          <p className="text-gray-500 mt-2 text-sm">
            Custom Software & Business Solutions <br />
            Email: info@softixsolution.com
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <div className="mt-3 space-y-2">
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              Custom Software Development
            </a>
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              CRM Development
            </a>
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              AI & Automation
            </a>
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              Web Development
            </a>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <div className="mt-3 space-y-2">
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              About
            </a>
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              Industries
            </a>
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold">Legal</h3>
          <div className="mt-3 space-y-2">
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              Privacy Policy
            </a>
            <a href="#" className="block text-gray-500 hover:text-blue-500">
              Terms of Service
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t pt-5">
        © {new Date().getFullYear()} Softix Solution. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;