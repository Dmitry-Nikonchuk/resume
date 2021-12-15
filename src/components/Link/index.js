import React from 'react';

import { Link } from './styled';

export default ({ to = '/', children }) => <Link href={to} target="_blank" rel="noopener noreferrer">{children}</Link>
