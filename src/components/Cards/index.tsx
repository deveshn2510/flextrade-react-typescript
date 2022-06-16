import { Divider, Grid, Icon, Typography } from "@mui/material";
import React from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Cards = (props: any) => {
  const { removeUser, likeUser, unlikeUser } = props;
  return (
    <Grid
      container
      direction="column"
      sx={{ border: `1px solid lightgrey`, borderRadius: "5px" }}
    >
      <Grid item>
        <img
          style={{ height: 170 }}
          src={`https://avatars.dicebear.com/v2/avataaars/${props.name}.svg`}
        />
      </Grid>
      <Grid item>
        <>
          <Grid container direction="column" m={2}>
            <Grid item>
              <Typography sx={{ textAlign: "left" }}>{props.name}</Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ textAlign: "left", color: "#808080" }}>
                <MailOutlineIcon sx={{ height: "15px" }} />
                {props.email}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ textAlign: "left", color: "#808080" }}>
                <LocalPhoneIcon sx={{ height: "15px" }} />
                {props.phone}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ textAlign: "left", color: "#808080" }}>
                <AddLocationAltIcon sx={{ height: "15px" }} />
                {props.website}
              </Typography>
            </Grid>
          </Grid>
        </>
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item>
        <>
          <Grid container padding={2} justifyContent="space-around">
            <Grid
              item
              onClick={() => {
                if (props.liked === true) {
                  unlikeUser(props);
                } else {
                  likeUser(props);
                }
              }}
            >
              {props.liked === true ? (
                <FavoriteIcon sx={{ height: "30px", color: "red" }} />
              ) : (
                <FavoriteBorderIcon sx={{ height: "30px" }} />
              )}
            </Grid>
            <Grid item>
              <EditIcon sx={{ height: "30px" }} />
            </Grid>
            <Grid
              item
              onClick={() => {
                removeUser(props);
              }}
            >
              <DeleteIcon sx={{ height: "30px" }} />
            </Grid>
          </Grid>
        </>
      </Grid>
    </Grid>
  );
};

export default Cards;
