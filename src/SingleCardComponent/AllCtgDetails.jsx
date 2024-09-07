import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllCtgDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [details, setDetails] = useState({});

  useEffect(() => {
    fetch(
      `http://localhost:5000/singleDetails/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);
      });
  }, [id]);

    console.log(details)
    const { image,item_name,short_description,price,rating,processing_time,subcategory_Name } = details;

  return (
    <div>
      
      <div className="card mt-10 mb-16 card-compact bg-[#fff2f2] shadow-xl">
  <figure><img src={image} alt="image" /></figure>
  
  <div className="px-4">
                      <h1 className="pt-5 text-4xl font-bold mb-3">Name: {item_name }</h1>
                      <h1 className="text-3xl font-semibold mb-3">Category: {subcategory_Name }</h1>
                      <h1 className="mb-3 text-xl font-medium">{short_description }</h1>
                      <div className="mb-3 md:flex justify-between">
                      <h1 className="text-xl font-bold">Price: {price }</h1>
                      <h1 className="text-xl font-bold pr-40">Rating: { rating}</h1>
                      </div>
                  <h1 className="text-xl font-bold mb-3">Processing Time: {processing_time} Hours</h1>
                  
                  
                  <button className="btn mb-10 bg-green-500 text-[16px] font-medium ">View Details</button>
                  
          </div>
              
</div>
          
    </div>
  );
};

export default AllCtgDetails;
