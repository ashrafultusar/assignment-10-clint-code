import React, { useState } from 'react';
import CountUp from 'react-countup';


const Statistics = () => {


    const bg = "https://i.ibb.co.com/7JcfLGK/pexels-koolshooters-9736494.jpg";
    const data = {
        parcelsBooked: 1150,
        parcelsDelivered: 10,
        users: 200
    };

    const [isPending, setIsPending] = useState(false);


    return (
        <div>
            <div className="py-10 md:py-[150px] mt-[50px] md:mt-[70px] lg:mt-[100px]"
                style={{
                    backgroundImage: `linear-gradient(to bottom, #001447C9, #001447C9), url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed'
                }}>
                <div className='flex flex-col md:flex-row justify-between items-center px-5 container mx-auto gap-[80px] md:gap-0'>

                    {/* Parcels Booked */}
                    <div className='flex flex-col justify-center items-center gap-3 w-full md:w-[33%]'>
                        {isPending ? (
                            <span className="loading loading-dots loading-lg text-white"></span>
                        ) : (
                            <CountUp
                                className='text-6xl lg:text-7xl font-bold font-body text-white text-center'
                                start={0}
                                end={data.parcelsBooked}
                                duration={4}
                                enableScrollSpy
                            />
                        )}
                        <h3 data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className='text-2xl lg:text-4xl font-body font-semibold text-white text-center'>
                            Total Products
                        </h3>
                    </div>

                    {/* Parcels Delivered */}
                    <div className='flex flex-col justify-center items-center gap-3 w-full md:w-[33%]'>
                        {isPending ? (
                            <span className="loading loading-dots loading-lg text-white"></span>
                        ) : (
                            <CountUp
                                className='text-6xl lg:text-7xl font-bold font-body text-white text-center'
                                start={0}
                                end={data.parcelsDelivered}
                                duration={4}
                                enableScrollSpy
                            />
                        )}
                        <h3 data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className='text-2xl lg:text-4xl font-body font-semibold text-white'>
                            Total Category
                        </h3>
                    </div>

                    {/* Total Users */}
                    <div className='flex flex-col justify-center items-center gap-3 w-full md:w-[33%]'>
                        {isPending ? (
                            <span className="loading loading-dots loading-lg text-white"></span>
                        ) : (
                            <CountUp
                                className='text-6xl lg:text-7xl font-bold font-body text-white text-center'
                                start={0}
                                end={data.users}
                                duration={4}
                                enableScrollSpy
                            />
                        )}
                        <h3 data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className='text-2xl lg:text-4xl font-body font-semibold text-white'>
                            Registered Users
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;