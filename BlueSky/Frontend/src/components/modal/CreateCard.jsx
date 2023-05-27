import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import axios from "../../axios";

function CreateCard({ onCloseModal, setTitles, titles }) {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleNumberSelection = (number) => {
    setSelectedNumber(number);
  };

  const resetanything = () => {
    setDescription("");
    setTitle("");
    setSelectedNumber(null);
  };

  const createPost = async () => {
    await axios.post("/addPost", {
      title,
      description,
    });
    onCloseModal();
  };

  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Title"
          sx={{ m: 2 }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Write Your Message"
          multiline
          rows={4}
          sx={{ m: 2 }}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormControl component="fieldset" sx={{ m: 2 }}>
          <Typography sx={{ fontWeight: "bold" }}>
            What is your Anonymous Level
          </Typography>
          <FormControlLabel control={<Checkbox />} label="Anonymous" />
        </FormControl>
        <Box sx={{}}>
          <Typography sx={{ fontWeight: "bold", ml: 2 }}>
            What is your sadness level?
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "flex-start", ml: 1, mb: 2 }}
          >
            {[1, 2, 3, 4, 5].map((number) => (
              <Button
                key={number}
                variant={selectedNumber === number ? "contained" : "outlined"}
                sx={{ m: 1 }}
                onClick={() => handleNumberSelection(number)}
              >
                {number}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Button
            disableRipple
            onClick={createPost}
            sx={{
              backgroundColor: "#505A74",
              color: "white",
              ":hover": { backgroundColor: "#505A74" },
              width: "370px",
              height: "50px",
              ml: 2,
              fontSize: "15px",
            }}
          >
            Submit
          </Button>
          <Button
            disableRipple
            onClick={() => resetanything()}
            sx={{
              backgroundColor: "#b8b4b4",
              color: "white",
              ":hover": { backgroundColor: "#b8b4b4" },
              width: "370px",
              height: "50px",
              ml: 2,
              fontSize: "15px",
            }}
          >
            Reset
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default CreateCard;
