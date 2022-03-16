import styled from 'styled-components';
import avatar from 'images/face.png';

export const Container = styled.div`
  min-height: 100vh;
  max-width: ${({ theme }) => `${theme.sizes.sidebarWidth}px`};
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.text};
`;

export const Avatar = styled.div`
  width: ${({ theme }) => `${theme.sizes.avatarSize}px`};
  height: ${({ theme }) => `${theme.sizes.avatarSize}px`};
  border-radius: 50%;
  background: url(${avatar}) center center no-repeat;
  background-size: cover;
`;
