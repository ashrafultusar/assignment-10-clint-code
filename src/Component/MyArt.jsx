import { useContext, useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { AuthContex } from "../Firebase/Authprovider";

const MyArt = () => {
  const { user } = useContext(AuthContex) || {};
const [item, setItem]=useState()
    
    
  useEffect(() => {
      fetch(`http://localhost:5000/myArt/${user?.email}`)
          .then(res => res.json())
          .then(data => {
            setItem(data)
      })
  },[user]);
    



  return (
    <div>
      <Helmet>
        <title>DREAM ART | My Art</title>
          </Helmet>
          

          <div>
              {
                  item.map(p=>( <div key={p._id}><h1>hello</h1></div> ))
              }
</div>

    </div>
  );
};

export default MyArt;
