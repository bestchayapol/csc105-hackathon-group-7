import { Box, Typography } from "@mui/material";
import Bannerlogout from "../components/Bannerlogout";
function PostcardContent(){
    return(
        <Box>
          <Bannerlogout />
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <Typography variant="h1">
            Title
        </Typography>
         <Box
          sx={{
            display: "flex",
            height: 500,
            width: 1000,
            backgroundColor: "#DFCCAF",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "raleway",
           m:3
          }}
        >
        Title
        </Box>
        </Box>
   
        </Box>
    )
}
export default PostcardContent;