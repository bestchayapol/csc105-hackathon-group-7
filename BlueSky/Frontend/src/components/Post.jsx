import React, { useEffect, useState } from "react";
import axios from "../axios";
import { useParams } from "react-router-dom";
const Post = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState();

  async function fetchPost() {
    const res = await axios.get(`/getPost/${id}`);
    setPost(res.data);
  }

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.description}</p>
    </div>
  );
};

export default Post;
