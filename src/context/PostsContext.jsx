import React, { createContext, useCallback, useMemo, useState } from "react"
import { postService } from "../services/postService"

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [postsError, setPostsError] = useState("");

  const fetchPosts = useCallback(async () => {
    setIsLoadingPosts(true);
    setPostsError("");

    try {
      const data = await postService.getPosts();
      setPosts(data);
    } catch (error) {
      console.error(error?.response?.data || error.message);
      setPostsError(
        error?.response?.data?.message || "Erro ao carregar posts."
      );
    } finally {
      setIsLoadingPosts(false);
    }
  }, []);

  const createPost = useCallback(async (body) => {
    try {
      await postService.createPost(body);
      await fetchPosts();
    } catch (error) {
      console.error(error?.response?.data || error.message);
      throw error;
    }
  }, [fetchPosts]);

  const likeOrDislikePost = useCallback(async (postId, like) => {
    try {
      await postService.likeOrDislikePost(postId, like);
      await fetchPosts();
    } catch (error) {
      console.error(error?.response?.data || error.message);
      throw error;
    }
  }, [fetchPosts]);

  const value = useMemo(() => {
    return {
      posts,
      setPosts,
      fetchPosts,
      createPost,
      likeOrDislikePost,
      isLoadingPosts,
      postsError,
    };
  }, [posts, fetchPosts, createPost, likeOrDislikePost, isLoadingPosts, postsError]);

  return (
    <PostsContext.Provider value={value}>
      {children}
    </PostsContext.Provider>
  );
};