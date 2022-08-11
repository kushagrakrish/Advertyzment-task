import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material/";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              Advertyzment
            </Typography>
            <Button
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
