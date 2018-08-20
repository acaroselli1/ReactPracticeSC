import React, { Component } from 'react';
import NavBar from './components/NavBar';
import './App.css';


class App extends Component {
  render() {
    return (
      
      <div style= {{position:"relative",color:"#3F4244"}}>
        <NavBar/>
        <span style={{position:"absolute", marginTop:"6%",fontSize:"2.5vw", marginLeft:"20%", fontWeight:"bold"}}>God's Word In</span>
        <span style={{position:"absolute", marginTop:"10.5%",fontSize:"2.5vw", marginLeft:"20%", fontWeight:"bold"}}>Every Language</span>
        <p style={{position:"relative", top:"14.5vw",border:"#64B145 .08vw solid",marginLeft:"20%",width:"8vw"}}></p>
        <span style={{position:"absolute", marginTop:"17%",fontSize:"1.1vw", marginLeft:"20%", fontWeight:"bold",color:"#0F1010"}}>Seed Company is at the cutting edge of </span>
        <span style={{position:"absolute", marginTop:"19%",fontSize:"1vw", marginLeft:"20%", fontWeight:"bold",color:"#0F1010"}}>bringing the Bible to people who have never</span>
        <span style={{position:"absolute", marginTop:"21%",fontSize:"1vw", marginLeft:"20%", fontWeight:"bold",color:"#0F1010"}}>had a copy in a language they understand.</span>
        
        <img style ={{marginTop:"-2.25%",zIndex:-1,position:"absolute",width:"75%",marginRight:"12.5%",marginLeft:"12.5%",windowHeight:"70%"}} src="https://seedcompany.com/HeroImageFull.e7bbac9732e0e0c9c9c5.png"alt="Hero image"/>
        
        <img style ={{marginTop:"40%",zIndex:-2,position:"absolute",width:"75%",marginRight:"12.5%",marginLeft:"12.5%",backgroundColor:"white"}} src="https://seedcompany.com/grayscale_congregation_desktop_new.422018595821f7e1bd71.png" alt="congregation"/>
        <img style ={{marginTop:"75%",zIndex:-2,position:"absolute",width:"75%",marginRight:"12.5%",marginLeft:"12.5%",windowHeight:"70%"}} src="https://seedcompany.com/mediaimage.301bcc9ea2d8d773eccf.png" alt="worship"/>
        <img style ={{marginTop:"118%",zIndex:-2,position:"absolute",width:"75%",marginRight:"12.5%",marginLeft:"12.5%",windowHeight:"70%"}} src="https://seedcompany.com/Gray-bible-bg.2df4987d919ec7b27be5.png" alt="Bible"/>
        </div>
    );
  }
}

export default App;
