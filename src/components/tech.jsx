import shopify from '../assets/shopify.png'
import salesforce from '../assets/salesforce.png'
import zoho from '../assets/zoho.png'
import outlook from '../assets/outlook.jpg'

function Tech() {
    return (
        <div className='w-full h-auto'>
            <div className='text-center p-5 '>
                <h1 className="text-5xl font-bold text-black">Technologies I Use</h1>
                <p className='text-lg text-black mt-5'>
                    Work with today's most trusted technologies to deliver reliable, scalable solutions.
                </p>
            </div>

            <div className='flex flex-wrap justify-center gap-4'>

                <div className="bg-gray-100 w-full sm:w-120 h-auto rounded-lg p-5 m-10 gap-10 justify-space-between hover:shadow-lg/30">
                    <div className='flex'>
                        <div className="flex">
                            <div>
                                <i class="ri-circle-fill"></i>
                            </div>
                            <h1 className="text-xl font-bold text-black">
                                E-commerce & Marketing Systems
                            </h1>
                        </div>
                    </div>

                    <div className='flex flex-wrap'>
                        {/* items unchanged */}
                        <div className='flex item-center gap-2 px-3 py-1.5 text-sm text-gray-700 rounded-full hover:text-blue-500 transition-all duration300'>
                            <img src={shopify} alt="shopify" className='w-6 h-6 object-contain' />
                            <span className='white-space:nowrap'>Shopify</span>
                        </div>

                        <div className='flex item-center gap-2 px-3 py-1.5 text-sm text-gray-700 rounded-full hover:text-blue-500 transition-all duration300'>
                            <img src={salesforce} alt="salesforce" className='w-6 h-6 object-contain' />
                            <span className='white-space:nowrap'>Salesforce</span>
                        </div>

                        <div className='flex item-center gap-2 px-3 py-1.5 text-sm text-gray-700 rounded-full hover:text-blue-500 transition-all duration300'>
                            <img src={zoho} alt="zoho" className='w-6 h-6 object-contain' />
                            <span className='white-space:nowrap'>Zoho</span>
                        </div>

                        <div className='flex item-center gap-2 px-3 py-1.5 text-sm text-gray-700 rounded-full hover:text-blue-500 transition-all duration300'>
                            <img src={outlook} alt="outlook" className='w-6 h-6 object-contain' />
                            <span className='white-space:nowrap'>Outlook</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 w-full sm:w-120 h-auto rounded-lg p-5 m-10 gap-10 justify-space-between hover:shadow-lg/30">
                    <h1 className="text-xl font-bold text-black">CRM & Productivity Platforms</h1>
                    <div className='flex flex-wrap'>
                        {/* same items */}
                        
                    </div>
                </div>

                <div className="bg-gray-100 w-full sm:w-120 h-auto rounded-lg p-5 m-10 gap-10 hover:shadow-lg/30">
                    <h1 className="text-xl font-bold text-black">Automation & Workflow Tools</h1>
                    <div className='flex flex-wrap'></div>
                </div>

                <div className="bg-gray-100 w-full sm:w-120 h-auto rounded-lg p-5 m-10 gap-10 hover:shadow-lg/30">
                    <h1 className="text-xl font-bold text-black">Data & Analytics</h1>
                    <div className='flex flex-wrap'></div>
                </div>

                <div className="bg-gray-100 w-full sm:w-120 h-auto rounded-lg p-5 m-10 gap-10 hover:shadow-lg/30">
                    <h1 className="text-xl font-bold text-black">AI & Emerging Technologies</h1>
                    <div className='flex flex-wrap'></div>
                </div>

                <div className="bg-gray-100 w-full sm:w-120 h-auto rounded-lg p-5 m-10 gap-10 hover:shadow-lg/30">
                    <h1 className="text-xl font-bold text-black">Development & Cloud Infrastructure</h1>
                    <div className='flex flex-wrap'></div>
                </div>

            </div>
        </div>
    )
}

export default Tech