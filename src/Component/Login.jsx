import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../Firebase/Authprovider";
import { useForm } from "react-hook-form";
import { FaRegEye, FaEyeSlash, FaGoogle, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, googleSignIn, githubSignIn } = useContext(AuthContex);
  const navigate = useNavigate();
  const location=useLocation()
  const from = location?.state || '/'; 

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
    .then((result) => {
      if (result.user) {
        navigate(from)
       
    }
  })
      .catch((error) => {
        console.log(error);
      });
  };



  const handelSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        if (result.user) {
          navigate(from)
          toast.success("Login successfully!");
      }
    });
  };



  return (
    <div>
<Helmet>
        <title>DREAM ART | Login</title>
      </Helmet>

      <div className="hero bg-base-200">
        <div className="hero-content">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
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
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    {...register("password", { required: true })}
                  />
                  {errors.password && <span>This field is required</span>}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>

                <span
                  className="absolute top-12 right-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash></FaEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}
                </span>
              </div>
              <div className="divider">OR</div>

              <div className="flex">
                <div data-aos="zoom-in-right" data-aos-duration="1000">
                  <button
                    onClick={() => handelSocialLogin(googleSignIn)}
                    className="btn font-bold text-[13px] mr-20 border border-orange-400 text-orange-600"
                  >
                    <FaGoogle></FaGoogle> Google
                  </button>
                </div>
                <div data-aos="zoom-in-left" data-aos-duration="1000">
                  <button
                    onClick={() =>handelSocialLogin (githubSignIn)}
                    className="btn font-bold text-[13px] border border-orange-400 text-orange-600"
                  >
                    <FaGithub></FaGithub> GitHub
                  </button>
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn bg-green-500">LOGIN</button>
              </div>
              <span>
                You have no account! Please{" "}
                <Link className="font-bold text-orange-400" to={"/register"}>
                  Register
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
