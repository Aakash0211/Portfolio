import React from 'react'
import {AppBar,Toolbar,Typography, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
const useStyles=makeStyles({
   link:{
    flexGrow:1,
    fontWeight:"bold",
    paddingLeft:"80px",
    color:"white",
    fontSize:"32px",
    fontFamily: "Dekko"
   } ,
   links:{
    display:"flex",
    justifyContent:"flex-end",
    paddingLeft:"485px",
    color:"white",
    fontFamily: "Dekko"
   }
})
const Nav = () => {
    const classes=useStyles()
        return (
        <>
          <AppBar className="Nav" >
              <Toolbar>
              <Link to="/" style={{textDecoration:"none"}}><Typography className={classes.link} variant='h4' >
              Thokala Aakash
            </Typography></Link>
            <Link style={{textDecoration:"none"}} to="/Projects"><Typography className={classes.links} variant='h6' >
              Projects
            </Typography></Link>
            
            <Link style={{textDecoration:"none"}} to="/Contact"><Typography className={classes.links} variant='h6' >
              Contact
            </Typography></Link>
              </Toolbar>               
          </AppBar>  
        </>
    )
}

export default Nav
