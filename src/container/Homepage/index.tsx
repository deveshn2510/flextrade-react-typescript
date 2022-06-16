import { Grid, makeStyles } from "@mui/material";
import React from "react";
import Cards from "../../components/Cards";

const Homepage = (props: any) => {
  const { data, removeUser, likeUser, unlikeUser } = props;
  return (
    <Grid
      container
      alignItems="center"
      spacing={3}
      mt={2}
      width={"80%"}
      justifyContent="center"
      margin={"0 auto"}
    >
      {data.map((el: any) => {
        return (
          <Grid item lg={3} md={4} xs={12} sm={6} key={el.id}>
            <Cards
              {...el}
              removeUser={removeUser}
              likeUser={likeUser}
              unlikeUser={unlikeUser}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Homepage;
