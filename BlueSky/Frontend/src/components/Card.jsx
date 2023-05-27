import { Box, Grid } from "@mui/material";

function Card(props) {
  return (
    <Box>
      {/* <Box
        sx={{
          display: "flex",
          gap: "20px",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      > */}

        <Box
          sx={{
            display: "flex",
            height: 200,
            width: 200,
            backgroundColor: "#DFCCAF",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "raleway",
           m:3
          }}
        >
          {props.title}
        </Box>
  
    </Box>
  );
}
export default Card;
