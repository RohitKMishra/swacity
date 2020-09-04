import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import FilterListIcon from "@material-ui/icons/FilterList";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

import styled from "styled-components";
// import Button from "../elements/Button";

// const MainWrapper = styled.section`
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   flex: 1;
// `;

const List = ({ user, index }) => {
  return (
    <Grid
      container
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Typography>{user.name}</Typography>
      <Typography>{user.inCharge}</Typography>
      <Typography>{user.totalAssets}</Typography>
      <Typography>{user.totalAssets}</Typography>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: "wrap",
    height: "100%",
    width: "100",
    backgroundColor: "white",
    marginLeft: "200px",
    marginTop: "40px",
    marginRight: "60px",
  },
  button: {
    margin: theme.spacing(1),
  },
  containerHeader: {
    padding: "20px",
    backgroundColor: "#c0c0c0",
    justifyContent: "space-between",
  },
  text: {
    fontWeight: "bold",
  },
  listItem: {
    justifyContent: "space-between",
  },
}));

export default function User() {
  const classes = useStyles();
  const [userList, setUserList] = useState([
    {
      name: "Medical",
      inCharge: "supervisor",
      totalWorkers: 20,
      totalAssets: 20,
    },
    {
      name: "Agriculture",
      inCharge: "supervisor",
      totalWorkers: 20,
      totalAssets: 20,
    },
    {
      name: "Municipal",
      inCharge: "supervisor",
      totalWorkers: 20,
      totalAssets: 20,
    },
    {
      name: "Police",
      inCharge: "supervisor",
      totalWorkers: 20,
      totalAssets: 20,
    },
    { name: "Post", inCharge: "supervisor", totalWorkers: 20, totalAssets: 20 },
  ]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid
          container
          item
          xs={12}
          style={{ justifyContent: "space-between" }}
        >
          <Button
            variant="outlined"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<FilterListIcon />}
          >
            Filter
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={console.log("Add item")}
          >
            Add New
          </Button>
        </Grid>
        <Grid container item className={classes.containerHeader} xs={12}>
          <Typography variant="body1" className={classes.text} gutterBottom>
            Department Name
          </Typography>
          <Typography variant="body1" className={classes.text} gutterBottom>
            Person In Charge
          </Typography>
          <Typography variant="body1" className={classes.text} gutterBottom>
            Total Workers
          </Typography>
          <Typography variant="body1" className={classes.text} gutterBottom>
            Total Assets
          </Typography>
        </Grid>
        <Grid item container>
          {userList.map((user, index) => (
            <Grid
              container
              item
              style={{
                backgroundColor: "#7AA9DD",
                marginTop: "10px",
              }}
            >
              <List user={user} index={user} key={index} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>

    // <MainWrapper>
    //   <Grid container style={{ justifyContent: "space-between", width: 1400 }}>
    //     <Button icon="refresh">Filter</Button>
    //     <Button>Add New</Button>
    //   </Grid>
    // </MainWrapper>
  );
}
