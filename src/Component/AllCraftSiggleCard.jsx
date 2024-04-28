import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCraftSiggleCard = ({ craft }) => {
  const { photo, itemName, subcategoryName, stockStatus } = craft;

//   const [item,setItem]=useState([])
// console.log(item)
//   useEffect(() => {
//     fetch(`http://localhost:5000/viewDetails/${craft}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setItem(data)
//     })

//   })

  return (
    <div>
      <div className="card h-[420px] bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <h2 className="text-sm font-semibold">{subcategoryName}</h2>
          <p>{stockStatus}</p>
          <div>
            <Link to={`/viewDetails/${craft._id}`}>
              <button className="btn w-full bg-green-500">View Detiels</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCraftSiggleCard;
