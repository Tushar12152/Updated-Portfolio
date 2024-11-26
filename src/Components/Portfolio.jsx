import { useState } from "react";
import a from '../assets/meal.jpg'
import b from '../assets/Job-hunter.png'
import c from '../assets/Tech-Electro.jpg'
import d from '../assets/Digital-agency.jpg'
import e from '../assets/Restaurant.jpg'
import f from '../assets/Furniture.jpg'


const projects = [
    {
      id: 1,
      title: "Meal Master Project",
      description:
        "This website has a navbar, footer, about us section, contact us section, membership section, and meals category section on the home page. The navbar has some routes: home, upcoming meals, and join us.",
      image: `${a}`, // Replace with actual image
      category: "Frontend",
    },
    {
      id: 2,
      title: "Job Hunter Project",
      description:
        "Home page has a banner, job by category, about us, and contact us section. Job by category has 5 routes: all jobs, onsite jobs, remote jobs, hybrid jobs, and part-time jobs. Every job card has a view detail button.",
      image: `${b}`, // Replace with actual image
      category: "MERN",
    },
    {
      id: 3,
      title: "TechGenius",
      description:
        "TechGenius is a modern technology-oriented platform offering unique insights and services in the tech world.",
      image: `${c}`, // Replace with actual image
      category: "Backend",
    },
    {
      id: 4,
      title: "Digital Agency",
      description:
        "Create your brand viral on TikTok and get up to 30% cashback. With TikTok's massive audience and creative tools, your ads get visibility.",
      image: `${d}`, // Replace with actual image
      category: "Frontend",
    },
    {
      id: 5,
      title: "Restaurant Website",
      description:
        "Create your brand viral on TikTok and get up to 30% cashback. With TikTok's massive audience and creative tools, your ads get visibility.",
      image: `${e}`, // Replace with actual image
      category: "Frontend",
    },
    {
      id: 6,
      title: "Furniture Mart",
      description:
        "Create your brand viral on TikTok and get up to 30% cashback. With TikTok's massive audience and creative tools, your ads get visibility.",
      image: `${f}`, // Replace with actual image
      category: "Frontend",
    },
  ];


const Portfolio = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects =
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter);
  

    return (
        <div>
            <section className=" text-white py-12">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold mb-8   text-white  text-[48px]">My Recent Projects</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          {["All", "MERN", "Frontend", "Backend"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg ${
                filter === category
                  ? "bg-purple-700 text-white"
                  : "bg-gray-700 text-gray-300"
              } hover:bg-purple-600`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  {/* View Project Button */}
                  <a
                    href="#"
                    className="text-purple-500 hover:text-purple-400 transition"
                  >
                    View Project →
                  </a>
                  {/* Category */}
                  <span className="text-sm bg-gray-700 text-gray-300 px-2 py-1 rounded-lg">
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default Portfolio;