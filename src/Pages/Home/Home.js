import React, {useEffect, useState} from "react";
import "./Home.scss"
import ProductCard from "../../components/productCard/ProductCard";
import {Link} from "react-router-dom";
import fetchProductsThunk from "../../redux/actions/fetchProducts";
import {connect} from "react-redux";
import Pagination from "rc-pagination";



const Home = ({
                  fetchProductsThunk,
                  product
              }) => {

const [currentPage, setCurrentPage] = useState(1)

    const fetchData = async ()=>{
        await fetchProductsThunk(currentPage, 20)
    }

    const changePage = (page) => {
        setCurrentPage(page);
        product(page, 20);
    };


console.log(product)

    useEffect(()=>{
        fetchData()
    }, [])
    return (
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
                        {
                            product?.rows?.map((prod, i)=>(
                                <Link to="/:id">
                                    <ProductCard
                                        key={prod.product_id}
                                        image={prod.thumbnail}
                                        price={prod.price}
                                        name={prod.name}
                                    />
                                </Link>
                            ))
                        }


                    </div>

                    <Pagination
                        style={{ display: "flex" }}
                        onChange={(page) => changePage(page)}
                        defaultCurrent={currentPage}
                        // total={organisationData?.count ? organisationData?.count : 0}
                        pageSize={20}
                    />


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

const mapStateToProps = (state) => ({

    product: state.products.products
});

export default connect(mapStateToProps, {fetchProductsThunk})(Home);