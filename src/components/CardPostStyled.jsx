import styled from "styled-components";

export const CardContainer = styled.article`
  background: #fff;
  border: 1px solid #e8e8e8;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
    border: 1px solid #ff6489 ;
  }

  @media (max-width: 768px) {
    padding: 14px;
    border-radius: 14px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
  
`;

export const Avatar = styled.div`
  width: 42px;
  height: 42px;
  min-width: 42px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6489 0%, #f9b24e 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;

  strong {
    font-size: 14px;
    color: #222;
    word-break: break-word;
  }

  span {
    font-size: 12px;
    color: #777;
  }
`;

export const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  margin: 0 0 16px;
  word-break: break-word;
  

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  font-size: 13px;
  color: #777;
  padding: 10px 0;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
`;

export const ActionRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
  flex-wrap: wrap;
`;

export const ActionButton = styled.button`
  border: 1px solid #ececec;
  background: #fafafa;
  border-radius: 999px;
  padding: 8px 12px;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  color: #333;
  transition: 0.2s ease;

  display: flex;
  align-items: center;
  gap: 6px;

  &:hover:not(:disabled) {
    background: #f3f3f3;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    font-size: 16px;
  }
`;

export const CommentPreview = styled.div`
  margin-top: 14px;
  padding: 12px;
  border-radius: 12px;
  background: #f8f8f8;
  color: #666;
  font-size: 14px;
`