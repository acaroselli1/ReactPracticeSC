import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
   
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }   


};

function ButtonAppBar(props) {
    const { classes } = props;
   
    return (
        <Fragment>
                    <AppBar title={<img src="logo.png" style="color:black;"/>} style={{backgroundColor: "white", color:"#3F4244"}}  position="static">
                        <Toolbar>
                            <IconButton style={{marginRight:"10%"}} className={classes.menuButton} color="inherit" aria-label="Menu">
                              <MenuIcon/>
                            </IconButton>
                            <Typography style={{fontFamily:"Gotham-Black",fontSize:"85%",marginRight:"2%"}} variant="title" color="inherit">
                                ABOUT US
                            </Typography>
                            <Typography  style={{fontFamily:"Gotham-Black",fontSize:"85%",marginRight:"2%"}} variant="title" color="inherit">
                                LANGUAGES
                            </Typography>
                            <Typography style={{fontFamily:"Gotham-Black",fontSize:"85%", marginRight:"50%"}} variant="title" color="inherit">
                                CAREERS
                            </Typography>
                            <Button style={{marginLeft:"-7%",fontFamily:"Gotham-Black"}} color="inherit">PRAY</Button>
                            <Button style={{fontFamily:"Gotham-Black"}}color="inherit">DONATE</Button>
                            <Button style={{fontFamily:"Gotham-Black"}}color="inherit">SIGN IN</Button>
                        </Toolbar>
                    </AppBar>
           

        </Fragment>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);