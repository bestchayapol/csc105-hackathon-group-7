import { Box, Typography, Button } from "@mui/material";
import Logo from "../assets/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Box sx={{ backgroundColor: "#B0B8CE", height: 100, width: "100%"}}>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
        <Box
          sx={{
            height: 50,
            width: 50,
            m: 2,
            mr: 50,
            mt: 3,
            cursor: "pointer"
          }}
          component="img"
          src={Logo}
          onClick={() => {
            navigate("/");
          }}
        />
        <Typography
          sx={{
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "'Roboto Mono', monospace",
          }}
        >
          BlueSky
        </Typography>
        <Box
          sx={{ display: "flex", justifyContent: "flex-end", ml: 45, mt: 2 }}
        >
          
              <Button
                onClick={() => {
                  navigate("/Signup");
                }}
                sx={{
                  height: 50,
                  width: 50,
                  mr: 3,
                  color: "white",
                  fontFamily: "'Roboto Mono', monospace",
                  fontSize: "15px",
                }}
              >
                SIGNUP
              </Button>
              <Button
                onClick={() => {
                  navigate("/Login");
                }}
                sx={{ height: 50, width: 50, color: "white", fontFamily: "'Roboto Mono', monospace", fontSize: "15px" }}
              >
                LOGIN
              </Button>
            
          
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;