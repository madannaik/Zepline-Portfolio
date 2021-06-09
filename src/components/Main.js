import React from 'react'
import './css/main.css'
import logo from "../assets/small-logo.png";

export default function Main() {
    return (
        <div className="main-body">
            <div className="header">
                <div className="header-appbar">
                    <span>
                        <img src={logo} alt={"logo"} />
                        <p> Organic</p>
                    </span>
                    <span>

                    </span>
                    <span>
                        Home
                   </span>
                    <span>
                        Product
                   </span>
                    <span>
                        Blog
                   </span>
                    <span>
                        About us
                   </span>
                    <span>
                        Contact
                   </span>
                </div>
            </div>
        </div>
    )
}
