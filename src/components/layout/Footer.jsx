import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import "../../styles/css/Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <ul className="social_list">
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className="copy_right"><span>Costs</span>  &copy; 2022</p>
        </footer>
    )
}