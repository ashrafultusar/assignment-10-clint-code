import { Swiper, SwiperSlide } from "swiper/react";
import { FcRating } from "react-icons/fc";
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
                background: `linear-gradient(to top, #000000cc, #000000d9), url('https://i.ibb.co.com/PxGV3Pn/among-the-sierra-nevada-albert-bierstadt.jpg')`,
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
              <span className="font-heading text-second text-xl font-semibold mb-3 uppercase text-white">
                Landscape Painting
              </span>
              <div className="flex items-center gap-2 text-white">
                <FcRating />
                5.0
              </div>
              <span className="mt-3 text-lightWhite text-[16px] text-white">
                Mountain view canvas
              </span>
            </SwiperSlide>

            {/* SwiperSlide 2 */}
            <SwiperSlide
              style={{
                height: "350px",
                background: `linear-gradient(to top, #000000cc, #000000d9), url('https://i.ibb.co.com/sVyZ0jC/images.jpg')`,
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
              <span className="font-heading text-second text-xl font-semibold mb-3 uppercase text-white">
                Portrait Drawing
              </span>
              <div className="flex items-center gap-2 text-white">
                <FcRating />
                4.5
              </div>
              <span className="mt-3 text-lightWhite text-[16px] text-white">
                Pencil Sketch Portrait
              </span>
            </SwiperSlide>

            {/* SwiperSlide 3 */}
            <SwiperSlide
              style={{
                height: "350px",
                background: `linear-gradient(to top, #000000cc, #000000d9), url('https://i.ibb.co.com/FhZzY6J/how-to-frame-watercolour-art.webp')`,
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
              <span className="font-heading text-second text-xl font-semibold mb-3 uppercase text-white">
                Water colour Painting
              </span>
              <div className="flex items-center gap-2 text-white">
                <FcRating />
                4.8
              </div>
              <span className="mt-3 text-lightWhite text-[16px] text-white">
                Floral Watercolor Art
              </span>
            </SwiperSlide>

            {/* SwiperSlide 4 */}
            <SwiperSlide
              style={{
                height: "350px",
                background: `linear-gradient(to top, #000000cc, #000000d9), url('https://i.ibb.co.com/K7mDTD5/image-675-1.jpg')`,
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
              <span className="font-heading text-second text-xl font-semibold mb-3 uppercase text-white">
                Oil Painting
              </span>
              <div className="flex items-center gap-2 text-white">
                <FcRating />
                5.0
              </div>
              <span className="mt-3 text-lightWhite text-[16px] text-white">
                Realistic Oil Portrait
              </span>
            </SwiperSlide>

            {/* slider 5 */}
            <SwiperSlide
              style={{
                height: "350px",
                background: `linear-gradient(to top, #000000cc, #000000d9), url('https://i.ibb.co.com/g7bhx5k/hq720.jpg')`,
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
              <span className="font-heading text-second text-xl font-semibold mb-3 uppercase text-white">
                Charcoal Sketching
              </span>
              <div className="flex items-center gap-2 text-white">
                <FcRating />
                5.0
              </div>
              <span className="mt-3 text-lightWhite text-[16px] text-white">
                Figure Charcoal Sketch{" "}
              </span>
            </SwiperSlide>

            {/* slider 6 */}
            <SwiperSlide
              style={{
                height: "350px",
                background: `linear-gradient(to top, #000000cc, #000000d9), url('https://i.ibb.co.com/6ZgRrKb/Learn-to-Draw-Cartoons.jpg')`,
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
              <span className="font-heading text-second text-xl font-semibold mb-3 uppercase text-white">
                Cartoon Drawing{" "}
              </span>
              <div className="flex items-center gap-2 text-white">
                <FcRating />
                4.9
              </div>
              <span className="mt-3 text-lightWhite text-[16px] text-white">
                Comic Strip Drawing
              </span>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AllSingleCatagorie;
