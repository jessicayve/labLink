import { api } from "./api";

export const postService = {
  getPosts: async () => {
    const response = await api.get("/posts");
    return response.data;
  },

  createPost: async (body) => {
    const response = await api.post("/posts", body);
    return response.data;
  },

  likeOrDislikePost: async (postId, like) => {
    const response = await api.put(`/posts/${postId}/like`, { like });
    return response.data;
  },

  deletePost: async (postId) => {
    const response = await api.delete(`/posts/${postId}`);
    return response.data;
  },
};