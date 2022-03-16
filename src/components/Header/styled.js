import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;

export const Btn = styled.button`
  height: 40px;
  min-width: 145px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 3px;
  cursor: pointer;
  background: transparent;
  color: ${({ theme }) => theme.colors.main};
  font-size: 14px;
`;
