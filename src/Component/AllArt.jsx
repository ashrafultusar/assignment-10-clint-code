import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowUpRightFromSquare  } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";

const AllArt = () => {
  const crafts = useLoaderData();
  console.log(crafts)
  return (
    <div>
      <Helmet>
        <title>DREAM ART | All Art</title>
      </Helmet>

      <div className=" gap-6 container mx-auto pt-20 pb-20 ">
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-white '>My Bids</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {crafts?.length} Bid
        </span>
      </div>
              <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center uppercase gap-x-3'>
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left uppercase rtl:text-right text-gray-500'
                    >
                      <span>Stock Status</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center uppercase gap-x-2'>
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Category
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 uppercase'
                    >
                      Rating
                    </th>

                    <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right uppercase text-gray-500'>
                      View details
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                  {crafts.map(craft => (
                    <tr key={craft._id}>
                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {craft?.itemName
}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                        {craft?.stockStatus}
                      </td>

                      <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap '>
                       $ {craft?.price}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        <div className='flex items-center gap-x-2'>
                        {craft?.name}
                        </div>
                      </td>
                      <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap flex items-center gap-1'>
                      <FcRating className="text-xl" />
  {craft?.rating}
                      </td>
                      <td className='px-4 py-4 text-sm whitespace-nowrap'>
                        {/* Complete Button */}
                        <button class="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">

                                  <span class="mx-1">More</span>
                                  <FaArrowUpRightFromSquare />
  
</button>
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
