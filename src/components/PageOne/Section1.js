import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';
import { Grid } from "material-ui";

export default props =>
    <Fragment>
        <div style={{marginLeft:"-13.5%",color:"#3F4244", zIndex:3,position:"relative"}}>
            <span style={{ position: "absolute", marginTop: "6%", fontSize: "2.5vw", marginLeft: "20%", fontWeight: "bold" }}>God's Word In</span>
            <span style={{ position: "absolute", marginTop: "9.5%", fontSize: "2.5vw", marginLeft: "20%", fontWeight: "bold"}}>Every Language</span>
            <span style={{ position: "absolute", marginTop: "14.5%", fontSize: "2.5vw", marginLeft: "20%", fontWeight: "bold", borderBottom: "#64B145 .09vw solid",width: "8vw"}}></span>
            {/* <p style={{ position: "relative", top: "14.5vw", borderBottom: "#64B145 .08vw solid", marginLeft: "244%", width: "8vw" }}></p> */}
            <span style={{ position: "absolute", marginTop: "17%", fontSize: "1.1vw", marginLeft: "20%", fontWeight: "bold", color: "#0F1010" }}>Seed Company is at the cutting edge of </span>
            <span style={{ position: "absolute", marginTop: "19%", fontSize: "1vw", marginLeft: "20%", fontWeight: "bold", color: "#0F1010" }}>bringing the Bible to people who have never</span>
            <span style={{ position: "absolute", marginTop: "21%", fontSize: "1vw", marginLeft: "20%", fontWeight: "bold", color: "#0F1010" }}>had a copy in a language they understand.</span>
            <Button size="medium" style={{ position: "absolute", marginTop: "25%", fontSize: ".85vw", marginLeft: "20%", fontWeight: "bold", color: "white", backgroundColor: "#64B145", fontFamily: "Gotham-Black" }}>OUR STORY</Button>
        </div>
        {/* <img style={{ marginTop: "-2.25%", zIndex: -1, position: "absolute", width: "75%", marginRight: "12.5%", marginLeft: "12.5%", windowHeight: "70%" }} src="https://seedcompany.com/HeroImageFull.e7bbac9732e0e0c9c9c5.png" alt="Hero image" /> */}
        <img style={{ width: "100%", windowHeight: "150%", marginTop: "-8.5%", position:"relative", zIndex:2, top:"12vh"}} src="https://seedcompany.com/HeroImageFull.e7bbac9732e0e0c9c9c5.png" alt="Hero image" />
    </Fragment>