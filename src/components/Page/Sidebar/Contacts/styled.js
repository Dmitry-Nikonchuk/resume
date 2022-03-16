import styled from 'styled-components';
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { RiSkypeLine } from "react-icons/ri";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const getIconMainProps = theme => ({
  color: theme.colors.main,
  size: 25,
});

export const Phone = styled(FiPhoneCall).attrs(({ theme }) => getIconMainProps(theme))``;
export const Mail = styled(FiMail).attrs(({ theme }) => getIconMainProps(theme))``;
export const Skype = styled(RiSkypeLine).attrs(({ theme }) => getIconMainProps(theme))``;
export const LinkedIn = styled(AiOutlineLinkedin).attrs(({ theme }) =>
  getIconMainProps(theme)
)``;
export const Location = styled(HiOutlineLocationMarker).attrs(({ theme }) =>
  getIconMainProps(theme)
)``;
