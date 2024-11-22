import { TypeAnimation } from "react-type-animation";
import banner from "../assets/Banner.png"
import { MdOutlineFileDownload } from "react-icons/md";
import { DiGithub } from "react-icons/di";
const Banner = () => {
  return (
    <div className="  h-screen pt-28">
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

          <div className="pt-10 flex justify-center ">
               <button className="flex justify-center items-center bg-gradient-to-r from-[#5F15FD] to-[#816CFF] p-2 rounded-lg"><MdOutlineFileDownload /> Download CV</button>
               <a className="text-4xl" href="https://github.com/Tushar12152"><DiGithub/></a>
          </div>

        </div>

        <div>
          <div className="">
            <div className="relative">
              {/* Rotating Ring */}
              <div className="absolute inset-0 w-[400px]  h-[400px] rounded-full animate-spin-slow">
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
              <div className="relative w-[380px]  h-[380px] rounded-full overflow-hidden border-8 border-purple-600 bg-gradient-to-r from-purple-600 to-purple-900">
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