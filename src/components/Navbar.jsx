import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material/";
import React, { useState } from "react";

const Navbar = (props) => {
  const { fetchData } = props;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' xs={{ width: "90%" }}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Advertyzment
            </Typography>
            <Button
              onClick={fetchData}
              variant='contained'
              size='medium'
              style={{
                borderRadius: "6px",
                backgroundColor: "#004488",
                padding: "10px 20px",
              }}
            >
              Get Users
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
