import React, { Fragment } from "react";
import Button from '@material-ui/core/Button';
import { Grid } from "material-ui";
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });
  
       
export default props =>
      <Fragment>
        <style>
          {`
              Button{
                color:#64B145;
              }
          `}
        </style>
        <script>
            
        </script>
        <div style={{marginLeft:"-10.5%",color:"#3F4244", zIndex:3,position:"relative"}}>
            <span style={{ position: "absolute", marginTop: "6%", fontSize: "2.5vw", marginLeft: "20%", fontWeight: "bold" }}>God's Word In</span>
            <span style={{ position: "absolute", marginTop: "9.5%", fontSize: "2.5vw", marginLeft: "20%", fontWeight: "bold"}}>Every Language</span>
            <span style={{ position: "absolute", marginTop: "14.5%", fontSize: "2.5vw", marginLeft: "20%", fontWeight: "bold", borderBottom: "#64B145 .09vw solid",width: "8vw"}}></span>
            <span style={{ position: "absolute", marginTop: "17%", fontSize: "1vw", marginLeft: "20%", fontWeight: "bold", color: "#0F1010" }}>Seed Company is at the cutting edge of </span>
            <span style={{ position: "absolute", marginTop: "19%", fontSize: "1vw", marginLeft: "20%", fontWeight: "bold", color: "#0F1010" }}>bringing the Bible to people who have never</span>
            <span style={{ position: "absolute", marginTop: "21%", fontSize: "1vw", marginLeft: "20%", fontWeight: "bold", color: "#0F1010" }}>had a copy in a language they understand.</span>
            <MuiThemeProvider theme={theme}>
            <Button size="medium" variant="outlined" color="primary" style={{position: "absolute", marginTop: "25%", fontSize: ".85vw", marginLeft: "20%", fontWeight: "bold", fontFamily: "Gotham-Black",color:"#64B145" }}>OUR STORY</Button>
            </MuiThemeProvider>
        </div>
        <img style={{ width: "100%", windowHeight: "100%", marginTop: "-8.5%", position:"relative", zIndex:2, top:"12vh"}} src={require("../.././assets/images/HeroImageFull.png")} alt="Hero image" />
    </Fragment>