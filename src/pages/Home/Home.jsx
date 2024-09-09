import { Helmet } from "react-helmet-async";
import CraftItems from "../../Component/CraftItems";
import Slider from "../Shared/Slider";
import HappyCastomer from "./HappyCastomer";
import ShowCase from "./ShowCase";
import AllSingleCatagorie from "../../SingleCardComponent/AllSingleCatagorie";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>DREAM ART || Home</title>
      </Helmet>
      <Slider></Slider>
      <fadeInUp>
        <CraftItems></CraftItems>
      </fadeInUp>
      <AllSingleCatagorie></AllSingleCatagorie>
      <HappyCastomer></HappyCastomer>
      <ShowCase></ShowCase>
    </div>
  );
};

export default Home;
<h1>this is home</h1>;
