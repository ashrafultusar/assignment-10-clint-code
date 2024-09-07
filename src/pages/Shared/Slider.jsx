
import { Link } from "react-router-dom";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const sliderImg1 =
  "https://i.ibb.co.com/kJK9c05/pexels-wangming-photo-115695-354939.jpg";
const sliderImg2 = "https://i.ibb.co.com/q72mmDG/hand-4213487-1280.jpg";
const sliderImg3 = "https://i.ibb.co.com/RzvV69c/hairdresser-4666064-1280.jpg";

const Slider = () => {
  const properties = {
    prevArrow: (
      <button className="button-style button-style-left">
        <FaArrowLeft />
      </button>
    ),
    nextArrow: (
      <button className="button-style button-style-right">
        <FaArrowRight />
      </button>
    ),
  };

  return (
    <div>
      <Zoom {...properties} scale={0.6} pauseOnHover={false}>
        {/* slider 1 */}
        <div className="each-slide-effect relative h-screen">
          <div
            style={{
              backgroundImage: `linear-gradient(to right, #0f1c1cd9, #00000050) , url(${sliderImg2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
            className="w-full flex items-center justify-center"
          >
            <span className="container flex flex-col justify-center items-center">
              <p className="text-white uppercase font-body font-semibold slider-top-text">
                Welcome to DreamArt
              </p>
              <h2 className="text-[50px] md:text-[70px] lg:text-[110px] z-50 font-normal text-center text-white uppercase font-heading">
              Your Creative Journey Starts Here
              </h2>
              <div className="w-full flex justify-center items-center gap-2">
                <Link to="/all-art">
                  <button className="text-white font-medium uppercase font-heading px-6 md:px-8 py-3 md:py-4 hover:scale-105 duration-500 group flex justify-center items-center gap-2">
                    View More
                  </button>
                </Link>
              </div>
            </span>
          </div>
        </div>

        {/* slider 2 */}
        <div className="each-slide-effect relative h-screen">
          <div
            style={{
              backgroundImage: `linear-gradient(to right, #0f1c1cd9, #00000050) , url(${sliderImg3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
            className="w-full flex items-center justify-center"
          >
            <span className="container flex flex-col justify-center items-center">
              <p className="text-white uppercase font-body font-semibold slider-top-text">
                Hello! new friend
              </p>
              <h2 className="text-[50px] md:text-[70px] lg:text-[110px] z-50 font-normal text-center text-white uppercase font-heading">
              Bringing Imagination to Life
              </h2>
              <div className="w-full flex justify-center items-center gap-2">
                <Link to="/all-art">
                  <button className="text-white font-medium uppercase font-heading px-6 md:px-8 py-3 md:py-4 hover:scale-105 duration-500 group flex justify-center items-center gap-2">
                   view more
                  </button>
                </Link>
              </div>
            </span>
          </div>
        </div>

        {/* slider 3 */}
        <div className="each-slide-effect relative h-screen">
          <div
            style={{
              backgroundImage: `linear-gradient(to right, #0f1c1cd9, #00000050) , url(${sliderImg1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
            }}
            className="w-full flex items-center justify-center"
          >
            <span className="container flex flex-col justify-center items-center">
              <p className="text-white uppercase font-body font-semibold slider-top-text">
                Make your day
              </p>
              <h2 className="text-[50px] md:text-[70px] lg:text-[110px] z-50 font-normal text-center text-white uppercase font-heading">
              Transforming Ideas into Art
              </h2>
              <div className="w-full flex justify-center items-center gap-2">
                <Link to="/all-art">
                  <button className="text-white font-medium uppercase font-heading px-6 md:px-8 py-3 md:py-4 hover:scale-105 duration-500 group flex justify-center items-center gap-2">
                    View More
                  </button>
                </Link>
              </div>
            </span>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default Slider;
