import "./catigory-menu.css";
import { NavLink } from "react-router-dom";
function CatigoryMenu() {
  return (
    <div className="menu">
     
     
        <NavLink
        className="item"
        activeClassName="active"
          to={{
            pathname: "/products",
          }}
          state={{ id:"MS001"}}
        >
          <img className="item-image" src="/mensShoe1-1.png" />
          <div>Men's Shoes</div>
        </NavLink>
        <NavLink
        className="item"
        activeClassName="active"
          to={{
            pathname: "/products",
          }}
          state={{ id: "WS002" }}
        >
          <img className="item-image" src="/women'sShoes2-2.png" />
          <div>Women's shoes</div>
        </NavLink>
        <NavLink
        className="item"
        activeClassName="active"
          to={{
            pathname: "/products",
          }}
          state={{ id: "KS003" }}
        >
          <img className="item-image" src="/kidsShoes7-2.png" />
          <div>Kid's Shoes</div>
        </NavLink>
      
     
    </div>
  );
}
export default CatigoryMenu;
