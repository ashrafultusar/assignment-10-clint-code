import { Helmet } from "react-helmet-async";
import CraftItems from "../../Component/CraftItems";
import Slider from "../Shared/Slider";
import HappyCastomer from "./HappyCastomer";

const Home = () => {
    return (
      <div>
        <Helmet>
        <title>PH-Realestate | Home</title>
      </Helmet>
        <Slider></Slider>
        <CraftItems></CraftItems>
        <HappyCastomer></HappyCastomer>
        
        </div>
    );
};

export default Home;<h1>this is home</h1>