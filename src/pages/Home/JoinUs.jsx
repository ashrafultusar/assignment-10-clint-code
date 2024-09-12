import React from 'react';

const JoinUs = () => {
    return (
        <div className='container mx-auto'>
            <div class=" py-10 flex justify-center">
  <div class="bg-[#124C48] text-white rounded-lg pt-20 shadow-md w-full h-[320px] text-center">
    <h2 data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000" class="text-2xl font-bold mb-2">Join Dream Art</h2>
    <p data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000" class=" mb-6">Get the latest updates to get your dream art.</p>
    <div data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000" class="flex justify-center items-center">
      <input type="email" placeholder="Your email address"
             class="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
      <button class="ml-2 bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Sign up
      </button>
    </div>
  </div>
</div>

        </div>
    );
};

export default JoinUs;