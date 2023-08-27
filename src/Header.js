import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
function Header() {
  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to={"/"}>
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>

      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" placeholder="Search items..." />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to={"/login"} className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Hello dev</span>
            <span className="header__optionTwo">Sign In</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to={"/login"} className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Returns</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to={"/login"} className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Your</span>
            <span className="header__optionTwo">Prime</span>
          </div>
        </Link>
      </div>

      {/* basket icon with number */}
      <Link to={"/checkout"} className="header__link">
        <div className="header__optionBasket">
          {/* Shopping basket icon */}
          <ShoppingBasketIcon className="shopping__icon" />
          {/* Number of item in the basket */}
          <span className="header__optionTwo header__basketCount">0</span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
