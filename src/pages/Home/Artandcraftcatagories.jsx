import { useEffect, useState } from "react";
import AllSingleCatagorie from "../../SingleCardComponent/AllSingleCatagorie";


const Artandcraftcatagories = () => {

    const [allcatagorie, setAllcatagorie] = useState([]);
    console.log(allcatagorie)
    
    useEffect(() => {
        fetch(`https://art-and-craft-store-server-psi.vercel.app/categories`)
        .then(res => res.json())
            .then(data => {
        setAllcatagorie(data)
    })
    },[])
    


    return (

        
        <div>
            <h1 className="text-4xl font-bold mt-14 mb-6 text-center">All Categories</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {
                allcatagorie.map(allctg=><AllSingleCatagorie key={allctg._id} allcgg={allctg}></AllSingleCatagorie>)
            }
        </div>
      </div>
    );
};

export default Artandcraftcatagories;