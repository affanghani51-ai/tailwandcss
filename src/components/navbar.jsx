import gg from '../assets/gg.webp'
import '../index.css'
import './herosection.jsx'
import 'remixicon/fonts/remixicon.css'
function Navbar() {
  return (
    <section className="bg-white   flex gap-10 w-full fixed z-1 ">
      <img src={gg} alt="" width={100} height={100} ></img>
 <div className=' w-3/4 flex items-center justify-center gap-15 flex-row  hidden lg:flex '>
      <button popovertarget="desktop-menu-product" class="flex items-center gap-x-1 text-lg/6 font-semibold text-blue-500 hover:text-red-500  hover:transition hover:duration-500 delay-150 duration-100 transform hover:scale-125 transition ease-linear " >
        Home
        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 flex-none text-gray-500">
          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
        </svg>
      </button>

      <button popovertarget="desktop-menu-product" class="flex items-center gap-x-1 text-lg/6 font-semibold text-blue-500  hover:text-red-500 hover:transition hover:duration-500 delay-150 duration-100 transform hover:scale-125 transition ease-linear">
        About
        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 flex-none text-gray-500">
          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
        </svg>
      </button>

      <button popovertarget="desktop-menu-product" class="flex items-center gap-x-1 text-lg/6 font-semibold text-blue-500  hover:text-red-500 hover:transition hover:duration-500 delay-150 duration-100 transform hover:scale-125 transition ease-linear">
        Service
        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 flex-none text-gray-500">
          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
        </svg>
      </button>

      <button popovertarget="desktop-menu-product" class="flex items-center gap-x-1 text-lg/6 font-semibold text-blue-500  hover:text-red-500 hover:transition hover:duration-500 delay-150 duration-100 transform hover:scale-125 transition ease-linear ">
        Contact
        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 flex-none text-gray-500 ">
          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
        </svg>
      </button>
</div>
      <i class="ri-notification-line text-white pt-6  hover:text-red-500 bg-white-500"></i>
      <button className='bg-blue-300 h-10 w-30 mt-5 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300'>start now</button>

      
    </section>
  )
}

export default Navbar