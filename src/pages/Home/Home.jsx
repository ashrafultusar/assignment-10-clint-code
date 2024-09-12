import { Helmet } from "react-helmet-async";
import CraftItems from "../../Component/CraftItems";
import Slider from "../Shared/Slider";
import HappyCastomer from "./HappyCastomer";
import AllSingleCatagorie from "../../SingleCardComponent/AllSingleCatagorie";
import Statistics from "./Statistics";
import AboutUs from "./AboutUs";
import JoinUs from "./JoinUs";

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
      <JoinUs></JoinUs>
    </div>
  );
};

export default Home;
<h1>this is home</h1>;
