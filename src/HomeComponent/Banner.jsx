import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[40vh] sm:h-[90vh] overflow-hidden">
            <img
              className="object-cover"
              src="https://i.ibb.co.com/WWBG0XC/pexels-artempodrez-5716031.jpg"
              alt=""
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 bg-slate-700 w-full h-full bg-opacity-50 font-extrabold">
              <div className="flex flex-col items-center justify-center h-full">
                <p className="text-white text-base text-center sm:text-3xl lg:text-5xl mb-2 px-7">
                  Manage Employee & Assets as HR Manager
                </p>
                <p className="text-gray-300 text-xs sm:text-base px-6 text-center mb-3 sm:mb-6">
                  Take control of your workforce and asset management in one
                  place.
                </p>
                <div>
                  <Link
                    to="/joinasemployee"
                    className="hover:bg-purple-700 border border-solid border-white text-[10px] sm:text-xl px-6 py-2 rounded-3xl shadow-lg text-white font-semibold "
                  >
                    Join as HR Manager
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[40vh] sm:h-[90vh] overflow-hidden">
            <img
              className="object-cover h-full w-full"
              src="https://i.ibb.co.com/rcrV5cB/pexels-fauxels-3184357.jpg"
              alt=""
            />
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2  -translate-y-1/2 bg-slate-700 w-full h-full bg-opacity-50 font-extrabold'><div className='flex flex-col items-center justify-center h-full'>
        <p className='text-white text-base text-center sm:text-3xl lg:text-5xl mb-2 px-7'>Utilize Company Assets as Employee</p>
        <p className='text-gray-300 text-xs sm:text-base px-6 text-center mb-3 sm:mb-6'>Access reques and manage your assigned assets efficienty.</p>
        <div>
        <Link to="/joinasemployee" className="hover:bg-purple-700 border border-solid border-white text-[10px] sm:text-xl px-6 py-2 rounded-3xl shadow-lg text-white font-semibold ">Join as Employee</Link>
        </div>
            </div></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <button className="custom-prev absolute top-1/2 left-4 transform -translate-y-1/2 z-10 text-purple-500 hover:bg-purple-200 bg-slate-200 p-2 rounded-full">
        &#8592;
      </button>
      <button className="custom-next absolute top-1/2 right-4 transform -translate-y-1/2 z-10 text-purple-500 hover:bg-purple-200 bg-slate-200 p-2 rounded-full">
        &#8594;
      </button>
    </div>
  );
};

export default Banner;
