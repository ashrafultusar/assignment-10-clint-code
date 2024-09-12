const AboutUs = () => {
  return (
    <div className="my-24">
      <div className="bg-gray-100">
        {/* <!-- Hero Section --> */}
        <div
          className="relative bg-cover bg-center h-[620px]"
          style={{
            backgroundImage:
              "url('https://i.ibb.co.com/JHDbGjK/pexels-photo-16175213.webp')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center mb-28">
            <div className="text-center text-white">
              <h1
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
                className="text-5xl font-bold mb-4"
              >
                Let's Talk About Your Craft Idea With Us
              </h1>
              <p className="text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ut dictum ligula.
              </p>

              <button
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
                className="relative overflow-hidden bg-transparent border border-white text-white py-2 px-6 rounded transition duration-300 group"
              >
                <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                <span className="relative z-10 group-hover:text-black">
                  Contact Us
                </span>
              </button>
            </div>
          </div>

          {/* Wrapper for Why Choose Us Section */}
          <div className="relative top-[60%]">
            {/* <!-- Why Choose Us Section --> */}
            <div className="left-0 right-0">
              <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-xl rounded-lg p-8">
                  <div className="md:flex md:space-x-8">
                    {/* <!-- Image --> */}
                    <div className="md:w-1/2">
                      <img
                        className="w-full h-auto rounded"
                        src="https://i.ibb.co.com/JHDbGjK/pexels-photo-16175213.webp"
                        alt=""
                      />
                      <div>
                        {/* <!-- Experience, Creativity, Material --> */}
                        <div
                          data-aos="zoom-in"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1200"
                          className="mb-6"
                        >
                          <div className="flex justify-between mb-2">
                            <span>Experience</span>
                            <span>90%</span>
                          </div>
                          <div className="h-2 bg-gray-300 rounded-full">
                            <div
                              className="h-full bg-pink-500 rounded-full"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                        <div
                          data-aos="zoom-in"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="900"
                          className="mb-6"
                        >
                          <div className="flex justify-between mb-2">
                            <span>Creativity</span>
                            <span>95%</span>
                          </div>
                          <div className="h-2 bg-gray-300 rounded-full">
                            <div
                              className="h-full bg-pink-500 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                        <div
                          data-aos="zoom-in"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="600"
                          className="mb-6"
                        >
                          <div className="flex justify-between mb-2">
                            <span>Material</span>
                            <span>95%</span>
                          </div>
                          <div className="h-2 bg-gray-300 rounded-full">
                            <div
                              className="h-full bg-pink-500 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Text Section --> */}
                    <div className="md:w-1/2 mt-8 md:mt-0">
                      <p
                        data-aos="zoom-in-down"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                        className="uppercase font-semibold"
                      >
                        Why Choose Us?
                      </p>
                      <h2
                        data-aos="zoom-in-down"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                        className="text-5xl font-bold text-gray-800 lg:my-6 my-3"
                      >
                        Maker of <br /> Pretty Things
                      </h2>
                      <p
                        data-aos="zoom-in-down"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-duration="1000"
                        className="text-gray-600 mb-6"
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit sed sequi impedit, quo delectus voluptatum
                        ducimus quaerat quasi assumenda totam molestiae unde
                        ipsam aut magni quo delectus voluptatum ducimus quaerat
                        quasi assumenda totam molestiae unde ipsam aut magni
                        consectetur sapiente ea quod facilis!
                      </p>

                      {/* <!-- Features List --> */}
                      <ul className="space-y-4 text-gray-600">
                        <li
                          data-aos="zoom-in-down"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1000"
                        >
                          ✔ Certified Professional Crafter
                        </li>
                        <li
                          data-aos="zoom-in-down"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1000"
                        >
                          ✔ Worldwide & Fast Delivery
                        </li>
                        <li
                          data-aos="zoom-in-down"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1000"
                        >
                          ✔ Cashback for Every Purchase
                        </li>
                        <li
                          data-aos="zoom-in-down"
                          data-aos-anchor-placement="top-bottom"
                          data-aos-duration="1000"
                        >
                          ✔ High Quality Product & Best Equipment
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
