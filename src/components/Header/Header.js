import React, {useEffect, useState} from "react";
import "./Header.scss"
import Search from "../Search/Search";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import fetchProductsThunk from "../../redux/actions/fetchProducts";
const Header = ({ fetchProductsThunk,
                    product})=>{

    const [modalVisible, setModalVisible] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchedProducts, setSearchedProducts] = useState([]);


    const openModal =()=>{
setModalVisible(true);
    }

    const fetchData = async ()=>{
        await fetchProductsThunk()
    }

    useEffect(()=>{
        fetchData();
    }, [])


    const performSearch = (searchText) =>{
        const searchedData = product?.rows.filter((ele)=>{
            let name = ele.name.toLowerCase()
            return name.includes(searchText.toLowerCase())
        })
        setSearchedProducts(searchedData);
        return searchedData

    }


    const handleChange = (e)=>{
        const searchTerm = e.target.value
        setSearchText(searchTerm);
        performSearch(searchTerm)
    }

return(
    <div className="header">
            <div className="header__content">
                <Link to="/">
                    <h2>SHOPMATE</h2>

                </Link>

                <input
                    className="searchbar"
                    type="search"
                    value={searchText}
                    onChange={handleChange}
                    placeholder="search product"
                />
                    <h2 onClick={()=>openModal}> Login
                    </h2>
                <h2 onClick={()=>openModal}> Sign up
                    </h2>
                <Link to="/cart">
                    <h2>Cart(0)</h2>
                </Link>
            </div>
    </div>
)
}


const mapStateToProps = (state) => ({

    product: state.products.products
});
export default connect(mapStateToProps, {fetchProductsThunk})(Header);