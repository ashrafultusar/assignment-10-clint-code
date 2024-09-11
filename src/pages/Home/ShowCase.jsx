import React from "react";
import { LuBus } from "react-icons/lu";
import { TbUser } from "react-icons/tb";
import { FaAward } from "react-icons/fa6";

const ShowCase = () => {
  return (
    <div>
       <div className="container mx-auto md:flex justify-between items-center gap-6 bg-[#fff2f2] rounded-xl my-8">
      <div className="pl-4">
        <div>
          <h1
            className="text-2xl md:text-4xl font-semibold
              "
          >
            WE Are The Queenn Of Crafting
          </h1>
          <p className="text-xl">
            World-class artistry and craftsmanship intertwine to form the
            pinnacle of professional excellence,
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-4xl">
            <LuBus />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">WorldWide Shoping</h1>
            <p className="font-medium">
              You can buy or services our web product in anywhare
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-4xl">
            <TbUser />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Professional Crafter</h1>
            <p className="font-medium">
              World-class artistry and craftsmanship
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-4xl">
            <FaAward />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Best Quality</h1>
            <p className="font-medium">
              High product quality describes a product that is well-made,
              reliable, and performs as expected.
            </p>
          </div>
        </div>
      </div>

      <div>
        <img
          className="rounded-lg p-4"
          src="https://i.ibb.co/qsZpx0R/Cre.png"
          alt=""
        />
      </div>
    </div>
   </div>
  );
};

export default ShowCase;
