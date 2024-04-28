import { useContext, useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContex } from "../Firebase/Authprovider";
import { Link } from "react-router-dom";

const MyArt = () => {
  const { user } = useContext(AuthContex) || {};
  console.log(user);
  const [item, setItem] = useState();
  const [controle, setControle] = useState(false);
  console.log(item);

  // update section
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/myArt/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
        });
    }
  }, [user,controle]);

  // delet section
  const handelDelet = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setControle(!controle)
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>DREAM ART | My Art</title>
      </Helmet>
      
      <div className="gap-6  grid grid-cols-1 md:grid-cols-3">
        {item?.map((p) => (
          <div key={p._id}>
            <div>
              <div className="card h-[420px] card-compact  bg-base-100 shadow-xl">
                <figure>
                  <img src={p.photo} alt="img" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">
                    {p.itemName}
                  </h2>
                  <div className="flex justify-between">
                    <p className="font-semibold text-xl">Price: {p.price}</p>
                    <p className="font-semibold text-xl">Rating: {p.rating}</p>
                  </div>
                  <div className="flex justify-between gap-3">
                    <p className="font-semibold text-xl">
                      Customization: {p.customization}
                    </p>
                    <p className="font-semibold text-xl">
                      Stock_Status: <span>{p.stockStatus}</span>{" "}
                    </p>
                  </div>

                  <div className="flex justify-between ">
                    <Link to={`/updatecraft/${p._id}`}>
                      {" "}
                      <button className="btn bg-green-500  ">Update</button>
                    </Link>
                    <button
                      onClick={() => handelDelet(p._id)}
                      className=" btn bg-red-500 text-white "
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyArt;
