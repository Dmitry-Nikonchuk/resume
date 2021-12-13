import styled from 'styled-components';
import avatar from 'images/face.png';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;

export const Col = styled.div`
  ${({ horizontalCenter }) => horizontalCenter && 'justify-self: center'};
  ${({ verticalCenter }) => verticalCenter && 'align-self: center'};
  ${({ bordered, theme }) => bordered && `border-bottom: 2px solid ${theme.colors.text}`};
  padding: 20px;
`;

export const Avatar = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: url(${avatar}) center center no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.main};
  margin-bottom: 40px;
`;

export const SubTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  margin-bottom: 0;
`;
