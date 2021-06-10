import React from 'react'
import welcome_leaf_image from "../assets/welcome-leaf.png";
import organic_food_image from "../assets/organic_food.png";
import colored_organic_food_image from "../assets/colored_organic_food.png";
import plant1 from "../assets/plant1.png";
import plant2 from "../assets/plant2.png";
import plant3 from "../assets/plant3.png";
export default function HomeWelcome() {
    return (
        <div className="welcome-div">
            <img className="welcome-leaf" src={welcome_leaf_image} alt={"leaf"} />
            <p className="welcome-heading">Welcome to Nature</p>
            <p className="welcome-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
            <div >
                <img src={organic_food_image} alt={"organic_food"} style={{
                    margin: "10px 1vw"
                }} />

                <img src={colored_organic_food_image} alt={"organic_food"} style={{
                    margin: "10px 1vw"
                }} />
                <img src={organic_food_image} alt={"organic_food"} style={{
                    margin: "10px 1vw"
                }} />
                <img src={organic_food_image} alt={"organic_food"} style={{
                    margin: "10px 1vw"
                }} />
            </div>


            <div className="presented-by-div">
                <p>Proudly presented by</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
            </p>
                <div>
                    <img src={plant3} alt={"organic_food"} style={{
                        margin: "50px 3vw"
                    }} />
                    <img src={plant1} alt={"organic_food"} style={{
                        margin: "50px 3vw"
                    }} />
                    <img src={plant2} alt={"organic_food"} style={{
                        margin: "50px 3vw"
                    }} />
                    <img src={plant3} alt={"organic_food"} style={{
                        margin: "50px 3vw"
                    }} />
                    <img src={plant1} alt={"organic_food"} style={{
                        margin: "50px 3vw"
                    }} />
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                
            </div>
        </div>
    )
}
