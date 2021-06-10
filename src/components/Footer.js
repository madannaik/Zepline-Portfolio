import React from 'react'
import logo from "../assets/main-logo.png";
import linkedIn from "../assets/linkedIN.png";
import facebook from "../assets/facebook.png";
import Instagram from "../assets/Instagram.png";
import { Twitter } from '@material-ui/icons';
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-logo_copyright">
                <img src={logo} alt={"logo"} />
                <p className="footer-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor
                </p>
                <div className="footer-divide">
 
                </div>
                <p className="copyright">© Copyright 2020 Nature</p>
            </div>
            <div className="footer-information">
                <span>Information </span>
                <span></span>
                <span>About us</span>
                <span>Product</span>
                <span>Contact US</span>
                <span>Terms of Services</span>
            </div>
            <div className="footer-about_us">
                <span>About us</span>
                <span>Product</span>
            </div >
            <div className="footer-follow_us">
                
                    Follow us
                <div className="follow-us_divide"></div>
                <div className="footer-follow_links">
                    <img src={linkedIn} alt={"Social-icon"}/>
                    <img src={facebook}  alt={"Social-icon"}/>
                    <img src={Instagram} alt={"Social-icon"}/>
                    <Twitter style={{
                        backgroundColor:"white",
                        color:"#374b5c",
                        borderRadius:"25px",
                        padding:"4px",
                        margin:"6px"
                    }}/>
                </div>
            </div>
        </div>
    )
}
