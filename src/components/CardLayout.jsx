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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
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
    <div>
      <Navbar
        fetchData={fetchData}
        users={users}
        setUsers={setUsers}
        setIsLoading={setIsLoading}
      />
      <Box sx={{ width: "90%" }} className='mx-auto my-10'>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          {!isLoading
            ? users.map((user) => (
                <Grid xs={12} sm={6} md={4} item>
                  <Card>
                    <CardActionArea>
                      <CardMedia component='img' image={user.avatar} />
                      <CardContent>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {user.id}
                        </Typography>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {user.first_name + " " + user.last_name}
                        </Typography>
                        <Typography gutterBottom> {user.email} </Typography>
                        <Typography
                          variant='body2'
                          color='textSecondary'
                          component='p'
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
  );
};

export default CardLayout;
