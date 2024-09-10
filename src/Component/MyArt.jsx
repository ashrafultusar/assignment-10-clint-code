import { useContext, useState } from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContex } from "../Firebase/Authprovider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FcRating } from "react-icons/fc";

const MyArt = () => {
  const { user } = useContext(AuthContex) || {};
  // console.log(user);
  const [item, setItem] = useState();
  const [filter, setFilter] = useState([]);
  const [controle, setControle] = useState(false);
  // console.log(item);

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
      fetch(`http://localhost:5000/myArt/${user?.email}`)
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
        fetch(`http://localhost:5000/delete/${id}`, {
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
    <div className=" container mx-auto">
      <Helmet>
        <title>DREAM ART | My Art</title>
      </Helmet>

      <div className="mb-24 text-center">
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

      <div className="gap-6 my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* {filter?.map((p) => (
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
        ))} */}
        {filter.map((p) => (
          <div className="max-w-sm mx-auto bg-gradient-to-b from-teal-950 to-teal-900 rounded-lg shadow-lg overflow-hidden border">
            <img
              className="w-full h-64 object-cover p-4 rounded-2xl"
              src={p.photo}
              alt="Cyber Security"
            />
            <div className="p-6">
              <div className="flex justify-between">
                <p className="flex items-center gap-1 text-white">
                  <FcRating />
                  {p.rating}
                </p>
                <p className="text-white">{p.stockStatus}</p>
              </div>
              <h2 className="text-white text-2xl font-bold mb-4">
                {p.itemName}
              </h2>
              <p className="text-gray-300 text-sm mb-6">
                {p.shortDescription.substring(0, 70)}...
              </p>
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
        ))}
      </div>
    </div>
  );
};

export default MyArt;
