import Banner from "../components/Banner";
import { Box, Typography } from "@mui/material";
function Welcome(){
    return(
        <Box>
      <Banner />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#505A74",
          height: "calc(100vh - 100px)",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
       <Box sx={{ width: "70%", textAlign: "center" }}>
        <Typography sx={{ fontSize: 25, color: "white", p: 3 }}>
         
            Feeling blue? Here’s a simple first step. Write. Writing is the
            process of unfurling our thoughts; the good, the bad and the ugly.
          
        </Typography>
        </Box>
      </Box>
    </Box>
    );
}
export default Welcome;