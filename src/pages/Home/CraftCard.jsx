import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";

const CraftCard = ({ craft }) => {
  // console.log(craft);
  const {
    photo,
    subcategoryName,
    shortDescription,
    stockStatus,
    rating,
    itemName,
  } = craft;

  return (
    <div>
      <div className="max-w-sm mx-auto bg-gradient-to-b from-teal-950 to-teal-900 rounded-lg shadow-lg overflow-hidden border">
        <img
          className="w-full h-64 object-cover p-4 rounded-2xl"
          src={photo}
          alt="Cyber Security"
        />
        <div className="p-6">
          <div className="flex justify-between">
            <p className="flex items-center gap-1 text-white">
              <FcRating />
              {rating}
            </p>
            <p className="text-white">{stockStatus}</p>
          </div>
          <h2 className="text-white text-2xl font-bold mb-4">{itemName}</h2>
          <p className="text-gray-300 text-sm mb-6">
            {shortDescription.substring(0, 70)}...
          </p>
          <Link to={`/viewDetails/${craft._id}`}>
            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
              Learn More →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
