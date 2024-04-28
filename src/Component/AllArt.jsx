import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
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
            <h1>{ }</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              {crafts.map((craft) => (
          <AllCraftSiggleCard key={craft._id} craft={craft}></AllCraftSiggleCard>
        ))}
            </div> 

        </div>
    );
};

export default AllArt;