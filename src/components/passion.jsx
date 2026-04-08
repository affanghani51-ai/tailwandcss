import step1 from '../assets/step1.svg'
import step2 from '../assets/step2.svg'
import step3 from '../assets/step3.svg'
function Passion() {
    return (
        <div>
            <div className='text-center p-10 '>
                <h1 className="text-5xl font-bold text-black ">How I Work </h1>
            </div>
            <div className='flex mt-10 gap-20'>
                <div >
                    <img src={step1} alt="" width={400} className="ml-80" />
                </div>
                <div className='bg-blue-50 shadow-lg/10 w-150 h-30 rounded-lg'>
                    <div>
                        <h1 className='text-3xl font-dark text-blue-500   '>1.Discovery Call</h1>
                        <p className='pt-3'>We understand your goals and challenges. This initial conversation helps us align on what success looks like for your project.</p>
                    </div>
                </div>
            </div>


            <div className='flex mt-20 gap-20'>
                <div className='bg-blue-50 shadow-lg/10 w-150 h-30 rounded-lg ml-40 mt-20 '>
                    <div>
                        <h1 className='text-3xl font-dark text-blue-500   '>2. Planning</h1>
                        <p className='pt-3'>Clear scope, timeline, and technical approach. We create a detailed roadmap so you know exactly what to expect at every stage.</p>
                    </div>
                </div>
                <div >
                    <img src={step2} alt="" width={400} />
                </div>
            </div>

            <div className='flex mt-20 gap-20'>
                <div >
                    <img src={step3} alt="" width={400} className="ml-80" />
                </div>
                <div className='bg-blue-50 shadow-lg/10 w-150 h-30 rounded-lg mt-20'>
                    <div>
                        <h1 className='text-3xl font-dark text-blue-500   '>3. Development</h1>
                        <p className='pt-3'>Build, test, and refine. Our team develops your solution with regular check-ins and transparent progress updates.   </p>
                    </div>
                </div>
            </div>


<div className='flex mt-20 gap-20'>
    <div className='bg-blue-50 shadow-lg/10 w-150 h-30 rounded-lg ml-40 mt-20 '>
        <div>
            <h1 className='text-3xl font-dark text-blue-500   '>4. Launch & Support</h1>
            <p className='pt-3'>Ongoing improvements and maintenance. We don't just launch and leave — we provide continued support to ensure your systems run smoothly.</p>
        </div>
    </div>
    <div >
        <img src={step1} alt="" width={400} />
    </div>
</div>


        </div>

    )
}

export default Passion;