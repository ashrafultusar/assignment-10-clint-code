import { useContext, useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContex } from "../Firebase/Authprovider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArt = () => {
  const { user } = useContext(AuthContex) || {};
  console.log(user);
  const [item, setItem] = useState();
  const [filter, setFilter] = useState([]);
  const [controle, setControle] = useState(false);
  console.log(item);

  const handelFilter = (e) => {
    if (e === "all") {
      setFilter(item);
    } else if (e === "yes") {
      const yes = item.filter((user) => user.customization === "Yes");
      setFilter(yes);
    } else if (e === "no") {
      const no = item.filter((user) => user.customization === "No");
      setFilter(no);
    }
  };

  // update section
  useEffect(() => {
    if (user) {
      fetch(`https://art-and-craft-store-server-ioz1o3buw.vercel.app/myArt/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data);
          setFilter(data);
        });
    }
  }, [user, controle]);

 
  const handelDelet = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-and-craft-store-server-ioz1o3buw.vercel.app/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              setControle(!controle);
            }
          });
      }
    });
  };

  return (
    <div className="mx-3">
      <Helmet>
        <title>DREAM ART | My Art</title>
      </Helmet>

      <div className="mb-24 mt-12 text-center">
        <details className="dropdown">
          <summary className="m-1 bg-green-500 btn text-xl font-bold">
            Customization
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-44  bg-green-500">
            <li
              className="text-[18px]  font-semibold"
              onClick={() => handelFilter("all")}
            >
              <a className="pl-14">All</a>
            </li>
            <li
              className="text-[18px] font-semibold"
              onClick={() => handelFilter("yes")}
            >
              <a className="pl-14">Yes</a>
            </li>
            <li
              className="text-[18px] font-semibold"
              onClick={() => handelFilter("no")}
            >
              <a className="pl-14">No</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="gap-6 my-12 grid grid-cols-1 md:grid-cols-3">
        {filter?.map((p) => (
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
