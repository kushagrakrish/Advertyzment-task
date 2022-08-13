import { AppBar, Button, Toolbar, Typography, Box } from "@mui/material/";
import React, { useState } from "react";

const Navbar = (props) => {
  const { fetchData } = props;
  const [btnClicked, setBtnClicked] = useState(true);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' xs={{ width: "90%" }}>
          <Toolbar>
            <Typography
              variant='h5'
              component='div'
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                marginLeft: "4.5rem",
                color: "#e9e9e9",
              }}
            >
              Advertyzment
            </Typography>
            <Button
              onClick={() => {
                fetchData();
                setBtnClicked(false);
              }}
              variant='contained'
              size='medium'
              style={{
                borderRadius: "6px",
                backgroundColor: "#004488",
                padding: "5px 15px",
                marginRight: "4.5rem",
                color: "#e9e9e9",
                transition: "ease-in-out",
              }}
            >
              Get Users
            </Button>
          </Toolbar>
        </AppBar>
        {btnClicked ? (
          <Typography
            variant='h5'
            component='div'
            sx={{
              fontWeight: "bold",
              color: "#333333",
              textAlign: "center",
              margin: " 2rem auto",
            }}
          >
            Click the button to Fetch data! A card layout will be displayed
          </Typography>
        ) : (
          <Typography
            variant='h5'
            component='div'
            sx={{
              fontWeight: "bold",
              color: "#333333",
              textAlign: "center",
              margin: " 2rem auto",
            }}
          >
            Here is the fetched data!
          </Typography>
        )}
      </Box>
    </div>
  );
};

export default Navbar;
