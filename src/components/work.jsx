function Work() {
    return (
        <div className='w-full py-10 px-4 sm:px-6 lg:px-12'>
            
            <div className='text-center p-4 sm:p-6 lg:p-10'>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                    My Skills
                </h1>

                <p className='text-sm sm:text-base lg:text-lg text-gray-900 mt-5'>
                    I have a strong foundation in web development, with skills in HTML, CSS, and basic JavaScript. I am capable of creating responsive and user-friendly websites that work well across different devices. Along with technical abilities, I have good problem-solving skills and a creative mindset, which help me design clean and modern interfaces. I am continuously learning and improving my skills to stay updated with the latest trends in web development.
                </p>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-6">
                
                <div className='h-auto w-full sm:w-[45%] lg:w-[22%] rounded-xl p-6 border border-blue-500 hover:bg-blue-100 transition duration-300 shadow-lg/10'>
                    <i className="ri-expand-left-right-line text-5xl sm:text-6xl text-blue-500"></i>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold">
                            Custom Software Development
                        </h1>
                        <p className="text-sm sm:text-lg font-light pt-4">
                            Your trusted partner for innovative software solutions.
                        </p>
                    </div>
                </div>

                <div className='h-auto w-full sm:w-[45%] lg:w-[22%] rounded-xl p-6 border border-blue-500 hover:bg-blue-100 transition duration-300 shadow-lg/10'>
                    <i className="ri-plug-3-line text-5xl sm:text-6xl text-blue-500"></i>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold pt-2">
                            CRM, ERP & Systems Integration
                        </h1>
                        <p className="text-sm sm:text-lg font-light pt-4">
                            Your trusted partner for innovative software solutions.
                        </p>
                    </div>
                </div>

                <div className='h-auto w-full sm:w-[45%] lg:w-[22%] rounded-xl p-6 border border-blue-500 hover:bg-blue-100 transition duration-300 shadow-lg/10'>
                    <i className="ri-robot-2-line text-5xl sm:text-6xl text-blue-500"></i>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold pt-2">
                            AI & Workflow Automation
                        </h1>
                        <p className="text-sm sm:text-lg font-light pt-4">
                            Your trusted partner for innovative software solutions.
                        </p>
                    </div>
                </div>

                <div className='h-auto w-full sm:w-[45%] lg:w-[22%] rounded-xl p-6 border border-blue-500 hover:bg-blue-100 transition duration-300 shadow-lg/10'>
                    <i className="ri-global-line text-5xl sm:text-6xl text-blue-500"></i>
                    <div>
                        <h1 className="text-xl sm:text-2xl font-bold pt-2">
                            Web & Application Development
                        </h1>
                        <p className="text-sm sm:text-lg font-light pt-4">
                            Your trusted partner for innovative software solutions.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Work