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
} from "./CardPostStyled"
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined"
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined"

const CardPost = ({ post }) => {
  const { fetchPosts } = useContext(GlobalContext)
  const [isLoading, setIsLoading] = useState(false)

  const like = async () => {
    setIsLoading(true)

    try {
      const token = window.localStorage.getItem("lablink-token")
      await axios.put(
        `${BASE_URL}/posts/${post.id}/like`,
        { like: true },
        { headers: { Authorization: token } }
      )
      fetchPosts()
    } catch (error) {
      console.error(error?.response?.data)
    } finally {
      setIsLoading(false)
    }
  }

  const dislike = async () => {
    setIsLoading(true)

    try {
      const token = window.localStorage.getItem("lablink-token")
      await axios.put(
        `${BASE_URL}/posts/${post.id}/like`,
        { like: false },
        { headers: { Authorization: token } }
      )
      fetchPosts()
    } catch (error) {
      console.error(error?.response?.data)
    } finally {
      setIsLoading(false)
    }
  }

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
        <ActionButton onClick={like} disabled={isLoading}>
          <ThumbUpAltOutlinedIcon />
          {post.likes}
        </ActionButton>

        <ActionButton onClick={dislike} disabled={isLoading}>
          <ThumbDownAltOutlinedIcon />
          {post.dislikes}
        </ActionButton>
      </ActionRow>

      {post.comments > 0 && (
        <CommentPreview>View {post.comments} comment(s)</CommentPreview>
      )}
    </CardContainer>
  )
}

export default CardPost