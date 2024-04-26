import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../Firebase/Authprovider";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const { creatUser } = useContext(AuthContex);

  // react hook--------------------------------------
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    // password validation
    if (password.length < 6) {
      setError(toast.warn("Password at least 6 character"));
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError(toast.warn("Password Must have an Uppercase letter"));
      return;
    } else if (!/[a-z]/.test(password)) {
      setError(toast.warn("Password Must have an Lowercase letter"));
      return;
    }

    creatUser(email, password).then((result) => {
      console.log(result);
    });
  };

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

              <div className="relative">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                    required
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span>This field is required</span>}
                </div>
                <div>
                  <span
                    className="absolute top-12 right-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword? (
                      <FaEyeSlash></FaEyeSlash>
                    ) : (
                      <FaRegEye></FaRegEye>
                    )}
                  </span>
                </div>
              </div>

              {error && <p>{error}</p>}
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
