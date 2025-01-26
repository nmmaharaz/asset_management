import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviews = [
    {
      id: 1,
      photo: "https://i.ibb.co.com/BB9kLQp/images.jpg",
      name: "John Doe",
      rating: 4.5,
      description:
        "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new.",
    },
    {
      id: 2,
      photo: "https://i.ibb.co.com/HxCXpBc/john-doe.jpg",
      name: "Jane Smith",
      rating: 3.0,
      description:
        "Audi's new electric SUV shares a lot with its cousin from Porsche, yet it brings a distinctive look and feel to the road, making it a compelling alternative.",
    },
    {
      id: 3,
      photo: "https://i.ibb.co.com/0n3tdpp/Alice-Johnson.png",
      name: "Alice Johnson",
      rating: 5.0,
      description:
        "Audi's new electric SUV shares a lot with its cousin from Porsche, yet it brings a distinctive look and feel to the road, making it a compelling alternative.",
    },
    {
      id: 4,
      photo: "https://i.ibb.co.com/qN4j3QQ/Chris-Lee.jpg",
      name: "Chris Lee",
      rating: 2.5,
      description:
        "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new.",
    },
    {
      id: 5,
      photo: "https://i.ibb.co.com/k5XpKRT/Emily-Davis.jpg",
      name: "Emily Davis",
      rating: 4.0,
      description:
        "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new.",
    },
    {
      id: 6,
      photo: "https://i.ibb.co.com/f0m4q3p/Michael-Brown.jpg",
      name: "Michael Brown",
      rating: 5.0,
      description:
        "Kia continues its dedication to building stylish, economical sedans by introducing the all-new K4. Replacing the Forte in the brand's lineup, the K4 gets a fresh new.",
    },
  ];
  return (
    <div className="bg-white py-6 lg:py-16">
        <div className="w-11/12 mx-auto">
      <p className="text-2xl w-9/12 mx-auto sm:text-4xl text-center font-bold text-black">
        SmartHR Providing You Best Features
      </p>
      <p className="text-gray-500 mt-4 text-center w-10/12 mx-auto lg:w-7/12">
        Looking to automate HR management template? SmartHR is for you. This is
        a project management and HR automation template that can be used for the
        HRMS system.
      </p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-12"
      >
        {reviews?.map((review) => (
          <SwiperSlide className="my-2" key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Review;
