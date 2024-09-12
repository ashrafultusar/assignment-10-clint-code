import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../pages/Home/CraftCard";

const CraftItems = () => {
  const crafts = useLoaderData();

  return (
    <div className="my-12 container mx-auto">
      <Helmet>
        <title>DREAM ART | Craft Items</title>
      </Helmet>

      <div> 
        <h1 data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500" className="text-4xl text-white font-semibold md:mb-10 text-center">
          Best Selling Product
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crafts.slice(0, 6).map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default CraftItems;
