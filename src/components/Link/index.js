import React from 'react';

import { Link } from './styled';

const CustomLink = ({ to, isColored, isOpenOnNewTab, children }) => (
  <Link href={to} {...(isOpenOnNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})} isColored={isColored}>
    {children}
  </Link>
);

CustomLink.defaultProps = {
  to: '/',
  isColored: true,
  isOpenOnNewTab: true,
  children: 'Link',
};

export default CustomLink;
