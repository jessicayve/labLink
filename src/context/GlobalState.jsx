import { useEffect, useState } from "react";
import React from "react";
import { GlobalContext } from "./GlobalContext";
import { postService } from "../services/postService";

export const GlobalState = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [postsError, setPostsError] = useState("");

  const fetchPosts = async () => {
    try {
      setIsLoadingPosts(true);
      setPostsError("");

      const data = await postService.getPosts();

      setPosts(data);
    } catch (error) {
      const apiMessage =
        error?.response?.data?.message ||
        error?.response?.data ||
        "Erro ao carregar posts.";

      setPostsError(apiMessage);
      console.error("Erro ao buscar posts:", error);
    } finally {
      setIsLoadingPosts(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const contextValue = {
    posts,
    setPosts,
    fetchPosts,
    isLoadingPosts,
    postsError,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};