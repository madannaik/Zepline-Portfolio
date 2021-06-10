import React from "react";
import colon from "../assets/colon.png"
import woman from "../assets/woman.png"
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';
import { TimelineDot } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "50px",
    },
}));
export const About = () => {
    const classes = useStyles();
    return (
        <div className="about-us">
            <img src={colon} alt={"colon"} />
            <div className="profile-pic">
                <img src={woman} alt={"profile-pic"} />
                <p className="user-name">Jane Doe</p>
                <div className={classes.root}>
                    <Rating name="read-only" value={3} readOnly />
                </div>
                <p className="thank-you">
                    Thank you for all the amazing produce and products you deliver each week…
                    you make my life so easy an bring goodness into our family eating.
                    I’ve been roasting a lot of brussel sprouts and
                </p>
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    margin:"2px"
                }}>
                <TimelineDot variant="outlined" style={{
                   borderColor:"#00dbd0",
                   margin:"2px"
               }}/> 
               <TimelineDot variant="default" style={{
                   borderColor:"#00dbd0",
                   backgroundColor:"#00dbd0",
                   margin:"2px"
               }}/>
               <TimelineDot variant="outlined" style={{
                  borderColor:"#00dbd0",
                   margin:"2px"
               }}/>
               <TimelineDot variant="outlined" style={{
                   borderColor:"#00dbd0",
                   margin:"2px"
               }}/>
                </div>
               
            </div>
        </div>
    )
}