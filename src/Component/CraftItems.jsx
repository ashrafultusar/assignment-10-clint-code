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
        <h1>all craft item:{crafts.length}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {crafts.map((craft) => (
            <CraftCard key={craft._id} craft={craft}></CraftCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CraftItems;
