import "./header.css"
import { Link } from "react-router-dom"
import Search from "../../assets/Search.png"
import Korzina from "../../assets/korzina.png"
import User from "../../assets/User.png"
import Logo from "../../assets/Logo.png"

function Header() {

    return (
        <div className="discount-header-wrapper">

            <div className="discount-blok">
                Get 25% OFF on your first order.Order Now
            </div>

            <header className="container">
                <img src={Logo} alt="" className="logo" />

                <div className="nav-block-center">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>

                    <Link to="" className="nav-link">
                        About
                    </Link>

                    <Link to="" className="nav-link">
                        Contact
                    </Link>
                </div>


                <div className="right-block">
                    <div className="search">
                        <img src={Search} alt="" className="search-img" />
                        <input type="text" className="search-input" placeholder="Search products" />
                    </div>
                    <div className="btns">
                        <button className="btn-korzina"><img src={Korzina} alt="" className="korzina-img" /></button>
                        <button className="btn-user"><img src={User} alt="" className="user-img"/></button>
                    </div>
                </div>


            </header>
        </div>
    )

}

export default Header