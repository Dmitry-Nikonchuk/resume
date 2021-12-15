import styled from 'styled-components';
import avatar from 'images/face.png';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 40px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  ${({ horizontalCenter }) => horizontalCenter && 'align-items: center'};
  ${({ verticalCenter }) => verticalCenter && 'justify-content: center'};
  ${({ bordered, theme }) => bordered && `border-bottom: 2px solid ${theme.colors.text}`};
  ${({ borderedRight, theme }) => borderedRight && `border-right: 2px solid ${theme.colors.text}`};
  flex: ${({ left }) => left ? 0.3 : 1};
  padding: 20px;
`;

export const Avatar = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: url(${avatar}) center center no-repeat;
  background-size: cover;
`;

export const Name = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.main};
`;

export const Position = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 24px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme, colored }) => (colored ? theme.colors.main : theme.colors.text)};
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const ContentBlock = styled.div`
  margin-bottom: 20px;
`;
