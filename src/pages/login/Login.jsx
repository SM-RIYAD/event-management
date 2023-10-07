import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    console.log(name);
  };
  return (
    <div className="">
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
            <form onSubmit={handleLogin} className="card-body">
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
                    New to the web site?
                    <span className="text-red-600 font-bold underline">
                      <Link to={"/register"}>Register </Link>
                    </span>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-red-600 btn-primary border-0 text-white">
                  Login
                </button>
                <button className="btn mt-5 bg-red-600 btn-primary border-0 text-white">
                  Log In With Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
