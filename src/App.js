import React from 'react'
import './App.css';
import Nav from './Components/Nav.js'
import {BrowserRouter as Router,Route} from "react-router-dom"
import {Card,Avatar,Box, CardHeader, CardContent, makeStyles, Typography} from '@material-ui/core'
import Contact from './Components/Contact.js'
import Projects from './Components/Projects.js'
import Aakash2 from './Aakash2.jpeg'
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const useStyles=makeStyles({
 largeStyle:{
  width:'100px',
  height:'100px'
 },
 card:{
  maxWidth:'1300px',
  Height:'1400px',
  marginTop:"60px",
  marginLeft:'100px',
  marginRight:"100px"
 },
 title:{
  fontWeight:"bold",
  fontFamily: "Dekko",
  fontSize:"38px"
 },
 subheader:{
  fontFamily: "Dekko"
 }
})
const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};
function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}
IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};


function App() {
  
  const Home=()=>{ 
    const classes=useStyles()
   return(
  
    <Card className={classes.card}>
    <CardHeader
      avatar={ <Avatar className={classes.largeStyle} src={Aakash2} />}
      disableTypography='true'
      title={<Typography  className={classes.title}variant="h5">THOKALA AAKASH</Typography>}
      subheader="Hi,I am Thokala Aakash ,Currently pursuing bachelor of technology in electronics and communication at IIT(ISM) Dhanbad"
    />
    <CardContent>
      <h1 className="hd">Welcome to the official website of Thokala Aakash</h1>
      <h3 className="hd">What do i do? and what's in it for you?</h3>
      <p>My goal is to make you websites so you can develop your bussiness digitally.I will make websites based on your purpose.I believe you must bring your whole self to the table if you want to thrive in today’s crazy world.<br/>To be successful and grow your business and revenues, you must match your website to the market your products with the way your prospects learn about and shop for your products.My work is to develop the website according to your requirements in a good standards.</p>
      <hr/>
      <h3 className="hd">This is my website  Which is developed by me to display about me </h3>
      <p> The main motive of this website is to know about me.
      There is nothing so useless as doing efficiently that which should not be done at all.I have done handfull of projects in web development.I am a Mern stack developer.I develop websites. </p>
       <h3 className="hd"> Thanks for visiting my website </h3>
    </CardContent>
    <Box component="fieldset" mb={3}  borderColor="transparent">
        <Typography component="legend" variant="title">How was the website</Typography>
        <Rating
          name="customized-icons"
          defaultValue={2}
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
        />
      </Box>
    </Card>
   
   );
  }
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route path="/" exact component={Home}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/projects" exact component={Projects}/>
      </Router>
      
    </div>
  );
}

export default App;
