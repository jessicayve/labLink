import React from "react";
import {
  SidebarCard,
  CardTitle,
  Item,
  ItemTitle,
  ItemText,
  TagList,
  Tag,
} from "./SidebarCardStyled";

import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";

const RightSidebar = ({ posts }) => {
  const topPosts = [...posts]
    .sort((a, b) => (b.likes || 0) - (a.likes || 0))
    .slice(0, 3);

  return (
    <>
      <SidebarCard>
        <CardTitle>
          <WhatshotOutlinedIcon fontSize="small" />
          Trending
        </CardTitle>

        {topPosts.length > 0 ? (
          topPosts.map((post) => (
            <Item key={post.id}>
              <ItemTitle>{post.creator?.creatorName || "User"} 🔥</ItemTitle>
              <ItemText>{post.content?.slice(0, 60)}...</ItemText>
            </Item>
          ))
        ) : (
          <ItemText>No trending posts yet.</ItemText>
        )}
      </SidebarCard>

      <SidebarCard>
        <CardTitle>
          <EmojiObjectsOutlinedIcon fontSize="small" />
          Community Tips
        </CardTitle>

        <Item>
          <ItemTitle>Start a discussion 💡</ItemTitle>
          <ItemText>Share questions, ideas or quick updates with the community.</ItemText>
        </Item>

        <Item>
          <ItemTitle>Engage with posts ❤️</ItemTitle>
          <ItemText>Likes and comments make your feed feel more alive.</ItemText>
        </Item>
      </SidebarCard>

      <SidebarCard>
        <CardTitle>
          <TagOutlinedIcon fontSize="small" />
          Suggested Topics
        </CardTitle>

        <TagList>
          <Tag>#react</Tag>
          <Tag>#frontend</Tag>
          <Tag>#webdev</Tag>
          <Tag>#community</Tag>
        </TagList>
      </SidebarCard>
    </>
  );
};

export default RightSidebar;