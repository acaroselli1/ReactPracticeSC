import React from "react";
import { Grid } from "material-ui";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";



export default props => (
  <Grid container >
    <Grid item xs={1} style={{backgroundColor:"#F9F9F9"}}>
    </Grid>
    <Grid item xs={10} >
      <Section1/>
    </Grid>
    <Grid item xs={1} style={{backgroundColor:"#F9F9F9"}}>
    </Grid>
    
    <Grid item xs={1} style={{backgroundColor:"#F9F9F9", height:"15vh"}}>
    </Grid>
    <Grid item xs={10} style={{backgroundColor:"#F9F9F9",height:"15vh"}} >
    </Grid>
    <Grid item xs={1} style={{backgroundColor:"#F9F9F9",height:"15vh"}}>
    </Grid>


    <Grid item xs={1} style={{backgroundColor:"#F9F9F9"}}>
    </Grid>
    <Grid item xs={10} >
      <Section2/>
    </Grid>
    <Grid item xs={1} style={{backgroundColor:"#F9F9F9"}}>
    </Grid>
     
    <Grid item xs={1} style={{backgroundColor:"#F9F9F9"}}>
    </Grid>
    <Grid item xs={10} >
      <Section3/>
    </Grid>
    <Grid item xs={1} style={{backgroundColor:"#F9F9F9"}}>
    </Grid> 
    
    <Grid item xs={1} style={{backgroundColor:"#F9F9F9"}}>
    </Grid>
    <Grid item xs={10} style={{backgroundColor:"white", marginTop:"10%"}}>
      <Section4/>
    </Grid>
    <Grid item xs={1} style={{backgroundColor:"#F9F9F9"}}>
    </Grid> 
  </Grid>
);
