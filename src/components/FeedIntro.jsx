import React from "react"
import styled from "styled-components";

const IntroCard = styled.section`
  background: linear-gradient(135deg, #fff7fb 0%, #fffaf2 100%);
  border: 1px solid #f0e4dc;
  border-radius: 16px;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0 0 8px;
  font-size: 24px;
  color: #222;
`;

const Subtitle = styled.p`
  margin: 0 0 16px;
  color: #666;
  font-size: 14px;
`;

const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const StatBadge = styled.div`
  padding: 10px 14px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid #ececec;
  font-size: 14px;
  font-weight: 600;
`;

const FeedIntro = ({ totalPosts, totalLikes, totalComments }) => {
  return (
    <IntroCard>
      <Title>Recent Posts</Title>
      <Subtitle>
        Follow the latest discussions and interactions from the community.
      </Subtitle>

      <StatsRow>
        <StatBadge>{totalPosts} posts</StatBadge>
        <StatBadge>{totalLikes} likes</StatBadge>
        <StatBadge>{totalComments} comments</StatBadge>
      </StatsRow>
    </IntroCard>
  );
};

export default FeedIntro;