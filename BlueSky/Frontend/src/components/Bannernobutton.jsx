import { Box, Typography } from "@mui/material";
import Logo from "../assets/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";

function Bannernobutton() {
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
      </Box>
    </Box>
  );
}

export default Bannernobutton;
