import React from "react";
import "./ProductCard.scss";
import defaultImage from "../../assets/images/prod.jpg";

const productCard = ({image, price, name})=>{

    return (
        <div className="cards">
            <img
                src={image || defaultImage}
                className="image"/>
            <div className="cards__details">
                <h4 className="name">{name}</h4>
                <h4>${price}</h4>
                <button className="cart">Add to cart</button>
            </div>
        </div>
    )
}

export default productCard;