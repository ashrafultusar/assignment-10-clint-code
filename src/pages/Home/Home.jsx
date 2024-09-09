import { Helmet } from "react-helmet-async";
import CraftItems from "../../Component/CraftItems";
import Slider from "../Shared/Slider";
import HappyCastomer from "./HappyCastomer";
import ShowCase from "./ShowCase";
import Artandcraftcatagories from "./Artandcraftcatagories";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>DREAM ART || Home</title>
      </Helmet>
      {/* slider */}
      <Slider></Slider>
      {/* craft item */}
      <fadeInUp>
        <CraftItems></CraftItems>
      </fadeInUp>
      <Artandcraftcatagories></Artandcraftcatagories>
      <HappyCastomer></HappyCastomer>
      <ShowCase></ShowCase>
    </div>
  );
};

export default Home;
<h1>this is home</h1>;
