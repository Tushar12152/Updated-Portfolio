import { TypeAnimation } from "react-type-animation";
import banner from "../assets/Banner.png"
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
const Banner = () => {
  return (
    <div className="  py-28">
      <div className=" lg:flex  gap-6 justify-between ">


        <div className="text-white">
          <h2 className="font-semibold text-3xl pb-4">Hello, I am</h2>
          <h1 className="text-5xl font-bold mb-10">Md. <span className="text-[#FD7615]">Isme Ajam </span> <br />
            (Tushar)</h1>

          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'And I am a MERN Stack Developer',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'And I am a Frontend Developer',
              1000,
              'And I am a React Developer',
              1000,
              'And I am a web Developer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />

          <p className="pt-10 ">Specializing in MongoDB, Express.js, React.js, and Node.js, I craft <br /> seamless, interactive web experiences.</p>

          

          <div className="pt-10  flex justify-start items-center gap-3 ">
               <button className="flex justify-center items-center bg-gradient-to-r from-[#5F15FD] to-[#816CFF] p-2 rounded-lg"><MdOutlineFileDownload /> Download CV</button>
               <a className="text-2xl" href="https://github.com/Tushar12152"><BsGithub/></a>
               <a className="text-2xl" href="https://www.linkedin.com/in/md-isme-ajam-tushar-038504291/"><FiLinkedin/></a>
               <a className="text-2xl" href="https://www.facebook.com/TusharImran03"><FaFacebook/></a>
          </div>

        </div>

        <div>
          <div className="">
            <div className="relative">
              {/* Rotating Ring */}
              <div className="absolute inset-0 w-[400px] hidden lg:block  h-[400px] rounded-full animate-spin-slow">
                {/* Decorative Elements */}
                {/* Top Circle */}
                <div className="absolute w-6 h-6 bg-orange-500 rounded-full top-2 left-1/2 transform -translate-x-1/2"></div>
                {/* Right Triangle */}
                <div className="absolute w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-orange-500 top-1/2 right-2 transform -translate-y-1/2 rotate-90"></div>
                {/* Bottom Circle */}
                <div className="absolute w-6 h-6 bg-orange-500 rounded-full bottom-2 left-1/2 transform -translate-x-1/2"></div>
                {/* Left Triangle */}
                <div className="absolute w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-orange-500 top-1/2 left-2 transform -translate-y-1/2 rotate-180"></div>
              </div>

              {/* Profile Image */}
              <div className="relative lg:w-[380px] w-[280px]  lg:h-[380px] h-[280px] rounded-full mt-10 lg:mt-0 overflow-hidden border-8 border-purple-600 bg-gradient-to-r from-purple-600 to-purple-900">
                <img
                  src={banner}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;