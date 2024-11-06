import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useEffect, useState} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btn,setBtn] = useState("Login");
  const onlineStatus =useOnlineStatus();

  useEffect(()=>{
    console.log("use effect called");
    
  },[btn]);
    return (
      <div className="flex justify-between shadow-lg bg-orange-200">
        <div className="logo-container">
          <img
            className="w-28"
            src={LOGO_URL}
          />
        </div>
        <div className="b flex items-center">
          <ul className="flex p-4 m-4 space-x-8 items-center">
          <li>Online Status:{onlineStatus ? "✅":"🔴"}</li>
            <li>
           <Link to="/">Home</Link> 
            </li>
            <li>
          <Link to="/about">About Us</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to ="/cart">Cart</Link>
            </li>
            <li>
            <Link to ="/grocery">Grocery</Link>
            </li>
            <button className="login" onClick={()=>{
              btn ==="Login" ? setBtn("Logout"):setBtn("Login")
              console.log(btn);
            }}>{btn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;