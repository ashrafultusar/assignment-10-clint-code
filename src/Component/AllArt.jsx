import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";

const AllArt = () => {
  const crafts = useLoaderData();
  console.log(crafts);
  return (
    <div>
      <Helmet>
        <title>DREAM ART | All Art</title>
      </Helmet>

      <div className=" gap-6 container mx-auto pt-20 pb-20 ">
        <div className="flex items-center gap-x-3">
          <h2 data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200" className="text-lg font-medium text-white ">My Bids</h2>

          <span data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200"  className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">
            {crafts?.length} Bid
          </span>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  
                  <thead data-aos="fade-down"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200" className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <div className="flex items-center uppercase gap-x-3">
                          <span>Title</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left uppercase rtl:text-right text-gray-500"
                      >
                        <span>Stock Status</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        <button className="flex items-center uppercase gap-x-2">
                          <span>Price</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500"
                      >
                        Category
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 uppercase"
                      >
                        Rating
                      </th>

                      <th className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right uppercase text-gray-500">
                        View details
                      </th>
                    </tr>
                  </thead> 

                  <tbody data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1200" className="bg-gradient-to-b from-teal-950 to-teal-900 text-white   divide-y divide-gray-200 ">
                    {crafts.map((craft) => (
                      <tr key={craft._id} >
                        <td className="px-4 py-4 text-sm   whitespace-nowrap">
                          {craft?.itemName}
                        </td>

                        <td className="px-4 py-4 text-sm   whitespace-nowrap">
                          {craft?.stockStatus}
                        </td>

                        <td className="px-4 py-4 text-sm   whitespace-nowrap ">
                          $ {craft?.price}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            {craft?.name}
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap flex items-center gap-1">
                          <FcRating className="text-xl" />
                          {craft?.rating}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          {/* Complete Button */}
                         <Link to={`/viewDetails/${craft._id}`}> 
                          
                          <button className="flex items-center gap-1 relative overflow-hidden bg-transparent border border-white text-white py-1 px-2 rounded transition duration-300 group">
                    <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-black">
                      More
                    </span><FaArrowUpRightFromSquare />
                  </button>
                          
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArt;
