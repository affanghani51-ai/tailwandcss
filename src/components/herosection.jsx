
import '../index.css'
import vid2 from '../assets/vid2.mp4'
function Herosection() {
  return (
<section className="parent relative">
  <video src={vid2} autoPlay loop muted></video>
  <h1 className="text-5xl font-bold text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow-lg/50 hover:text-blue-500 hover:transition hover:duration-500 ">
    Hi! My Self Affan
  </h1>
  <p className="text-3xl font-bold text-white absolute top-120 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-shadow-lg/30 hover:text-black-500 hover:transition hover:duration-500">
    Your Trusted IT Partner for Innovative Solutions
  </p>
  <button className="bg-black text-white px-6 py-3 rounded-md absolute top-140 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hover:bg-blue-500 hover:text-white hover:transition hover:duration-500 shadow-lg/100 inline-block animate-bounce rounded-full p-4 ">
    Get Started
  </button>
</section>
  
   
  )
}

         

export default Herosection