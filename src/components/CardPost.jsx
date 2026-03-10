import { useContext, useState } from "react"
import React from "react"
import axios from "axios"
import { GlobalContext } from "../context/GlobalContext"
import { BASE_URL } from "../constants/storage"
import {
  CardContainer,
  CardHeader,
  Avatar,
  UserInfo,
  Content,
  ActionRow,
  ActionButton,
  MetaRow,
  CommentPreview,
} from "./CardPostStyled";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";

const CardPost = ({ post }) => {
  const { fetchPosts } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    setIsLoading(true);

    try {
      const token = window.localStorage.getItem("lablink-token");

      await axios.put(
        `${BASE_URL}/posts/${post.id}/like`,
        { like: true },
        { headers: { Authorization: token } }
      );

      fetchPosts();
    } catch (error) {
      console.error("Like error:", error?.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDislike = async () => {
    setIsLoading(true);

    try {
      const token = window.localStorage.getItem("lablink-token");

      await axios.put(
        `${BASE_URL}/posts/${post.id}/like`,
        { like: false },
        { headers: { Authorization: token } }
      );

      fetchPosts();
    } catch (error) {
      console.error("Dislike error:", error?.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CardContainer>
      <CardHeader>
        <Avatar>
          {post.creator?.name?.charAt(0)?.toUpperCase() || "U"}
        </Avatar>

        <UserInfo>
          <strong>{post.creator?.name || "User"}</strong>
          <span>Shared with the community</span>
        </UserInfo>
      </CardHeader>

      <Content>{post.content}</Content>

      <MetaRow>
        <span>❤️ {post.likes || 0} likes</span>
        <span>👎 {post.dislikes || 0} dislikes</span>
        <span>💬 {post.comments || 0} comments</span>
      </MetaRow>

      <ActionRow>
        <ActionButton onClick={handleLike} disabled={isLoading}>
          <ThumbUpAltOutlinedIcon />
          {post.likes || 0}
        </ActionButton>

        <ActionButton onClick={handleDislike} disabled={isLoading}>
          <ThumbDownAltOutlinedIcon />
          {post.dislikes || 0}
        </ActionButton>
      </ActionRow>

      {post.comments > 0 && (
        <CommentPreview>View {post.comments} comment(s)</CommentPreview>
      )}
    </CardContainer>
  );
};

export default CardPost;