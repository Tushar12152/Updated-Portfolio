
import "../Components/SkillsSlider.css"; // Import the CSS file


const Skill = () => {
  const skills = [
    { name: "ReactJS", icon: 'https://i.ibb.co.com/ZSpkMC7/download.png' },
    { name: "JavaScript", icon: 'https://i.ibb.co.com/ydB1JbC/download.jpg' },
    { name: "Firebase", icon: 'https://i.ibb.co.com/qnsJvbQ/download.png' },
    { name: "HTML5", icon: "https://i.ibb.co.com/MNX9LQK/download.png" },
    { name: "CSS3", icon: "https://i.ibb.co.com/Nxm8Q8w/download.png" },
    { name: "TailwindCSS", icon: "https://i.ibb.co.com/Mc5tq1T/download.jpg" },
    { name: "Node js", icon: "https://i.ibb.co.com/BNRKqRB/download.png" },
    { name: "Express js", icon: "https://i.ibb.co.com/d0QX9cN/download.png" },
    { name: "Mongo DB", icon: "https://i.ibb.co.com/hydPk3m/download.png" },
    { name: "Next JS", icon: "https://i.ibb.co.com/8YLhvYK/download.png" },
  ];

  return (
    <div className="skills-slider-container">
      {/* Title */}
      <h2 className=" font-bold text-white py-10 text-[48px]">My Skills</h2>

      {/* Slider */}
      <div className="slider-wrapper">
        <div className="slider-content">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <img
                src={skill.icon}
                alt={skill.name}
                className="skill-icon"
              />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
