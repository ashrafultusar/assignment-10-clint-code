
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Typewriter } from "react-simple-typewriter";

const HappyCastomer = () => {
  return (
    <div className="container mx-auto mt-96 ">
      <div className="text-center pb-8 text-white overflow-y-hidden overflow-x-hidden">
        <h1
          className="text-5xl font-semibold"
          style={{
            paddingTop: "5rem",
            margin: "auto 0",
            fontWeight: "bold",
          }}
        >
          Meet Our world class{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
            <Typewriter
              words={["Crafter", "Crafter", "Crafter", "Crafter"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="md:text-xl mt-2">
          "World-class artistry and craftsmanship intertwine to form the pinnacle of professional excellence..."
        </p>
      </div>

      <div className="">
        <Marquee speed={20} pauseOnHover>
          <div className="w-72 mx-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://i.ibb.co/C2T6fbp/tile-focus-women.jpg"
              alt="Barbara"
            />
            <div className="text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Barbara
              </a>
              <div className="flex items-center justify-center gap-2 text-2xl py-2">
                <FaFacebook className="text-green-600" />
                <FaInstagram className="text-red-600" />
              </div>
            </div>
          </div>

          <div className="w-72 mx-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://i.ibb.co/HNc227P/images-1.jpg"
              alt="Kimberly Ride"
            />
            <div className="text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Kimberly Ride
              </a>
              <div className="flex items-center justify-center gap-2 text-2xl py-2">
                <FaFacebook className="text-green-600" />
                <FaInstagram className="text-red-600" />
              </div>
            </div>
          </div>

          <div className="w-72 mx-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://i.ibb.co/yhwD0wr/Woman-at-Lover-s-Bridge-Tanjung-Sepat-cropped.jpg"
              alt="Olivia"
            />
            <div className="text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Olivia
              </a>
              <div className="flex items-center justify-center gap-2 text-2xl py-2">
                <FaFacebook className="text-green-600" />
                <FaInstagram className="text-red-600" />
              </div>
            </div>
          </div>

          <div className="w-72 mx-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://i.ibb.co/s2YGKNL/young-bearded-man-with-striped-shirt-273609-5677.jpg"
              alt="Steven Jon"
            />
            <div className="text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Steven Jon
              </a>
              <div className="flex items-center justify-center gap-2 text-2xl py-2">
                <FaFacebook className="text-green-600" />
                <FaInstagram className="text-red-600" />
              </div>
            </div>
          </div>

          <div className="w-72 mx-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://i.ibb.co/YWS3hyx/Semi-Formal-Attire-For-Women-360x405-jpg.webp"
              alt="Isabella"
            />
            <div className="text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Isabella
              </a>
              <div className="flex items-center justify-center gap-2 text-2xl py-2">
                <FaFacebook className="text-green-600" />
                <FaInstagram className="text-red-600" />
              </div>
            </div>
          </div>

          <div className="w-72 mx-4 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            <img
              className="object-cover w-full h-56"
              src="https://i.ibb.co/YW5P8fn/handsome-bearded-guy-posing-against-white-wall-273609-20597.jpg"
              alt="Devid"
            />
            <div className="text-center">
              <a
                href="#"
                className="block text-xl font-bold text-gray-800 dark:text-white"
                tabIndex="0"
                role="link"
              >
                Devid
              </a>
              <div className="flex items-center justify-center gap-2 text-2xl py-2">
                <FaFacebook className="text-green-600" />
                <FaInstagram className="text-red-600" />
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default HappyCastomer;

