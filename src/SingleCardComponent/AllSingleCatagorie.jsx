import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AllSingleCatagorie = () => {
  return (
    <div>
      <div>
        <div className="mt-[30px] md:mt-[50px] lg:mt-[70px] container mx-auto flex flex-col justify-center items-center gap-10 px-5 py-10">
          {/* Multiple Swiper Slider */}
          <Swiper
            className="w-full"
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
          >
            {/* SwiperSlide 1 */}
            <SwiperSlide
              style={{
                height: "350px",
                background: `linear-gradient(to top, #000000cc, #000000d9), url('https://i.ibb.co/QP1WFyS/hand-4213487-1280.jpg')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="bg-second border-[1px] border-lightBlack p-5 border-dotted font-body"
            >
              <span className="font-heading text-second text-xl font-semibold mb-3 uppercase">
                Name 1
              </span>
              UserPost 1
              <span className="mt-3 text-lightWhite text-[16px]">Date 1</span>
            </SwiperSlide>

            {/* SwiperSlide 2 */}
            <SwiperSlide
              style={{
                height: "350px",
                background: `linear-gradient(to top, #000000cc, #000000d9), urlurl('https://i.ibb.co/QP1WFyS/hand-4213487-1280.jpg')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="bg-second border-[1px] border-lightBlack p-5 border-dotted font-body"
            >
              <span className="font-heading text-second text-xl font-semibold mb-3 uppercase">
                Name 2
              </span>
              UserPost 2
              <span className="mt-3 text-lightWhite text-[16px]">Date 2</span>
            </SwiperSlide>

            {/* SwiperSlide 3 */}
            <SwiperSlide
              style={{
                height: "350px",
                background: `linear-gradient(to top, #000000cc, #000000d9), urlurl('https://i.ibb.co/QP1WFyS/hand-4213487-1280.jpg')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="bg-second border-[1px] border-lightBlack p-5 border-dotted font-body"
            >
              <span className="font-heading text-second text-xl font-semibold mb-3 uppercase">
                Name 3
              </span>
              UserPost 3
              <span className="mt-3 text-lightWhite text-[16px]">Date 3</span>
            </SwiperSlide>

            {/* SwiperSlide 4 */}
            <SwiperSlide
              style={{
                height: "350px",
                background: `linear-gradient(to top, #000000cc, #000000d9), urlurl('https://i.ibb.co/QP1WFyS/hand-4213487-1280.jpg')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="bg-second border-[1px] border-lightBlack p-5 border-dotted font-body"
            >
              <span className="font-heading text-second text-xl font-semibold mb-3 uppercase">
                Name 3
              </span>
              UserPost 3
              <span className="mt-3 text-lightWhite text-[16px]">Date 3</span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AllSingleCatagorie;
