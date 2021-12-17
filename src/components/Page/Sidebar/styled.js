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

export const GridRow = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1.2fr 2fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;

  * {
    align-self: center;
  }
`;

export const Contacts = styled.div``;

export const Skills = styled(Contacts)``;

export const Languages = styled(Contacts)``;

export const List = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding-left: 20px;
  position: relative;
  margin-bottom: 10px;

  &::before {
    content: '-';
    display: block;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
