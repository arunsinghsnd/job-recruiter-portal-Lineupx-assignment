import React from 'react';
import { Card, CardContent, 
Typography, Grid,
IconButton,Badge,
Button } from '@material-ui/core';// this is imported material ui elements and components 
import styles from './Cards.module.css';

import ImageTwoToneIcon from '@material-ui/icons/ImageTwoTone';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import DateRangeIcon from '@material-ui/icons/DateRange';
import PersonIcon from '@material-ui/icons/Person';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import cx from 'classnames'; // it generates the class names
import './Cards.module.css';


const Cards = () =>{
	return(
	<div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,)} >
          <CardContent>
            <Typography color="primary" gutterBottom className={cx(styles.fontSize,)}>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <ImageTwoToneIcon   fontSize="large"/>
              </Badge>
            </IconButton><br/><b>Full Stack Web Developemnt,</b><br/>
             LineUPx , Developement, <br/> Mumbai<hr/>

           <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" className={cx(styles.menber,)}>
                <CardMembershipIcon   fontSize="large"/>12,3456
              </Badge>
            </IconButton>
             <IconButton aria-label="" color="inherit">
               <Badge  color="secondary" >
                <CardTravelIcon   fontSize="large"/>0-1 yrs
              </Badge>
               </IconButton>
            <br/>

            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <DateRangeIcon  fontSize="large"/>Full time
              </Badge>
            </IconButton>
            <br/>

            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" className={cx(styles.menber,)} >
                <PersonIcon  fontSize="large"/>10 Candidates
              </Badge>
              </IconButton>
              <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <AttachMoneyIcon  fontSize="large"/>5-9 lakhs 
              </Badge>
            </IconButton>


            </Typography>
            <Typography variant="button" component="h2">
             <Button variant="contained" className={cx(styles.Button,)}>Accept</Button>

             <Button variant="contained">Reject</Button>
            </Typography>
          </CardContent>
        </Grid>
        

        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,)}>
          <CardContent>
            <Typography color="primary" gutterBottom>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <ImageTwoToneIcon   fontSize="large"/>
              </Badge>
            </IconButton><br/><b>Front End React Developer</b><br/>
            LineUPx, Developement, <br/>Mumbai<hr/>


           <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" className={cx(styles.menber,)}>
                <CardMembershipIcon   fontSize="large"/>12,345
              </Badge>
            </IconButton>
             <IconButton aria-label="" color="inherit">
               <Badge  color="secondary" >
                <CardTravelIcon   fontSize="large"/>1-5 yrs
              </Badge>
               </IconButton>
            <br/>

            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <DateRangeIcon  fontSize="large"/>Full time
              </Badge>
            </IconButton>
            <br/>

            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" className={cx(styles.menber,)} >
                <PersonIcon  fontSize="large"/>2 Candidates
              </Badge>
              </IconButton>
              <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <AttachMoneyIcon  fontSize="large"/>4-5 lakhs 
              </Badge>
            </IconButton>

            </Typography>
            <Typography variant="button" component="h2">
             <Button variant="contained" className={cx(styles.Button,)}>Accept</Button>

             <Button variant="contained">Reject</Button>
            </Typography>
          </CardContent>
        </Grid>



        <Grid item xs={12} md={3} component={Card} className={cx(styles.card,)}>
          <CardContent>
            <Typography color="primary" gutterBottom>
            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <ImageTwoToneIcon   fontSize="large"/>
              </Badge>
            </IconButton><br/><b>Back End NodeJs Developer</b><br/>
            LineUPx, Developement <br/> Mumbai<hr/>



           <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" className={cx(styles.menber,)}>
                <CardMembershipIcon   fontSize="large"/>12,3456
              </Badge>
            </IconButton>
             <IconButton aria-label="" color="inherit">
               <Badge  color="secondary" >
                <CardTravelIcon   fontSize="large"/>1-3 yrs
              </Badge>
               </IconButton>
            <br/>

            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <DateRangeIcon  fontSize="large"/>Full time
              </Badge>
            </IconButton>
            <br/>

            <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" className={cx(styles.menber,)} >
                <PersonIcon  fontSize="large"/>3 Candidates
              </Badge>
              </IconButton>
              <IconButton aria-label="" color="inherit">
              <Badge  color="secondary" >
                <AttachMoneyIcon  fontSize="large"/>10-12 lakhs 
              </Badge>
            </IconButton>

            </Typography>
            <Typography variant="button" component="h2">
             <Button  variant="contained" className={cx(styles.Button,)}>Accept</Button>

             <Button variant="contained">Reject</Button>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
	)
}

export default Cards;
