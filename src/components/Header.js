import React from 'react'
import './css/main.css'
import logo from "../assets/small-logo.png";
import large_logo from "../assets/large-logo.png";
import flower from "../assets/flower.png";
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        background: ' #00dbd0',
        borderRadius: 10,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        marginTop: '10px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        '&:hover': {
            background: "red"
        }
    },
});

export default function Header() {
    const classes = useStyles();
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
                <div className="header-body-row">
                    <div className="header-body">
                        <p className="header-body-text">Healthy life with</p>
                        <h1 className="header-body-bold">Nature Organic</h1>
                        <p className="header-body-para">
                            Vegetables are the edible parts of a plant
                            that is used in cooking or can be eaten now.
                    </p>
                        <Button classes={{ root: classes.root }}>Explore Now</Button>
                    </div>
                    <div>
                        <img className="xlarge-logo" src={large_logo} alt={"xl-large-logo"} />
                    </div>
                    <div>
                        <img className="flower-image" src={flower} alt={"xl-large-logo"} />
                    </div>
                </div>


            </div>
        </div>
    )
}
