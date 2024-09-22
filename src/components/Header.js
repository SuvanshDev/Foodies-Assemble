import { LOGO_URL } from "../utils/constant";
import { useEffect, useState} from "react";
const Header = () => {

  const [btn,setBtn] = useState("Login");
  useEffect(()=>{
    console.log("use effect called");
    
  },[btn]);
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
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