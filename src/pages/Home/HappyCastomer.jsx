import { FaFacebook, FaInstagram } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import { Typewriter } from 'react-simple-typewriter'



const HappyCastomer = () => {
  return (
   
<div className="my-16 bg-[#f3f3f3] py-16 ">
      <div className="text-center pb-8">

      <h1 className="text-5xl font-semibold mb-4 " style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'semebold' }}>
      Meet Our world class{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter 
            words={['Crafter', 'Crafter', 'Crafter', 'Crafter']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h1>

        <p className="md:text-xl">
          "World-class artistry and craftsmanship intertwine to form the
          pinnacle of professional excellence, where each stroke of the brush
          and every meticulous detail converge to create masterpieces that
          transcend time. It's the fusion of creativity, skill, and dedication
          that propels artisans to craft wonders that resonate with the soul and
          inspire generations."
        </p>
      </div>

      <div className="">
      <Marquee speed={20}>
        <div className="flex flex-col   items-center mr-4 ">
          <img
            className="w-48 h-64 rounded-lg "
            src="https://i.ibb.co/C2T6fbp/tile-focus-women.jpg"
            alt=""
          />

          <h1 className=" text-xl font-semibold">Barbara</h1>
          <div className="flex gap-2 text-2xl pt-1 ">
            <FaFacebook className="text-green-600" />
            <FaInstagram className="text-red-600" />
          </div>
        </div>
        <div className="flex flex-col   items-center mr-4">
          <img
            className="w-48 h-64 rounded-lg"
            src="https://i.ibb.co/3MfF5r1/image.jpg"
            alt=""
          />

          <h1 className=" text-xl font-semibold">Kimberly Ride</h1>
          <div className="flex gap-2 text-2xl pt-1 ">
            <FaFacebook className="text-green-600" />
            <FaInstagram className="text-red-600" />
          </div>
        </div>

        <div className="flex flex-col   items-center mr-4">
          <img
            className="w-48 h-64 rounded-lg"
            src="https://i.ibb.co/yhwD0wr/Woman-at-Lover-s-Bridge-Tanjung-Sepat-cropped.jpg"
            alt=""
          />

          <h1 className=" text-xl font-semibold">Olivia</h1>
          <div className="flex gap-2 text-2xl pt-1 ">
            <FaFacebook className="text-green-600" />
            <FaInstagram className="text-red-600" />
          </div>
        </div>

        <div className="flex flex-col   items-center mr-4">
          <img
            className="w-48 h-64 rounded-lg"
            src="https://i.ibb.co/s2YGKNL/young-bearded-man-with-striped-shirt-273609-5677.jpg"
            alt=""
          />

          <h1 className=" text-xl font-semibold">Steven Jon</h1>
          <div className="flex gap-2 text-2xl pt-1 ">
            <FaFacebook className="text-green-600" />
            <FaInstagram className="text-red-600" />
          </div>
        </div>

        <div className="flex flex-col   items-center mr-4">
          <img
            className="w-48 h-64 rounded-lg"
            src="https://i.ibb.co/YWS3hyx/Semi-Formal-Attire-For-Women-360x405-jpg.webp"
            alt=""
          />

          <h1 className=" text-xl font-semibold">Isabella.</h1>
          <div className="flex gap-2 text-2xl pt-1 ">
            <FaFacebook className="text-green-600" />
            <FaInstagram className="text-red-600" />
          </div>
        </div>

        <div className="flex flex-col   items-center mr-4">
          <img
            className="w-48 h-64 rounded-lg"
            src="https://i.ibb.co/YW5P8fn/handsome-bearded-guy-posing-against-white-wall-273609-20597.jpg"
            alt=""
          />

          <h1 className=" text-xl font-semibold">Devid </h1>
          <div className="flex gap-2 text-2xl pt-1 ">
            <FaFacebook className="text-green-600" />
            <FaInstagram className="text-red-600" />
          </div>
        </div>
      </Marquee>
      </div>

    
    </div>
  
    
  );
};

export default HappyCastomer;
