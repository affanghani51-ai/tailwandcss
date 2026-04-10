import step1 from "../assets/step1.svg";
import step2 from "../assets/step2.svg";
import step3 from "../assets/step3.svg";

function Passion() {
  const steps = [
    {
      img: step1,
      title: "1. Discovery Call",
      desc: "We understand your goals and challenges. This initial conversation helps us align on what success looks like for your project.",
    },
    {
      img: step2,
      title: "2. Planning",
      desc: "Clear scope, timeline, and technical approach. We create a detailed roadmap so you know exactly what to expect.",
    },
    {
      img: step3,
      title: "3. Development",
      desc: "Build, test, and refine with regular check-ins and transparent progress updates.",
    },
    {
      img: step1,
      title: "4. Launch & Support",
      desc: "Ongoing improvements and maintenance to ensure your systems run smoothly.",
    },
  ];

  return (
    <div className="w-full px-4 lg:px-16 py-16">
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
          How I Work
        </h1>
      </div>

      {/* Steps */}
      <div className="mt-12 space-y-16">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={step.img}
                alt=""
                className="w-64 sm:w-80 lg:w-96"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 bg-blue-50 shadow-md rounded-lg p-6 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-500">
                {step.title}
              </h2>
              <p className="mt-3 text-gray-600 text-sm sm:text-base">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Passion;