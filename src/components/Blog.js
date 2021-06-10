import { Button } from "@material-ui/core"
import React from "react"
import { useStyles } from "./css/materialMakeStyles"
import welcome_leaf_image from "../assets/welcome-leaf.png";
import Blogcards from "./elements/Blogcards";
import Blog1 from "../assets/blog1.png";
import Blog2 from "../assets/blog2.png";
import Blog3 from "../assets/blog3.png";


export const Blog = () => {

    const images = [Blog1,Blog2,Blog3]
    const classes = useStyles();
    return (
        <div className="news-and-blog">
            <div className="news-div">
                <p className="subscribe">
                    Subscribe to Our Newsletter
                </p>
                <p className="subscribe-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="provide-email">
                    <input placeholder="Enter your email address" />
                    <Button className={classes.root}>Subscribe</Button>
                </div>
                <img className="welcome-leaf" src={welcome_leaf_image} alt={"leaf"} />
                <p className="welcome-heading">Read Our Blog</p>
                <p className="welcome-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="blog-div">
                 {images.map(data=>{
                     return <Blogcards src={data}/>
                 })}   
                </div>
                
            </div>
            <div className="xlarge-leaves-on-side">
               
            </div>

        </div>
    )
}