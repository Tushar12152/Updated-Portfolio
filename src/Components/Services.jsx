import frontend from '../assets/Frontend.png'
import backend from '../assets/backend.jpg'



const services = [
    {
      title: "Frontend Development",
      description:
        "Creating designs optimized for various devices to ensure an exceptional user experience across desktops, tablets, and mobiles. And make user-friendly user interface.",
      tools: ["HTML5", "CSS3", "TailwindCSS"],
      image: `${frontend}`, // Replace with the actual image URL
      link: "#",
    },
    {
      title: "MERN Stack Development",
      description:
        "MERN stands for MongoDB, Express.js, React.js, and Node.js—a cutting-edge technology stack renowned for its versatility, speed, and flexibility in crafting robust web solutions.",
      tools: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "https://i.ibb.co.com/v1xXTTS/images.jpg", // Replace with the actual image URL
      link: "#",
    },
    {
      title: "Backend Development",
      description:
        "Tailored backend development solutions aligned with your unique business requirements and goals.",
      tools: ["Node JS", "Express JS", "MongoDB"],
      image: `${backend}`, // Replace with the actual image URL
      link: "#",
    },
  ];
  
  export default function Services() {
    return (
      <section className=" text-white py-12">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <h2 className="text-center text-3xl font-bold  text-white  text-[48px] mb-12">My Services</h2>
  
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center lg:space-x-8 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full lg:w-1/2 rounded-lg shadow-lg mb-6 lg:mb-0"
                />
  
                {/* Text Content */}
                <div className="lg:w-1/2">
                  <h3 className="text-xl font-bold text-orange-500 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
  
                  {/* Tools */}
                  <div className="flex space-x-4 mb-6">
                    {service.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="inline-block px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
  
                  {/* Button */}
                  <a
                    href={service.link}
                    className="inline-block px-6 py-2 text-sm font-medium text-white bg-purple-700 hover:bg-purple-600 rounded-lg"
                  >
                    Get Started →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  