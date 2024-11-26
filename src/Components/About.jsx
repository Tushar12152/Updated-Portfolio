import { Link } from 'react-router-dom';
import banner from '../assets/about.png'
import { BiArrowFromLeft } from 'react-icons/bi';
const About = () => {
    return (
        <div className="lg:flex items-center py-10 justify-between">

            <div>
                <div className="relative w-[523px] h-[705px]">
                    {/* Triangle Outline */}
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 200 200"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <polygon
                            points="190,190 10,190 100,20"
                            className="stroke-orange-500 stroke-[4] fill-transparent"
                        />
                    </svg>

                    {/* Animated Balls */}


                    {/* Fixed Profile Image */}
                    <div className="absolute w-[550px] h-[720px]  overflow-hidden top-[-140px] bottom-44 left-[10px]">
                        <img
                            src={banner}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>


            <div className='text-white'>
                <h1 className='text-[48px] font-bold items-start'>About Me</h1>

                <p className='space-y-4 pt-10'>Hi, I sm <span className='font-bold text-[#FD7615]'>Md. Isme Ajam (Tushar)</span>, a passionate web developer with over 05 <br />
                    years of experience in creating innovative and user-friendly websites. My <br /> journey began with a fascination for coding and has since evolved into a <br />dedicated career in web development. I thrive on turning complex <br /> problems into elegant solutions and am committed to delivering high- <br />quality work that exceeds expectations.</p>


                <div className='py-10 flex items-center gap-10'>
                      <div>
                         <h1 className='font-semibold text-2xl text-[#FD7615]'>5+</h1>
                         <p className='text-[#816CFF]'>Years of Experience</p>
                      </div>

                      <div>
                         <h1 className='font-semibold text-2xl text-[#FD7615]'>100+</h1>
                         <p className='text-[#816CFF]'>Happy Clients</p>
                      </div>

                      <div>
                         <h1 className='font-semibold text-2xl text-[#FD7615]'>120+</h1>
                         <p className='text-[#816CFF]'>Project completed</p>
                      </div>

                </div>

                <Link className='border-[#816CFF] border-2 py-2 px-4 flex items-center gap-2 w-[180px] text-center rounded-lg hover:bg-[#816CFF] '>Read more <BiArrowFromLeft/></Link>


            </div>
        </div>
    );
};

export default About;