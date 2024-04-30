import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { AuthContex } from "../Firebase/Authprovider";
import { Typewriter } from 'react-simple-typewriter'



const AddCraft = () => {
  const { user } = useContext(AuthContex)||{};
  
// console.log(user)
  const handelAddCraft = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const itemName = form.itemName.value;
    const subcategoryName = form.subcategoryName.value;
    const shortDescription = form.shortDescription.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const customization = form.customization.value;
    const stockStatus = form.stockStatus.value;
    const email = form.email.value;
    const name = form.name.value;
    const id = user.email;

    
    const newCraft = {
      photo,
      itemName,
      subcategoryName,
      shortDescription,
      price,
      rating,
      processingTime,
      customization,
      stockStatus,
      email,
      name,id
    };

    // console.log(newCraft);

    fetch("https://art-and-craft-store-server-psi.vercel.app/craft", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Craft Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="mx-3">
      <Helmet>
        <title>DREAM ART | Add Card</title>
      </Helmet>

      <div>
        <div className="mb-4 text-center">
          
      <h1 className="text-5xl  font-semibold mb-4 " style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'semebold' }}>
      Add Your Favourite{' '}
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Craft', 'Craft', 'Craft', 'Craft']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span>
      </h1>
</div>

        

        <div className=" bg-base-200">
          <form onSubmit={handelAddCraft}>
            <div className="p-10">
              <div className="form-control md:w-full">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="photo"
                  placeholder="Image"
                  name="photo"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="md:flex gap-6">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Item Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Item Name"
                    name="itemName"
                    className="input input-bordered  w-full"
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
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
                    required
                  />
                </div>
              </div>
              <div className="md:flex gap-6">
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
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="input input-bordered  w-full"
                    required
                  />
                </div>
              </div>

              <input
                type="submit"
                value="Add value"
                className="btn w-full bg-green-500 mt-4"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCraft;
