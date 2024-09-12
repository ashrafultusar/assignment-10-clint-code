// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import { useEffect, useState } from "react";

const ViewDetails = () => {
  const { id } = useParams();

  const [view, setView] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/updateCraft/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setView(data);
      });
  });

  // console.log(view);

  return (
    <div className="container mx-auto py-20">
      <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
        {/* Job Details */}
        <div data-aos="fade-right"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200"  className="flex-1  px-4 py-7 bg-[#124C48] text-white rounded-md shadow-md md:h-[450px]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-sm font-light  ">
              Rating: <FcRating />
              {view?.rating}
            </span>
            <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
              {view?.stockStatus}
            </span>
          </div>

          <div>
            <h1 className="mt-2 text-3xl font-semibold  ">
              {view?.itemName}
            </h1>

            <p className="mt-2 text-lg  ">
              {view?.shortDescription}
            </p>
            <p className="mt-6 text-sm font-bold  ">
              Buyer Details:
            </p>
            <div className="flex items-center gap-5">
              <div>
                <p className="mt-2 text-sm   ">
                  Name: {view?.name}
                </p>
                <p className="mt-2 text-sm   ">
                  Email: {view?.email}
                </p>
              </div>
            </div>
            <p className="text-sm font-bold">
              Sub-Category:
              <span className="">{view?.subcategoryName}</span>
            </p>
            <p className="mt-2 text-lg font-bold  ">
              Range: {view?.price} $
            </p>
          </div>
        </div>
        {/* Place A Bid Form */}
        <section data-aos="fade-left"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200" className="p-6 w-full  bg-[#124C48] rounded-md shadow-md flex-1 md:min-h-[450px]">
          <img className="w-full" src={view?.photo} alt="" />
          <p className="text-white text-center pt-2">{ view?.itemName}</p>
        </section>
      </div>
    </div>
  );
};

export default ViewDetails;
