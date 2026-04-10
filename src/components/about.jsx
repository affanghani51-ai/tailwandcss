import '../index.css'
import office from '../assets/office.jpg'

function About(){
    return(
        
    <div className='w-full mt-10 p-4 sm:p-6 lg:p-12 container mx-auto px-4 lg:px-10 bg-white border border-gray-200 rounded-xl shadow-lg/20'>
        
        <div className='text-center p-4 sm:p-6 lg:p-10'>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                About Us
            </h1>

            <div className='mt-5 text-base sm:text-lg lg:text-2xl font-light'>
                <p className='text-gray-700 leading-relaxed'>
                    Hi, I’m someone who’s constantly evolving, learning, and trying to make sense of the world in my own way. I don’t believe people can be summed up in a few simple lines—we’re all a mix of experiences, thoughts, ambitions, and contradictions—and I’m no exception.

                    I’m naturally curious. I like to understand how things work, whether it’s people, ideas, or the systems around me. That curiosity often pushes me to explore new perspectives, ask questions, and challenge what I already know. I don’t just like learning—I enjoy the process of figuring things out, even when it gets messy or complicated.

                    I value growth, both personal and intellectual. I’m always trying to improve myself in some way, whether that means building better habits, becoming more disciplined, or simply learning from past mistakes. I don’t see failure as the end of something, but more as part of the process of becoming better.

                    At the same time, I’m someone who appreciates the simple things. Whether it’s a quiet moment to think, a good conversation, or just time to reset, I understand the importance of balance. Life isn’t just about chasing goals—it’s also about being present and enjoying where you are.

                    I can be thoughtful and introspective, sometimes spending a lot of time in my own head analyzing situations or reflecting on decisions. But that’s also what helps me stay grounded and aware of who I am and where I want to go.

                    I care about meaning. I don’t like doing things just for the sake of it—I prefer having a purpose behind my actions. Whether it’s something big or small, I want it to matter in some way.

                    Overall, I’d describe myself as someone who is driven but still figuring things out, confident yet open to change, and always trying to move forward—one step at a time.
                </p>
            </div>
        </div>

        {/* Mission */}
        <div className='bg-blue-50 rounded-lg p-4 sm:p-5 border border-blue-400'>
            <h1 className='text-blue-500 text-lg sm:text-xl'>My Mission</h1>
            <p className='text-gray-700 text-sm sm:text-base'>
                To empower businesses with smart software, automation, and scalable systems that improve performance and drive sustainable growth.
            </p>
        </div>

        {/* Approach */}
        <div className="mt-4 p-4 sm:p-6 bg-gray-100 rounded-xl">
            <h1 className='text-lg sm:text-xl font-semibold text-gray-900 mb-2'>
                My Approach
            </h1>
            <p className='text-gray-700 text-sm sm:text-base'>
                We don’t believe in one-size-fits-all solutions. Every project begins with understanding your workflows, users, and long-term goals. From there, we design systems that work efficiently today and scale confidently for tomorrow.
            </p>
        </div>

    </div>
    )
}

export default About