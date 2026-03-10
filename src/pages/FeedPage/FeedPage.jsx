import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext, useEffect, useMemo, useState } from "react";
import { goToLoginPage } from "../../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../../constants/storage";
import CardPost from "../../components/CardPost";
import RightSidebar from "../../components/RightSidebar"
import React from "react"

import {
  FeedPageContainer,
  FeedLayout,
  MainColumn,
  SidebarColumn,
  PostBox,
  SectionTitle,
  PostsList,
  FeedHero,
  FeedHeroTitle,
  FeedHeroText,
  FeedStatsRow,
  FeedStatCard,
  ComposerHeader,
  ComposerEmoji,
} from "./FeedPageStyled";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const FeedPage = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { posts, fetchPosts } = context;

  const [isLoading, setIsLoading] = useState(false);
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("lablink-token");

    if (!token) {
      goToLoginPage(navigate);
    } else {
      fetchPosts();
    }
  }, []);

  const createPost = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = window.localStorage.getItem("lablink-token");

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const body = {
        content: postContent,
      };

      await axios.post(`${BASE_URL}/posts`, body, config);
      setPostContent("");
      fetchPosts();
    } catch (error) {
      console.error("Error creating post:", error?.response?.data || error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const summary = useMemo(() => {
    const totalLikes = posts.reduce((acc, post) => acc + (post.likes || 0), 0);
    const totalComments = posts.reduce((acc, post) => acc + (post.comments || 0), 0);

    return {
      totalPosts: posts.length,
      totalLikes,
      totalComments,
    };
  }, [posts]);

  return (
    <>
      <Header />

      <FeedPageContainer>
        <FeedLayout>
          <MainColumn>
            <FeedHero>
              <FeedHeroTitle>
                <AutoAwesomeIcon fontSize="small" />
                Welcome to LabLink
              </FeedHeroTitle>

              <FeedHeroText>
                Share ideas, interact with the community and explore recent discussions. ✨
              </FeedHeroText>

              <FeedStatsRow>
                <FeedStatCard>
                  <ForumOutlinedIcon fontSize="small" />
                  <span>{summary.totalPosts} posts</span>
                </FeedStatCard>

                <FeedStatCard>
                  <FavoriteBorderOutlinedIcon fontSize="small" />
                  <span>{summary.totalLikes} likes</span>
                </FeedStatCard>

                <FeedStatCard>
                  <LocalFireDepartmentOutlinedIcon fontSize="small" />
                  <span>{summary.totalComments} comments</span>
                </FeedStatCard>
              </FeedStatsRow>
            </FeedHero>

            <PostBox>
              <ComposerHeader>
                <SectionTitle>Create a post</SectionTitle>
                <ComposerEmoji>💬</ComposerEmoji>
              </ComposerHeader>

              <form onSubmit={createPost}>
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder="What would you like to share today? 🚀"
                />

                <button type="submit" disabled={isLoading || !postContent.trim()}>
                  {isLoading ? "Posting..." : "Post ✨"}
                </button>
              </form>
            </PostBox>

            <div>
              <SectionTitle>Recent Posts 📰</SectionTitle>

              <PostsList>
                {posts.map((post) => (
                  <CardPost key={post.id} post={post} />
                ))}
              </PostsList>
            </div>
          </MainColumn>

          <SidebarColumn>
            <RightSidebar posts={posts} />
          </SidebarColumn>
        </FeedLayout>
      </FeedPageContainer>
    </>
  );
};

export default FeedPage;