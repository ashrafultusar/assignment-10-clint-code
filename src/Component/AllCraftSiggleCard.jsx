import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllCraftSiggleCard = ({ craft }) => {
  // const { photo, itemName, subcategoryName, stockStatus } = craft;

//   const [item,setItem]=useState([])
// console.log(item)
//   useEffect(() => {
//     fetch(`https://art-and-craft-store-server-psi.vercel.app/viewDetails/${craft}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setItem(data)
//     })

//   })

  return (
    <div className="mx-3">

<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th className="text-[16px] text-green-500" >
          Photo
        </th>
        <th className= "text-[16px] text-green-500">Name</th>
        <th className="text-[16px] text-green-500">Job</th>
        <th className="text-[16px] text-green-500" >Favorite Color</th>
        <th className="text-[16px] text-green-500">View Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
        <img className="w-36 h-28" src={photo} alt="" />
        </th>
        <td>
                <h1>{itemName}</h1>
        </td>
        <td>
                <h1>{ subcategoryName}</h1>
        </td>
              <td><h1>{ stockStatus}</h1></td>
        <th className="w-36">
        <Link to={`/viewDetails/${craft._id}`}>
              <button className="btn w-full bg-green-500">View Detiels</button>
            </Link>
        </th>
      </tr>
      

    </tbody>
  </table>
</div>

      {/* <div className="card h-[420px] bg-base-100 shadow-xl">
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
      </div> */}
    </div>
  );
};

export default AllCraftSiggleCard;
