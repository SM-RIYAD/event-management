import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
console.log("photo url",user?.photoURL); 
  const handleLogout =()=>{

    logOut()
    .then(result => {
      console.log(result.user)})
    .catch(err=>console.log(err));

  }

  const navLinks = (
    <>
      <li className="pt-4">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="pt-4">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li className="pt-4">
        <NavLink to="/review">Review</NavLink>
      </li>
      <li>

          {

            user&& <div className="flex gap-2 ">
            <p className="font-bold">{user.displayName}</p>
            <div className="avatar">
              <div className="w-12  rounded-full ">
                <img src={user?.photoURL} />
              </div>
            </div>
        
          </div>
          }

      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar  bg-base-100 max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
           {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-red-800 font-bold text-xl">
            Social Events
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {/* <a className="btn">Login</a> */}

          {user ? (
         
              <button onClick={handleLogout} className="btn btn-secondary"> Logout</button>
           
          ) : (
            <Link to={"/login"}><button className="btn btn-secondary"> Log in</button> </Link> 
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
