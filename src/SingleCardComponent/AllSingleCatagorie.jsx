import { Link } from "react-router-dom";

const AllSingleCatagorie = ({ allcgg }) => {
  const {_id, image, subcategory_Name } = allcgg;

  return (
    <div>
      <div>
       
          <div className="card card-compact  bg-emerald-300 shadow-xl flex justify-center items-center">
            <div>
              <img className="h-52 w-full" src={image} alt="IMAGE" />
            </div>
            <div className="card-body ">
              <h2 className="card-title ">{subcategory_Name}</h2>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default AllSingleCatagorie;
