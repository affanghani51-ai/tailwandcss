import step4 from '../assets/step4.jpg'
function Why() {
    return (
        <div className="w-full h-180 ">
            <div className='text-center p-10 '>
                <h1 className="text-5xl font-bold text-black">Why To Choose Me</h1>
            </div>

            <div className='flex'>
                <div>
                    <img src={step4} alt="" width={450} className="ml-70 shadow-lg/30" />
                </div>
                <div className='h-180'>
                    <div className='flex shadow-lg/10 h-27 ml-10 w-150 p-7 hover:shadow-lg/50 transition duration-300 rounded-lg'>
                        <div className='  '>
                            <div className='bg-blue-300 h-9 w-9 rounded-full pl-1 pt-1'>
                                <i class="ri-chat-4-line text-2xl text-blue-800"></i>
                            </div>
                        </div>
                        <h1 className="text-2 xl font-bold text-black ">Clear communication and practical execution</h1>
                    </div>
                    <div className='flex shadow-lg/10 h-27 ml-10 w-150 p-7 hover:shadow-lg/50 transition duration-300 rounded-lg'>
                        <div className='  '>
                            <div className='bg-blue-300 h-9 w-9 rounded-full pl-1 pt-1'>
                                <i class="ri-check-line text-2xl text-blue-800"></i>
                            </div>
                        </div>
                        <h1 className="text-2 xl font-bold text-black ">Scalable solutions built for long-term use</h1>
                    </div>
                    <div className='flex shadow-lg/10 h-27  ml-10 w-150 p-7 hover:shadow-lg/50 transition duration-300 rounded-lg'>
                        <div className='  '>
                            <div className='bg-blue-300 h-9 w-9 rounded-full pl-1 pt-1'>
                                <i class="ri-chat-4-line text-2xl text-blue-800"></i>
                            </div>
                        </div>
                        <h1 className="text-2 xl font-bold text-black ">Cost-effective development without cutting quality</h1>
                    </div>
                    <div className='flex shadow-lg/10 h-27 ml-10 w-150 p-7 hover:shadow-lg/50 transition duration-300 rounded-lg'>
                        <div className='  '>
                            <div className='bg-blue-300 h-9 w-9 rounded-full pl-1 pt-1'>
                                <i class="ri-chat-4-line text-2xl text-blue-800"></i>
                            </div>
                        </div>
                        <h1 className="text-2 xl font-bold text-black ">Dedicated support from planning to launch</h1>
                    </div>



                </div>
            </div>
        </div>




    )
}

export default Why;