import { Box, Button, Typography } from "@mui/material";
import Banner from "../components/Banner";
import axios from "../axios";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import EditCard from "../components/modal/EditCard";
import Bannerlogout from "../components/Bannerlogout";

function PostcardContent() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  async function fetchPost() {
    const res = await axios.get(`/getPosts/${id}`);
    setPost(res.data);
  }

  async function DelPost() {
    await axios.delete(`/deletePost/${id}`).then((response) => {
      if (response.data.success) {
        navigate('/posts');
      } else {
        alert('delete post error')
      }
    });
  }

  function EditPost() {
    setIsOpen(true);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Box>
      <Bannerlogout />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" fontSize={24}>
          {post?.title}
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
            m: 3,
            flexDirection: "column",
          }}
        >
          {post?.description}
          <Box
            sx={{
              display: "flex",
              position: "relative",
              top: "200px",
              left: "410px",
            }}
          >
            <Button onClick={EditPost}>Edit</Button>
            <Button onClick={DelPost}>Delete</Button>
          </Box>
        </Box>
      </Box>

      {isOpen && (
        <Box
          sx={{
            display: "flex",
            gap: "20px",
            width: "100%",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <EditCard
            onCloseModal={() => setIsOpen(false)}
            setPost={setPost}
          ></EditCard>
        </Box>
      )}
    </Box>
  );
}

export default PostcardContent;
