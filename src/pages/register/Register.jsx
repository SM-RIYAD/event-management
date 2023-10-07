import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../providers/AuthProvider";
import Header from "../Home/Header/Header";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const errorToast = (regError) =>
    toast.error(regError, { position: "bottom-center" });

    const SuccessToast = (successmsg) =>
    toast.success(successmsg, { position: "bottom-center" });

  const [regError, SetRegError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;

    if (password.length < 6) {
      errorToast("Password should be of at least 6 digits");
      return;
    } else if (!/[A-Z]/.test(password)) {
      errorToast("Password should have at least one capital letter");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errorToast("Password should have at least one special character");
      return;
    } else{

        createUser(email,password).then(result => {
            console.log(result.user)
            SuccessToast("user Created!")
            
        })
        .catch(error => {
            console.error(error)
        })
        
    }
  };
  return (
    <div>
        <Header></Header>
      <ToastContainer />
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left h-1/2 w-1/2 ">
            <img
              className="h-full object-cover"
              src="/images/vecteezy_cloud-computing-modern-flat-concept-for-web-banner-design_5879539.jpg"
              alt=""
            />
          </div>
          <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="photo"
                  name="photo"
                  placeholder="enter photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="flex justify-start">
                  {" "}
                  <p>
                    Have an account?
                    <span className="text-red-600 font-bold underline">
                      <Link to={"/login"}>Log in </Link>
                    </span>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-red-600 btn-primary border-0 text-white">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
