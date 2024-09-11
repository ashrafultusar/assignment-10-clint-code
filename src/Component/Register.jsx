// import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../Firebase/Authprovider";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { creatUser } = useContext(AuthContex);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    if (password.length < 6) {
      setError(toast.warn("Password at least 6 characters"));
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError(toast.warn("Password must have an uppercase letter"));
      return;
    } else if (!/[a-z]/.test(password)) {
      setError(toast.warn("Password must have a lowercase letter"));
      return;
    }

    creatUser(email, password).then((result) => {
      console.log(result);
      navigate(from);
      toast.success("Register Successfully");
    });
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/JHDbGjK/pexels-photo-16175213.webp')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <Helmet>
        <title>DREAM ART | Register</title>
      </Helmet>

      {/* Back to Home Button */}
      <div className="absolute top-8 left-8 z-10">
        <Link to="/home">
          <button class="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-8 py-2.5">
            <svg
              class="w-5 h-5 sm:h-6 sm:w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3033_94669)">
                <path
                  d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_3033_94669">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </Link>
      </div>

      <div className="relative z-10 flex justify-center items-center min-h-screen">
        <div className="bg-transparent p-8 w-full max-w-sm">
          <h2 className="text-center text-lg font-bold uppercase text-orange-400 mb-2">
            Free Registration
          </h2>
          <h1 className="text-center text-4xl font-bold text-white mb-6">
            Join Caffeina Now
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                className="input bg-transparent border-b border-gray-400 text-white placeholder-gray-400 w-full py-2 focus:outline-none"
                required
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Your Email"
                className="input bg-transparent border-b border-gray-400 text-white placeholder-gray-400 w-full py-2 focus:outline-none"
                required
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>

            <div className="relative">
              <div className="form-control">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input bg-transparent border-b border-gray-400 text-white placeholder-gray-400 w-full py-2 focus:outline-none"
                  required
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div
                className="absolute right-2 top-2 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaRegEye />}
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="text-white text-sm">
                  Choose your profile picture
                </span>
              </label>
              <input
                type="file"
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600"
                {...register("image")}
              />
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <div className="form-control mt-6">
            
              <button className="relative overflow-hidden bg-transparent border border-white text-white py-1 px-2 rounded transition duration-300 group">
                    <span className="absolute inset-0 bg-white translate-x-[-100%] transition-transform duration-300 ease-in-out group-hover:translate-x-0"></span>
                    <span className="relative z-10 group-hover:text-black">
                    Register now
                    </span>
                  </button>

            </div>
            <p className="text-center text-white text-sm mt-4">
              Already have an account?{" "}
              <Link className="text-orange-400 hover:underline" to="/login">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
