import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CraftCard from "../pages/Home/CraftCard";

const CraftItems = () => {
  const crafts = useLoaderData();

  return (
    <div className="my-12">
      <Helmet>
        <title>DREAM ART | Craft Items</title>
      </Helmet>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {crafts.slice(0,6).map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard> 
          ))}
        </div>
      </div>
    </div>
  );
};

export default CraftItems;
