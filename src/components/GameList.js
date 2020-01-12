  import React from 'react';
   import { Dialog, DialogContent, Grid, Typography, DialogTitle, Button } from '@material-ui/core';


  function GameList(props) {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const { data } = props;


   

    function formatTime(string){
        return new Date(string).toLocaleTimeString([]);
    }

     function handleClose(e) {
        e.stopPropagation();
        props.close();
    }

    function formatDate(string){
        var options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(string).toLocaleDateString([],options);
    }
    
    

    return (

         <Dialog open={props.open} onClose={handleClose}>
              <DialogTitle style={{textAlign: "center"}}>
                  <Typography variant="h4" style={{color: "#F86E1D"}}>
                       Game Description<br /> 
                     <Typography variant="subheading" style={{color: "#000000", fontSize: "18px"}}>
                        <p><b>{formatDate(data.date)} ({formatTime(data.date)} ET) </b></p>
                    </Typography>

                </Typography>
            </DialogTitle>
            
            <DialogContent style={{margin: "0 auto", padding: "20px 150px 20px 150px"}} contentStyle={{width: "100%", maxWidth: "none"}}>
                <Grid container justify="center" spacing="100">
                    <Grid item lg={6} md={6} xs={12} style={{marginLeft: "-20px"}}>

                        <Typography variant="h5">
                            <p><b>Home Team</b></p>
                        </Typography>

                        <p>{data.home_team.full_name} ({data.home_team.abbreviation})</p>
                        <p><b>City</b>: {data.home_team.city}</p>
                        <p><b>Conference</b>: {data.home_team.conference}</p>
                        <p><b>Division</b>: {data.home_team.division}</p>
                        <p><b>Home Team Score</b>: {data.home_team_score}</p>
                    </Grid>


                    <Grid item lg={6} md={6} xs={12}>

                        <Typography variant="h5">
                            <p><b> Visitor Team</b></p>
                        </Typography>

                        <p>{data.visitor_team.full_name} ({data.visitor_team.abbreviation})</p>
                        <p><b>City</b>: {data.visitor_team.city}</p>
                        <p><b>Conference</b>: {data.visitor_team.conference}</p>
                        <p><b>Division</b>: {data.visitor_team.division}</p>
                        <p><b>Visitor Team Score</b>: {data.visitor_team_score}</p>
                    </Grid>

                </Grid>

                <Grid container justify="center">
                    <Button size="large" style={{ background: "#60cb5c", color: "white" }} onClick={handleClose}>Close</Button>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}

export default GameList;