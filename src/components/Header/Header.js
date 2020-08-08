import React from "react";
import "./Header.scss"
import Search from "../Search/Search";
const Header = ()=>{
return(
    <div className="header">
            <div className="header__content">
                    <h2>SHOPMATE</h2>
                    <Search/>
                    <h2> Login    |
                         Sign Up
                    </h2>
                <h2>Cart(0)</h2>
            </div>
    </div>
)
}

export default Header;