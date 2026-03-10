import styled from "styled-components";
import background from "../../assets/background.png";

export const FeedPageContainer = styled.main`
  min-height: 100vh;
  padding: 24px 16px 40px;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.94),
      rgba(255, 255, 255, 0.94)
    ),
    url(${background});
  background-repeat: repeat;
  background-size: 420px;
`;

export const FeedLayout = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.8fr 0.9fr;
  gap: 24px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SidebarColumn = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FeedHero = styled.section`
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid #ececec;
  border-radius: 18px;
  padding: 22px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
`;

export const FeedHeroTitle = styled.h1`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin: 0 0 8px;
`;

export const FeedHeroText = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 16px;
  line-height: 1.5;
`;

export const FeedStatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const FeedStatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fafafa;
  border: 1px solid #ececec;
  border-radius: 999px;
  padding: 10px 14px;
  font-size: 14px;
  font-weight: 600;
  color: #444;
`;

export const PostBox = styled.section`
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  textarea {
    width: 100%;
    min-height: 140px;
    resize: vertical;
    border: none;
    background: #f3f4f6;
    border-radius: 12px;
    padding: 18px;
    font-size: 15px;
    outline: none;
  }

  button {
    align-self: flex-end;
    padding: 12px 24px;
    min-width: 160px;
    border: none;
    border-radius: 999px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ComposerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const ComposerEmoji = styled.span`
  font-size: 22px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin: 0;
`;

export const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 12px;
`;