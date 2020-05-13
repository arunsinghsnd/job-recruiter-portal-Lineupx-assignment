import React from 'react';
import { Card, CardContent, Typography, Grid, Button,IconButton,Badge } from '@material-ui/core';
import styles from './Cards.module.css';
import { ImageTwoToneIcon ,CardMembershipIcon,CardTravelIcon, DateRangeIcon ,PersonIcon, AttachMoneyIcon} from '@material-ui/icons';

import './Cards.module.css';


const CardsSec = () =>{
	return(
	<div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} >
          <CardContent>
            <Typography color="primary"  gutterBottom>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <ImageTwoToneIcon   fontSize="large"/>
              </Badge>
            </IconButton><br/><b>Data Science</b><br/>
            Company Name, Department <br/> Location<hr/>
           <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <CardMembershipIcon   fontSize="large"/>12,3456
              </Badge>
               <Badge  color="secondary" >
                <CardTravelIcon   fontSize="large"/>1-7 yrs
              </Badge>
            </IconButton>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <DateRangeIcon  fontSize="large"/>Full time
              </Badge>
            </IconButton>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <PersonIcon  fontSize="large"/>3 Candidates
              </Badge>
              <Badge  color="secondary" >
                <AttachMoneyIcon  fontSize="large"/>20-25 lakhs
              </Badge>
            </IconButton>
            </Typography>
            <Typography variant="button" component="h2" color="primary">
             <Button className="style.Button" variant="contained">Accept</Button>

             <Button variant="contained">Reject</Button>
            </Typography>
          </CardContent>
        </Grid>
        

        <Grid item xs={12} md={3} component={Card} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <ImageTwoToneIcon   fontSize="large"/>
              </Badge>
            </IconButton><br/><b>Job Title</b><br/>
            Company Name, Department <br/> Location<hr/>
           <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <CardMembershipIcon   fontSize="large"/>12,3456
              </Badge>
               <Badge  color="secondary" >
                <CardTravelIcon   fontSize="large"/>1-7 yrs
              </Badge>
            </IconButton>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <DateRangeIcon  fontSize="large"/>Full time
              </Badge>
            </IconButton>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <PersonIcon  fontSize="large"/>3 Candidates
              </Badge>
              <Badge  color="secondary" >
                <AttachMoneyIcon  fontSize="large"/>20-25 lakhs
              </Badge>
            </IconButton>
            </Typography>
            <Typography variant="button" component="h2">
             <Button className="style.Button" variant="contained">Accept</Button>

             <Button variant="contained">Reject</Button>
            </Typography>
          </CardContent>
        </Grid>



        <Grid item xs={12} md={3} component={Card} >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <ImageTwoToneIcon   fontSize="large"/>
              </Badge>
            </IconButton><br/><b>Job Title</b><br/>
            Company Name, Department <br/> Location<hr/>
           <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <CardMembershipIcon   fontSize="large"/>12,3456
              </Badge>
               <Badge  color="secondary" >
                <CardTravelIcon   fontSize="large"/>1-7 yrs
              </Badge>
            </IconButton>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <DateRangeIcon  fontSize="large"/>Full time
              </Badge>
            </IconButton>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <PersonIcon  fontSize="large"/>3 Candidates
              </Badge>
              <Badge  color="secondary" >
                <AttachMoneyIcon  fontSize="large"/>20-25 lakhs
              </Badge>
            </IconButton>
            </Typography>
            <Typography variant="button" component="h2">
             <Button className="style.Button" variant="contained">Accept</Button>

             <Button variant="contained">Reject</Button>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>








    </div>
	)
}

export default CardsSec;