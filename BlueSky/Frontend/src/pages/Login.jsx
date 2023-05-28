import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import Bannernobutton from "../components/Bannernobutton";
import axios from "axios";
import { useNavigate,NavLink } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: "'Roboto Mono', monospace",
  },
});

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    axios
      .post(
        "http://localhost:3306/login",
        {
          email: data.get("email"),
          password: data.get("password"),
        },
        { withCredentials: true }
      )
      .then((response) => {
        const isLogin = response.data.success;
        console.log(response)
        if (isLogin) {
          navigate("/posts");
        } else {
          alert("Error logging in");
        }
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
        <Bannernobutton />

        <h2
          style={{
            flexGrow: 1,
            textAlign: "center",
            fontSize: "25px",
            marginTop: 8,
          }}
        >
          LOGIN
        </h2>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
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
            LOGIN
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/Register" variant="body2" sx={{ color: "gray" }}>
                {"Don't have an account? Sign Up"}
              </Link>
      
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
// import * as React from "react";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import { createTheme } from "@mui/material/styles";
// import Banner from "../components/Banner";
// import axios from "axios";
// import { useNavigate,NavLink } from "react-router-dom";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const theme = createTheme({
//   typography: {
//     fontFamily: "'Roboto Mono', monospace",
//   },
// });

// export default function Login() {
//   const navigate = useNavigate();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     axios
//       .post(
//         "http://localhost:3306/login",
//         {
//           email: data.get("email"),
//           password: data.get("password"),
//         },
//         { withCredentials: true }
//       )
//       .then((response) => {
//         const isLogin = response.data.success;
//         if (isLogin) {
//           navigate("/posts");
//         } else {
//           alert("Error logging in");
//         }
//       });
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Banner />

//         <h2
//           style={{
//             flexGrow: 1,
//             textAlign: "center",
//             fontSize: "25px",
//             marginTop: 8,
//           }}
//         >
//           LOGIN
//         </h2>
//         <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{
//               mt: 3,
//               mb: 2,
//               fontFamily: "'Roboto Mono', monospace",
//               backgroundColor: "rgba(80,90,116, 0.5)",
//             }}
//           >
//             LOGIN
//           </Button>
//           <Grid container>
//             <Grid item>
//               {/* <Link href="#" variant="body2" sx={{ color: "gray" }}>
//                 {"Don't have an account? Sign Up"}
//               </Link> */}
//               <NavLink to='/Signup'>
//               Don't have an account? Sign Up
//               </NavLink>
//             </Grid>
//           </Grid>
//         </Box>
//       </Box>
//       <Copyright sx={{ mt: 8, mb: 4 }} />
//     </>
//   );
// }
