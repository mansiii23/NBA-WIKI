import React, { useState } from 'react';
import Team from "./components/Team";
import Game from "./components/Game";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography, Toolbar, Grid, withStyles, Tabs, Tab, Paper } from '@material-ui/core';


const style = {
    heading: {
      width: "100%",
      marginTop: "65px",
      textAlign: "center",
      fontWeight: "500",
      color: "#F86E1D"
    },

    tab: {
      background: "#F86E1D",
      color: "#FFFFFF"
    }
};

function Main(props) {
  const { classes } = props;
  const [selectedTab, setselectedTab] = useState(0);
  
  function changeTab(e, values) {
    setselectedTab(values);
  }

  return (
    <div className="Main">
      <Toolbar>
        <Grid container justify="center" className={classes.heading}>
          <Typography variant="h4">
            NBA REPO
          </Typography>
        </Grid>
      </Toolbar>

      <Grid container justify="center" style={{marginTop: "85px"}}>
        <Grid item xs={12} lg={9} md={10}>
          <Paper>
            <Tabs value={selectedTab} onChange={changeTab} variant="fullWidth">
              <Tab label="NBA Teams" classes={{ selected: classes.tab }} style={{fontWeight:"500", boxShadow: "0 2px 2px #ccc", border: "1px solid #eee"}} />
              <Tab label="NBA Games" classes={{ selected: classes.tab }} style={{fontWeight:"500", boxShadow: "0 2px 2px #ccc", border: "1px solid #eee"}} />
            </Tabs>
          </Paper>

          <Grid container justify="center" style={{marginTop: "25px", boxShadow: "0 2px 2px #ccc", border: "1px solid #eee"}}>
            <Grid item xs={12} lg={9} md={10}>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={9} md={10}>
          {
            selectedTab == 0 ? <Team></Team> : <Game></Game>
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(style)(Main);
