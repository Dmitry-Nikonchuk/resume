import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;

  button {
    border-radius: 3px;

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-child {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

export const LngBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 0;
  font-size: 14px;
  background: ${({ isActive, theme }) => isActive ? theme.colors.light : 'transparent'};
  cursor: pointer;
  color: ${({ theme, isActive }) => isActive ? theme.colors.white : theme.colors.text};
`;
