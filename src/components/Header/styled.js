import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: flex-end;
  gap: 30px;
`;

export const Btn = styled.button`
  height: 30px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 3px;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.main};
  color: #fff;
  font-size: 14px;
`;
