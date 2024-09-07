import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCraft = () => {
  const { id } = useParams();
  console.log(id);

  const [update, setUpdate] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/updateCraft/${id}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setUpdate(data);
          console.log(data);
        },
        [id]
      );
  });

  const handelUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const itemName = form.itemName.value;
    const stockStatus = form.stockStatus.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;

    const allUpdate = {
      photo,
      itemName,
      stockStatus,
      subcategoryName,
      shortDescription,
      price,
      rating,
      customization,
      processingTime,
    };

    fetch(`http://localhost:5000/updateCraft/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(allUpdate),
    })

      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "success!",
            text: "Your Data Modified",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
    })

  };

  return (
    <div>
      <div className=" bg-base-200">
        <h1 className="text-4xl font-semibold text-center pt-4">
          You Can Update You Add Card Information
        </h1>
        <form onSubmit={handelUpdate}>
          <div className="p-10">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="photo"
                placeholder="Insert New Image Url"
                name="photo"
                className="input input-bordered w-full"
                
              />
            </div>
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Item Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Item Name"
                  name="itemName"
                  className="input input-bordered  w-full"
                  
                  defaultValue={update.itemName}
                />
              </div>

              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">
                    StockStatus ( example- In stock, Made to Order )
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="stockStatus"
                  name="stockStatus"
                  className="input input-bordered w-full"
                  
                  defaultValue={update.stockStatus}
                />
              </div>
            </div>
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Subcategory Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Subcategory Name"
                  name="subcategoryName"
                  className="input input-bordered w-full"
                  
                  defaultValue={update.subcategoryName}
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Short Description"
                  name="shortDescription"
                  className="input input-bordered  w-full"
                  
                  defaultValue={update.shortDescription}
                />
              </div>
            </div>
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  name="price"
                  className="input input-bordered w-full"
                  
                  defaultValue={update.price}
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="rating"
                  name="rating"
                  className="input input-bordered  w-full"
                  
                  defaultValue={update.rating}
                />
              </div>
            </div>
            <div className="md:flex gap-6">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">
                    Customization (example- Yes, No)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="customization "
                  name="customization"
                  className="input input-bordered w-full"
                  
                  defaultValue={update.customization}
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text">Processing Time</span>
                </label>
                <input
                  type="text"
                  name="processingTime"
                  placeholder="processing-time"
                  className="input input-bordered  w-full"
                  
                  defaultValue={update.processingTime}
                />
              </div>
            </div>

            <input
              type="submit"
              value="Update"
              className="btn w-full bg-green-500 mt-4"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCraft;
