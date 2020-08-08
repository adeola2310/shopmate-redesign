import React from "react";
import "./Home.scss"
import ProductCard from "../../components/productCard/ProductCard";



const Home = ()=>{
return(
    <>
        <div className="container">
            <div className="container__category">
                <h3>CATEGORY</h3>
                <ul className="container__category--lists">
                    <li className="items">FRENCH</li>
                </ul>
            </div>

            <div className="container__products">
                <div className="container__products--cards">
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                    <ProductCard/>
                </div>
            </div>


        </div>


        <div className="container__subscription">
            <div className="container__subscription--contents">
                <h3>Subscribe to our
                    <br/>mailing list</h3>
                    <input
                        className="mail"
                        type="email"
                        placeholder="Enter your mail"
                    />
                    <button type="submit" className="btn-mail">Subscribe</button>


            </div>
        </div>

    </>



)

}

export default Home;