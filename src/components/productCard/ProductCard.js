import React from "react";
import "./ProductCard.scss";
import image from "../../assets/images/prod.jpg";

const productCard = ()=>{

    return (
        <div className="cards">
            <img src={image} className="image"/>
            <div className="cards__details">
                <h4>MEN sneaker</h4>
                <h5>N50;00</h5>
                <button className="cart">Add to cart</button>
            </div>
        </div>
    )
}

export default productCard;