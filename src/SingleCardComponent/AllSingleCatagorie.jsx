import { Link } from "react-router-dom";
import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const AllSingleCatagorie = ({ allcgg }) => {
  const { _id, image, subcategory_Name } = allcgg;

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <div>
        {/* <Link to={`/allCDetails/${_id}`}>
          <div className="card card-compact  bg-emerald-300 shadow-xl flex justify-center items-center">
            <div>
              <img className="h-52 w-full" src={image} alt="IMAGE" />
            </div>
            <div className="card-body ">
              <h2 className="card-title ">{subcategory_Name}</h2>
            </div>
          </div>
        </Link> */}

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          autoplay={{
            delay: 3000, // Time between slides (in milliseconds)
            disableOnInteraction: false, // Keep autoplaying even after user interaction
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide >Slide 1</SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default AllSingleCatagorie;
