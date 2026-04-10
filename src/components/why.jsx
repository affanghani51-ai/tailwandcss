import step4 from '../assets/step4.jpg'

function Why() {
    return (
        <div className="w-full py-10 px-4 sm:px-6 lg:px-12">
            
            <div className='text-center p-4 sm:p-6 lg:p-10'>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                    Why To Choose Me
                </h1>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-10'>
                
                {/* Image */}
                <div className="flex justify-center w-full lg:w-1/2">
                    <img 
                        src={step4} 
                        alt="" 
                        className="w-64 sm:w-80 lg:w-[450px] shadow-lg/30"
                    />
                </div>

                {/* Content */}
                <div className='w-full lg:w-1/2 space-y-4'>
                    
                    {/* Item */}
                    <div className='flex items-center gap-4 shadow-lg/10 p-4 sm:p-6 hover:shadow-lg/50 transition duration-300 rounded-lg'>
                        <div className='bg-blue-300 h-9 w-9 rounded-full flex items-center justify-center'>
                            <i className="ri-chat-4-line text-xl text-blue-800"></i>
                        </div>
                        <h1 className="text-base sm:text-lg lg:text-xl font-bold text-black">
                            Clear communication and practical execution
                        </h1>
                    </div>

                    {/* Item */}
                    <div className='flex items-center gap-4 shadow-lg/10 p-4 sm:p-6 hover:shadow-lg/50 transition duration-300 rounded-lg'>
                        <div className='bg-blue-300 h-9 w-9 rounded-full flex items-center justify-center'>
                            <i className="ri-check-line text-xl text-blue-800"></i>
                        </div>
                        <h1 className="text-base sm:text-lg lg:text-xl font-bold text-black">
                            Scalable solutions built for long-term use
                        </h1>
                    </div>

                    {/* Item */}
                    <div className='flex items-center gap-4 shadow-lg/10 p-4 sm:p-6 hover:shadow-lg/50 transition duration-300 rounded-lg'>
                        <div className='bg-blue-300 h-9 w-9 rounded-full flex items-center justify-center'>
                            <i className="ri-chat-4-line text-xl text-blue-800"></i>
                        </div>
                        <h1 className="text-base sm:text-lg lg:text-xl font-bold text-black">
                            Cost-effective development without cutting quality
                        </h1>
                    </div>

                    {/* Item */}
                    <div className='flex items-center gap-4 shadow-lg/10 p-4 sm:p-6 hover:shadow-lg/50 transition duration-300 rounded-lg'>
                        <div className='bg-blue-300 h-9 w-9 rounded-full flex items-center justify-center'>
                            <i className="ri-chat-4-line text-xl text-blue-800"></i>
                        </div>
                        <h1 className="text-base sm:text-lg lg:text-xl font-bold text-black">
                            Dedicated support from planning to launch
                        </h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Why;