// import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../Firebase/Authprovider";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
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
  const from = location?.state || "/home";

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
   {/* Back to Home Button */}
{/* Overlay */}
<div className="absolute inset-0 bg-black opacity-70 z-0"></div>

{/* Back to Home Button */}
<div className="absolute top-8 left-8 z-20">
  <Link to="/home">
    <button className="bg-[#1877F2] rounded-lg hover:bg-[#1877F2]/80 duration-300 transition-colors border border-transparent px-6 py-2">
    <IoHomeOutline className="text-2xl text-white" />
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
