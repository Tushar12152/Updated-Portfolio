
const Banner = () => {
    return (
        <div className="  h-screen pt-10">
            <div className=" flex gap-6 justify-between ">
            <div className="text-white">
                  <h2 className="font-semibold text-3xl pb-4">Hello, I am</h2>
                  <h1 className="text-5xl font-bold">Md. <span className="text-[#FD7615]">Isme Ajam </span> <br /> 
                  (Tushar)</h1>
            </div>

            <div>
            <div className=" bg-gray-900">
      <div className="relative">
        {/* Rotating Ring */}
        <div className="absolute inset-0 w-[200px] h-[200px] rounded-full border-4 border-transparent border-t-orange-500 border-b-purple-500 animate-spin-slow" />
        {/* Image */}
        <div className="relative w-[360px] h-[360px] rounded-full overflow-hidden border-4 border-purple-600">
          <img
            
            src="https://via.placeholder.com/180"
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