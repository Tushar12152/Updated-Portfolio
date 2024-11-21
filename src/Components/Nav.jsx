import { Link,  } from "react-router-dom";
import logo from '../assets/logo.png'
import Banner from "./Banner";

const Nav = () => {


  const nav = <div className="flex flex-col lg:flex-row gap-6 lg:items-center lg:text-white">

    <a href="#home" className={({ isActive, isPending }) => isPending ? " " : isActive ? "text-[#5F15FD] p-2 rounded-md  " : ""}>Home</a>
    <a href="#about" className={({ isActive, isPending }) => isPending ? " " : isActive ? "text-[#5F15FD] p-2 rounded-md  " : ""}>About</a>
    <a href="#skill" className={({ isActive, isPending }) => isPending ? " " : isActive ? "text-[#5F15FD] p-2 rounded-md  " : ""}>Skill</a>
    <a href="#service" className={({ isActive, isPending }) => isPending ? " " : isActive ? "text-[#5F15FD] p-2 rounded-md  " : ""}>Service</a>
    <a href="#portfolio" className={({ isActive, isPending }) => isPending ? " " : isActive ? "text-[#5F15FD] p-2 rounded-md  " : ""}>Portfolio</a>
    <a href="#contact" className={({ isActive, isPending }) => isPending ? " " : isActive ? "text-[#5F15FD] p-2 rounded-md  " : ""}>Contact</a>


  </div>




  return (
    <div>
      <div className="navbar bg-black  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {nav}
            </ul>
          </div>
          <Link to='/' className=" text-xl text-white">
            <img className="w-20 h-20 rounded-full" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nav}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#5F15FD] text-white">Hire me</a>
        </div>
      </div>


      <section id="home" className="  ">
         <Banner/> 
      </section>
      <section id="about" className="">
        <h1 className="text-4xl">About Section</h1>
      </section>
      <section id="skill" className="">
        <h1 className="text-4xl">Skill</h1>
      </section>
      <section id="service" className="">
        <h1 className="text-4xl">Services Section</h1>
      </section>
      <section id="portfolio" className="">
        <h1 className="text-4xl">Portfolio</h1>
      </section>
      <section id="contact" className="">
        <h1 className="text-4xl">Contact Section</h1>
      </section>




    </div>
  );
};

export default Nav;