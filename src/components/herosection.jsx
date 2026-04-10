import vid2 from "../assets/vid2.mp4";

function Herosection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        src={vid2}
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      ></video>

      {/* Overlay (optional dark layer for readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white hover:text-blue-400 transition duration-300">
          Hi! My Self Affan
        </h1>

        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-2xl">
          Your Trusted IT Partner for Innovative Solutions
        </p>

        <button className="mt-6 bg-black text-white px-6 py-3 rounded-full hover:bg-blue-500 transition duration-300 animate-bounce">
          Get Started
        </button>

      </div>
    </section>
  );
}

export default Herosection;