import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import React,{ Components} from 'react';
import './Hero.css';

class Hero extends React.Component{
render(){
  return(<>
   <div>         
    <img src={"../assests/img/hero-section-img.png"}/>
    <Typography variant="h3"
     colour="Danger"
     margin="50px"
    gutterBottom>Get Great Meals at Greater Prices</Typography>

     <p>We don’t believe that to have a great meal you need to spend a fortune.
      Get your favorite restaurant dishes at greater prices with no delivery charges ever.</p>
      <label htmlFor="contained-button-file">
       <Button variant="contained" color="primary" component="span">
         Get Started</Button>
      </label>
       
      
   </div>

</>
  );
}

}
export default Hero;