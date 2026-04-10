function Industries() {
  const data = [
    {
      icon: "ri-truck-line",
      title: "Logistics & Transportation",
    },
    {
      icon: "ri-heart-pulse-line",
      title: "Healthcare & Health Tech",
    },
    {
      icon: "ri-home-4-line",
      title: "Real Estate & Property Management",
    },
    {
      icon: "ri-shopping-cart-line",
      title: "E-commerce & Retail",
    },
    {
      icon: "ri-briefcase-3-line",
      title: "Professional Services & Startups",
    },
  ];

  return (
    <div className="w-full py-16 px-4 lg:px-16">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
          Industries I Worked With
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-4">
          We support companies across multiple industries, including logistics,
          healthcare, real estate, e-commerce, and professional services. Each
          industry has unique workflows — we design systems that match them.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 hover:border-blue-500 transition duration-300 rounded-lg p-6 text-center shadow-sm hover:shadow-lg"
          >
            <i className={`${item.icon} text-3xl sm:text-4xl text-blue-500`}></i>
            <h2 className="text-sm sm:text-base font-semibold mt-3">
              {item.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="w-full text-center mt-10">
        <button className="bg-gradient-to-r from-indigo-600 to-teal-600 px-6 py-3 rounded-lg text-white font-semibold hover:from-indigo-500 hover:to-teal-400 transition duration-300">
          View All Industries
        </button>
      </div>
    </div>
  );
}

export default Industries;