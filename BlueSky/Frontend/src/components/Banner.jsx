import {Box,} from "@mui/material";
function Banner(){
    return(
        <Box
         sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: {
            xs: "center",
            sm: "center",
            lg: "flex-end",
            xl: "flex-end",
          },
        }}
        >

        </Box>
    )
}
export default Banner;