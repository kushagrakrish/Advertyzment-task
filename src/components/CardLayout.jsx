import axios from "axios";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
} from "@mui/material";

const CardLayout = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios("https://reqres.in/api/users?page=1");
      console.log(response.data.data);
      setUsers(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar fetchData={fetchData} />
      <div>
        <Box sx={{ width: "90%" }} className='mx-auto my-10 '>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 2, sm: 2, md: 3 }}
          >
            {!isLoading
              ? users.map((user) => (
                  <Grid xs={12} sm={6} md={4} item>
                    <Card
                      style={{
                        backgroundColor: "#e9e9e9a7",
                      }}
                    >
                      <CardActionArea>
                        <CardMedia
                          component='img'
                          image={user.avatar}
                          style={{ padding: "1.1rem", borderRadius: "10px" }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant='h6' component='h2'>
                            {user.id}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant='h6'
                            component='h2'
                            style={{ fontWeight: "bold", color: "#363636" }}
                          >
                            <span className='font-medium'>Name: </span>
                            {user.first_name + " " + user.last_name}
                          </Typography>
                          <Typography
                            variant='h6'
                            gutterBottom
                            style={{ fontWeight: "bold", color: "#363636" }}
                          >
                            <span className='font-medium'>E-mail: </span>
                            {user.email}
                          </Typography>
                          <Typography
                            variant='body2'
                            color='textSecondary'
                            component='p'
                            style={{ color: "#363636" }}
                          >
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))
              : isLoading && (
                  <div className='w-screen h-screen my-auto flex justify-center items-center'>
                    <CircularProgress />
                  </div>
                )}
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default CardLayout;
