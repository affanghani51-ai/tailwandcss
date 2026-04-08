function Industries() {
    return (
        <div className='w-full h-150 '>
            <div className='text-center p-5 '>
                <h1 className="text-5xl font-bold text-black">Industries I Worked With</h1>
                <p className='text-lg text-black mt-5'>We support companies across multiple industries, including logistics, healthcare, real estate,
                    e-commerce, and <br />professional services. Each industry has unique workflows — we design systems that match them.</p>
            </div>
            <div className="flex w-full justify-center ">
                <div className="w-40 h-40 border border-blue-50 hover:border-blue-500 
     duration-300 transition rounded-lg p-5 m-10 gap-10 justify-space-between shadow-lg/10">
                    <div className=" rounded-xl text-center ">
                        <i class="ri-truck-line text-4xl text-blue-500"></i>
                        <h1 className='text-14 font-bold pt-2'>Logistics & Transportation</h1>
                    </div>

                </div>

             <div className="w-40 h-40 border border-blue-50 hover:border-blue-500 
  duration-300 transition rounded-lg p-5 m-10 gap-10 justify-space-between shadow-lg/10">
                 <div className=" rounded-xl text-center ">
                     <i class="ri-poker-hearts-line text-4xl text-blue-500"></i>
                     <h1 className='text-14 font-bold pt-2'>Healthcare & Health Tech</h1>
                 </div>
             </div>

                          <div className="w-40 h-40 border border-blue-50 hover:border-blue-500 
  duration-300 transition rounded-lg p-5 m-10 gap-10 justify-space-between shadow-lg/10">
                 <div className=" rounded-xl text-center ">
                     <i class="ri-home-4-line text-4xl text-blue-500"></i>
                     <h1 className='text-14 font-bold pt-2'>Real Estate & Property Management</h1>
                 </div>
             </div>

                          <div className="w-40 h-40 border border-blue-50 hover:border-blue-500 
  duration-300 transition rounded-lg p-5 m-10 gap-10 justify-space-between shadow-lg/10">
                 <div className=" rounded-xl text-center ">
                     <i class="ri-shopping-cart-line text-4xl text-blue-500"></i>
                     <h1 className='text-14 font-bold pt-2'>E-comerce & Retail</h1>
                 </div>
             </div>

                          <div className="w-40 h-40 border border-blue-50 hover:border-blue-500 
  duration-300 transition rounded-lg p-5 m-10 gap-10 justify-space-between shadow-lg/10">
                 <div className=" rounded-xl text-center ">
                     <i class="ri-briefcase-3-line text-4xl text-blue-500"></i>
                     <h1 className='text-14 font-bold pt-2'>Professional Services & Startups</h1>
                 </div>
             </div>

            </div>
            <div className="w-full text-center mt-3">
            <button className="bg-linear-to-r/hsl from-indigo-600 to-teal-600 p-3 rounded-lg text-white 
            font-bold hover:from-indigo-500 hover:to-teal-400  ">View All Industries</button>
</div>        
        </div>
    );
}

export default Industries;