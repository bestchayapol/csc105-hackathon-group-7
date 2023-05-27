import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import Banner from "../components/Banner";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newData = {
      email: data.get("email"),
      password: data.get("password"),
      username: data.get('username'),
    };

    axios
      .post("http://localhost:3306/register", newData)
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
        // Perform any necessary actions after successful data insertion
        // For example, redirect to a new page or show a success message
      })
      .catch((error) => {
        // Handle any errors that occurred during the POST request
        console.error(error);
      });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Banner />
        <h2
          style={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: "25px",
            marginTop: 8,
          }}
        >
          SIGN UP
        </h2>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
            margin="normal"
            required
            fullWidth
            name="username"
            label="Create username"
            type="text"
            id="username"
            autoComplete="username"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Create Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />

          <Button
          onClick={() => {
            navigate("/Home")
          }}
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              fontFamily: "'Roboto Mono', monospace",
              backgroundColor: "rgba(80,90,116, 0.5)",
            }}
          >
            SIGN UP
          </Button>
          <Grid container>
            <Grid item>
              <NavLink to="/Login">
                Already a user? LOGIN
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Signup;

/**
 * TODO:
 * 1. add onClick to 'Sign up' Button
 * 2. add data to database with axios
 * 3. wait for response from database
 * 4. if sign up succeed go to home page with useNavigate()
 * 5. if not, alert('Sign up error')
 */
