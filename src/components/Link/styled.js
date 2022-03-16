import styled from 'styled-components';

export const Link = styled.a`
  color: ${({ theme, isColored }) => isColored ? theme.colors.link : theme.colors.text};
  text-decoration: none;
  font-weight: 300;
  font-size: 14px;
  text-decoration: underline;

  &:visited {
    text-decoration: underline;
  }
`;
