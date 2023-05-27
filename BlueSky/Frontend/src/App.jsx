import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostcardContent from "./pages/PostcardContent";
import Post from "./components/Post";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Signup />} />
        <Route
          exact
          path="/PostcardContent/:PostcardID"
          element={<PostcardContent />}
        />
        <Route exact path="/posts" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/**
 *
 * TODO:
 * Integration
 * - signup
 * - login
 * - logout
 * - create post
 * - delete post
 * - edit post
 * - get posts
 */
