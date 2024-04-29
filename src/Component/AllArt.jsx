import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import CraftCard from '../pages/Home/CraftCard';
import AllCraftSiggleCard from './AllCraftSiggleCard';

const AllArt = () => {

    const crafts = useLoaderData();
    // console.log(crafts)
    return (
        <div>
            <Helmet>
        <title>DREAM ART | All Art</title>
      </Helmet>
            

            <div className=" gap-6 my-12">
             
                <div className='flex justify-between items-center text-[20px] font-bold mb-4 bg-rose-200 py-2 px-4'>
                    <h1>Photo</h1>
                    <h1>Item Name</h1>
                    <h1>Subcategory Name
</h1>
                    <h1>Details</h1>
                </div>

                {crafts.map((craft) => (
                  
                    <tr key={craft._id} className='flex justify-between items-center mb-6 bg-[#fff2f2]'>
                        <th><img className='w-36 h-36 rounded-xl' src={craft.photo} alt="" /></th>
                        <th className='text-[18px]'>Name: { craft.itemName}</th>
                        <th className='text-[18px]'>{ craft.subcategoryName}</th>
                        <th className='text-[18px]'>{craft.stockStatus}</th> 
                        <th className="w-36">
        <Link to={`/viewDetails/${craft._id}`}>
              <button className="btn w-full bg-green-500 text-[16px] font-bold">View Detiels</button>
            </Link>
        </th>
                    </tr>
                    
     
              ))}
                


            </div> 

        </div>
    );
};

export default AllArt;