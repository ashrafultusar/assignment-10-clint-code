import { useLoaderData } from "react-router-dom";

const Artandcraftcatagories = () => {

    const allCatagories = useLoaderData();
    console.log(allCatagories)

    return (
        <div>
            <h1>hello vai</h1>
        </div>
    );
};

export default Artandcraftcatagories;