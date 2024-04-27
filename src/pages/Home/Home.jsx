import { Helmet } from "react-helmet-async";
import CraftItems from "../../Component/CraftItems";
import Slider from "../Shared/Slider";
import HappyCastomer from "./HappyCastomer";
import ShowCase from "./ShowCase";

const Home = () => {
    return (
      <div>
        <Helmet>
        <title>DREAM ART | Home</title>
      </Helmet>
        <Slider></Slider>
        <CraftItems></CraftItems>
        <HappyCastomer></HappyCastomer>
        <ShowCase></ShowCase>
        </div>
    );
};

export default Home;<h1>this is home</h1>