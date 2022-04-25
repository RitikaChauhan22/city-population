import "./Nav.css";
import { Link } from "react-router-dom";

export const Nav = () => 
{
  return (
    <div className="navbar">
      <div className="sec">
        <Link className="add" to="/">
          Home
        </Link>
        <Link className="add" to="/add-city">
          Add City Name
        </Link>
        <Link className="add" to="/add-country">
          Add country Name
        </Link>
      </div>
    </div>
  );
};
