import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../Firebase/Authprovider";
import { useForm } from "react-hook-form";

const Register = () => {
  const { creatUser } = useContext(AuthContex);

  // react hook--------------------------------------
  const {
    register,
    handleSubmit,

    formState: { errors },
    } = useForm();


    
    
    const onSubmit = (data) => {
        console.log(data);
  } 
 

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  className="input input-bordered"
                  required
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="Email"
                  className="input input-bordered"
                  required
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="photoURL"
                  placeholder="photoURL"
                  name="photoURL"
                  className="input input-bordered"
                  
                  {...register("image")}
                />
                
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary">REGISTER</button>
              </div>
              <span>
                You have no account! please{" "}
                <Link className=" font-bold text-orange-400" to={"/login"}>
                  Login
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
