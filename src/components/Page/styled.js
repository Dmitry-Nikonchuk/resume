import styled from 'styled-components';
import avatar from 'images/face.png';

export const Container = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 30px;

  & > * {
    flex: 1;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const NameContainer = styled.div`
  height: ${({ theme }) => `${theme.sizes.avatarSize + 30}px`};
  padding-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Article = styled.div`
  padding-bottom: 30px;
  border-bottom: ${({ noBorder, theme }) => (!noBorder ? `2px solid ${theme.colors.text}` : 0)};
`;


export const Name = styled.h1`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.main};
`;

export const Position = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 20px;
`;

export const ContentBlock = styled.div`
  margin-bottom: 10px;
`;
