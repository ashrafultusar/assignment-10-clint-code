import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";

const ViewDetails = () => {

    const { id } = useParams();
    console.log(id)
    const [view, setView] = useState({})
    console.log(view)

    useEffect(() => {
        fetch(`https://art-and-craft-store-server-ioz1o3buw.vercel.app/updateCraft/${id}`)
            .then(res => res.json())
            .then(data => {
            setView(data)
        })
})


  return (
    <div className="mx-5 my-10">
      <div className=" rounded-xl  bg-[#fff2f2] shadow-xl">
        <figure>
          <img className="rounded-xl w-full"
            src={view.photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
                  <h2 className="card-title pb-2"><span className="text-2xl font-bold">Item Name:</span> { view.itemName}</h2>
                  <h2 className=" pb-2 card-title"> <span className="text-2xl font-bold"> Subcategory Name:</span> { view.subcategoryName}</h2>
                  
                  <h2 className="card-title "><span className="text-2xl font-bold">Description:</span> { view.shortDescription}</h2>
                  
                  <div className="flex justify-between pb-2">
                  <h2 className="card-title"><span className="text-2xl font-bold">Price:</span> { view.price} $</h2>
                  <h2 className="card-title pr-40"><span className="text-2xl font-bold">Rating:</span> { view.rating} <FcRating />
</h2>
                  </div>
                  <div className="flex justify-between pb-2">
                  <h2 className="card-title"><span className="text-2xl font-bold">Processing Time:</span> { view.processingTime}</h2>
                  <h2 className="card-title pr-20"><span className="text-2xl font-bold">Stock Status:</span> { view.stockStatus}</h2>
                  
                 </div>
                 <h2 className="card-title"><span className="text-2xl font-bold">Customization:</span> { view.customization}</h2>
          <div className="card-actions justify-end">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
