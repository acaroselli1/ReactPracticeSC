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
              
              .hero-logo{
              -webkit-transform: translate(0px, 0);
              -webkit-transition: -webkit-transform 0.5s ease;
              -moz-transform: translate(0px, 0);
              -moz-transition: -moz-transform 0.5s ease;
              transform: translate(0px, 0);
              transition: -webkit-transform 0.5s ease;
              }

              .hero-logo:hover{
                  -webkit-transform: scale(1.3);
                  -ms-transform: scale(1.3);
                  transform: scale(1.3);
              }

              .rotate{
                -webkit-transform: rotate(90deg);

              /* Firefox */
              -moz-transform: rotate(90deg);

              /* IE */
              -ms-transform: rotate(90deg);

              /* Opera */
              -o-transform: rotate(90deg);

              }
              
              hr{
              height:.025vw;
              background-color:"#64B145";
              }

              .bigger-gap{
                height:7vh
              }
              .smaller-gap{
                height:2vh
              }
              
              .bounce {
                -moz-animation: bounce 4s infinite;
                -webkit-animation: bounce 4s infinite;
                animation: bounce 4s infinite;
              }
              
              @keyframes bounce {
               
                80% {
                  transform: translateY(10vh);
                }
                
              }
          `}
    </style>
    <script>

    </script>
    <div style={{ marginLeft: "-10.5%", color: "#3F4244", zIndex: 3, position: "relative" }}>
      <span style={{ position: "absolute", marginTop: "6%", fontSize: "2.5vw", marginLeft: "20%", fontWeight: "bold" }}>God's Word In</span>
      <span style={{ position: "absolute", marginTop: "9.5%", fontSize: "2.5vw", marginLeft: "20%", fontWeight: "bold" }}>Every Language</span>
      <span style={{ position: "absolute", marginTop: "14.5%", fontSize: "2.5vw", marginLeft: "20%", fontWeight: "bold", borderBottom: "#64B145 .09vw solid", width: "8vw" }}></span>
      <span style={{ position: "absolute", marginTop: "17%", fontSize: "1vw", marginLeft: "20%", fontWeight: "bold", color: "#0F1010" }}>Seed Company is at the cutting edge of </span>
      <span style={{ position: "absolute", marginTop: "19%", fontSize: "1vw", marginLeft: "20%", fontWeight: "bold", color: "#0F1010" }}>bringing the Bible to people who have never</span>
      <span style={{ position: "absolute", marginTop: "21%", fontSize: "1vw", marginLeft: "20%", fontWeight: "bold", color: "#0F1010" }}>had a copy in a language they understand.</span>
      <MuiThemeProvider theme={theme}>
        <Button size="medium" variant="outlined" color="primary" style={{ position: "absolute", marginTop: "25%", fontSize: ".85vw", marginLeft: "20%", fontWeight: "bold", fontFamily: "Gotham-Black", color: "#64B145" }}>OUR STORY</Button>
      </MuiThemeProvider>
    </div>
    <table style={{ textAlign: "center", color: "#64B145", marginLeft: "1%",marginTop:"20.2%",position:"absolute",fontWeight:"bold"}}>
      <tbody>
        <tr>
          <td className="rotate">Explore</td>
        </tr>
        <tr className="smaller-gap">
          <td></td>
        </tr>
        <tr>
          <td><i className="fa fa-chevron-down bounce"></i></td>
        </tr>
        <tr className="bigger-gap">
          <td></td>
        </tr>
        {/* <tr>
          <td style={{width:"100px"}}><hr className="rotate" style={{ borderColor: "#64B145",backgroundColor:"#64B145" }} /></td>
        </tr> */}
      </tbody>
    </table>
    {/* <p style={{position:"relative"}}><span style={{display:"block", position:"absolute", color:"#64B145",marginTop:"18%",left:".67%"}} className="explore">Explore</span><i className="explore" style={{position:"absolute",marginLeft:"1.5%", marginTop:"20%",fontSize:"1vw",color:"#64B145"}}className="explore" className="fa fa-chevron-down"></i><hr className="explore" style={{display:"block",position:"absolute",color:"#64B145"}}/></p> */}
    <img className="hero-logo" style={{ windowHeight: "100%", position: "absolute", zIndex: 3, marginLeft: "44%", marginTop: "23%", width: "9vw" }} src={require("../.././assets/images/HeroLogo.png")} alt="Hero logo" />
    <img style={{ width: "100%", windowHeight: "100%", marginTop: "-135px", position: "relative", zIndex: 2, top: "10.55vh" }} src={require("../.././assets/images/HeroImageFull.png")} alt="Hero image" />
  </Fragment>