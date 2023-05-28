import { Box, Typography, Button } from "@mui/material";
import Logo from "../assets/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../axios";

function Bannerlogout() {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = async () => {
    const out = await axios.post("/logout");
    navigate("/")
  };
  return (
    <Box sx={{ backgroundColor: "#B0B8CE", height: 100, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: 50,
            width: 50,
            m: 2,
            mr: 50,
            mt: 3,
            cursor: "pointer",
          }}
          component="img"
          src={Logo}
          onClick={() => {
            navigate("/Home");
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
            onClick={logout}
            sx={{
              height: 50,
              width: 50,
              color: "white",
              fontFamily: "'Roboto Mono', monospace",
              fontSize: "15px",
            }}
          >
            LOGOUT
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Bannerlogout;
