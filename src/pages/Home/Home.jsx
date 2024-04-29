import { Helmet } from "react-helmet-async";
import CraftItems from "../../Component/CraftItems";
import Slider from "../Shared/Slider";
import HappyCastomer from "./HappyCastomer";
import ShowCase from "./ShowCase";
import { Fade, JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import ArtCraftCategories from "../../Component/ArtCraftCategories";


const Home = () => {
    return (
      <div className="mx-3">
        <Helmet>
        <title>DREAM ART | Home</title>
        </Helmet>
        <Fade><Slider></Slider></Fade>
        <fadeInUp><CraftItems></CraftItems></fadeInUp>
        <ArtCraftCategories></ArtCraftCategories>
        <HappyCastomer></HappyCastomer>
        <slideInUp><ShowCase></ShowCase></slideInUp>
        
        
        </div>
    );
};

export default Home;<h1>this is home</h1>