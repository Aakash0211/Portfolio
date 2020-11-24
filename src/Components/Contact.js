import React from 'react'
import { CardContent,Card,Avatar, CardHeader, makeStyles,Typography, Grid, Divider } from '@material-ui/core'
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Aakash6 from './Aakash6.jpeg'
const styles=makeStyles({
 avatar:{
  width:'110px',
  height:'110px',
 },
 card:{
  paddingTop:"35px",
  width:'840px',
  margin:"auto",
  marginTop:"135px",
  height:'480px',
  backgroundColor:"lightBlue"
 },
 item:{
   paddingLeft:'10px'
 },
 grd:{
  paddingBottom:'20px'
 },
 title:{
   paddingLeft:"20px",
   fontFamily: "Dekko",
   fontSize:'38px'
 },
 ab:{
   fontSize:"18px"
 }
})
function Contact() {
    const  classes=styles()
    return (
        <>
        <Card  className={classes.card}>
       <Grid container spacing={1}>
         <Grid item container xs={3} justify="center" >
       <Avatar className={classes.avatar} src={Aakash6} />
       </Grid> 
       </Grid>
       <Grid container spacing={1}>
       <Grid item container xs={7} md={7} justify="centre" >
      <Typography  className={classes.title} variant="h6">Thokala.Aakash <p className={classes.ab}>"Hi,I am Thokala Aakash ,Currently pursuing bachelor of technology in electronics and communication at IIT(ISM) Dhanbad. You can contact me either from the mentioned<br/> contact details.I am a full stack(Mern)developer.I develop websites using Mern stack. I am workaholic and complete <br/>my projects within given time.I am good at video editing , <br/>making websites"</p></Typography>
      </Grid> 
        <Grid item container md={5} xs={5} spacing={5}>   
            <Grid item md={12} container  justify="flex-start">
               <EmailTwoToneIcon  fontSize="medium" color="white"/>
                <a href="mailto:akashkushi111@gmail.com">akashkushi111@gmail.com</a>
               </Grid>
               <Grid item md={12} container justify="flex-start">
                  <InstagramIcon  fontSize="medium" color="secondary"/><Typography variant="subtitle1">@Aakash11</Typography>
               </Grid>
              
               <Grid item xs={12} container justify="flex-start">
                <FacebookIcon fontSize="medium" color="primary"/> <Typography variant="subtitle1">Aakash kushi</Typography>
               </Grid>
              
               <Grid item md={12} container justify="flex-start">
                  <LinkedInIcon  fontSize="medium" color="primary"/> <Typography variant="subtitle1">Aakash Thokala</Typography>
               </Grid>
               <Divider/>
               
               <Grid item md={12} container justify="flex-start">
                  <PhoneAndroidIcon fontSize="medium" color="primary"/><Typography variant="subtitle1">9381430211</Typography>
               </Grid>
             </Grid>
             </Grid>
        </Card>
            
        </>
    )
}

export default Contact

