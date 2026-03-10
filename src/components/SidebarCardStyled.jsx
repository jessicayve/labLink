import styled from "styled-components";

export const SidebarCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid #ececec;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
`;

export const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 12px;
  font-size: 16px;
  color: #222;
`;

export const Item = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;

export const ItemTitle = styled.p`
  margin: 0 0 4px;
  font-size: 14px;
  font-weight: 700;
  color: #333;
`;

export const ItemText = styled.p`
  margin: 0;
  font-size: 13px;
  color: #777;
  line-height: 1.4;
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Tag = styled.span`
  background: #f5f5f5;
  border: 1px solid #ececec;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 13px;
  color: #555;
  font-weight: 600;
`;