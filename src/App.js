import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';
import './App.css';
import PageOne from "./components/PageOne";
import { Grid } from "material-ui";
import Button from '@material-ui/core/Button';
import green from '@material-ui/core/colors/green';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';

var show = true;

class App extends Component {
    

  render() {

  
    return (
      
      <Fragment>
        <style>
          {`
              .link:hover{
                border-bottom:.15em solid black;
              }

          `}
        </style>
        {/* <NavBar /> */}
       <Fragment>
          <Grid container xs={12} style={{ height: "10%", position: "fixed", zIndex: 3 }}>
            <Grid item xs={2}>
             <p style={{textAlign:"center",marginLeft:"20%"}}>
               <img src={require("./assets/images/logo.png")} />
             </p>
            </Grid>
            <Grid item xs={2}>
             <p style={{display:"flex", flexDirection:"row", fontSize:"80%",marginTop:"8%"}}>
               <span className="link" style={{display:"flex", marginRight:"7%", paddingBottom:"1.5%"}}>ABOUT US</span>
               <span className="link" style={{display:"flex", marginRight:"7%", paddingBottom:"1.5%"}}>LANGUAGES</span>
               <span className="link" style={{display:"flex", marginRight:"7%", paddingBottom:"1.5%"}}>CAREERS</span>
             </p>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={3}>
            <p style={{display:"flex", justifyContent:"space-between",alignItems:"center", marginTop:"4%",marginRight:"50%"}}>
            <Button variant="outlined" size="small" style={{fontSize: ".85vw", fontWeight: "bold", fontFamily: "Gotham-Black", fontSize:"75%"}}>PRAY</Button>
            <Button variant="outlined" size="small" style={{fontSize: ".85vw", fontWeight: "bold", fontFamily: "Gotham-Black", fontSize:"75%",color:"black" }}>DONATE</Button>
            <span style={{fontSize:".6vw"}}>SIGN IN</span>
            </p>
            </Grid>
          </Grid>
        </Fragment>
        <PageOne />
      </Fragment>
    );
  }
}

export default App;
