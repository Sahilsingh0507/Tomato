import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets.js";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>
                        Choose from a diverse menu featuring a delectable array
                        of dishes crafted with the finest ingredients and
                        culinary expertise. Our mission is to satisfy your
                        cravings and elevate your dining experience, one
                        delicious meal at a time.
                    </p>
                    <div className="footer-social-icons">
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon linkedin"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon twitte"
                        >
                            <FaXTwitter />
                        </a>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@tomato.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright {new Date().getFullYear()} &copy; Tomato.com - All
                Right Reserved.
            </p>
        </div>
    );
};

export default Footer;
