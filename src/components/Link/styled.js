import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  font-weight: 300;
  font-size: 18px;
  text-decoration: underline;

  &:visited {
    text-decoration: underline;
  }
`;
