import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "../axios";
import { createTheme } from "@mui/material/styles";
import Bannernobutton from "../components/Bannernobutton";
import { useState } from "react";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto Mono', monospace",
  },
});

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("/register", { email, password, username: "" });
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
          <Bannernobutton />

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
            value={email}
            id="email"
            label="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            value={password}
            name="password"
            label="Create Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            autoComplete="new-password"
          />

          <Button
          // onClick={() => {
          //   navigate("/Home")
          // }}
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              fontFamily: "'Roboto Mono', monospace",
              backgroundColor: "rgba(80,90,116, 0.5)",
            }}
            onClick={handleSubmit}
          >
            SIGN UP
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/Login" variant="body2" sx={{ color: "gray" }}>
                {"Already a user? LOGIN"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}


/**
 * TODO:
 * 1. add onClick to 'Sign up' Button
 * 2. add data to database with axios
 * 3. wait for response from database
 * 4. if sign up succeed go to home page with useNavigate()
 * 5. if not, alert('Sign up error')
 */
