import { Link } from "react-router-dom";
import logo from "../../images/costs_logo.png"
import "../../styles/css/Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to={"/costs"}>
                <img src={logo} alt="logo" />
            </Link>
            <ul className="list">
                <li className="item">
                    <Link to={"/costs"}>Home</Link>
                </li>
                <li className="item">
                    <Link to={"/Projects"}>Projects</Link>
                </li>
                <li className="item">
                    <Link to={"/Company"}>Company</Link>
                </li>
                <li className="item">
                    <Link to={"/Contact"}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}