import { Helmet } from "react-helmet-async";
import CraftItems from "../../Component/CraftItems";
import Slider from "../Shared/Slider";
import HappyCastomer from "./HappyCastomer";
import ShowCase from "./ShowCase";
import AllSingleCatagorie from "../../SingleCardComponent/AllSingleCatagorie";
import Statistics from "./Statistics";
import AboutUs from "./AboutUs";

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
      <Statistics></Statistics>
      <AboutUs></AboutUs>
      <HappyCastomer></HappyCastomer>
      <ShowCase></ShowCase>
    </div>
  );
};

export default Home;
<h1>this is home</h1>;
