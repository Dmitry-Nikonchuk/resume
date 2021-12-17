import styled from 'styled-components';

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

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme, colored }) =>
    colored ? theme.colors.main : theme.colors.text};
`;

export const Text = styled.p`
  font-size: 14px;
  ${({ noPadding }) => !noPadding && "padding: 10px 0"};
`;
