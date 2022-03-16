import React from 'react';
import { useTheme } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Bars from 'react-bars';
import { Title } from 'components/Layout';

import { Container } from './styled';

const skillsData = [
  { label: "Javascript (ES5, ES6)", value: 86 },
  { label: 'React, Redux', value: 82 },
  { label: 'HTML5, CSS3, SCSS, SASS, LESS', value: 92 },
  { label: 'Bootstrap, Material', value: 82 },
  { label: 'StyledComponents', value: 92 },
  { label: 'NodeJS, Express, NestJS', value: 72 },
  { label: 'MySQL', value: 32 },
  { label: 'PostgreSQL', value: 35 },
  { label: 'MongoDB', value: '33' },
  { label: 'Azure, AWS', value: 40 },
  { label: 'Gulp, Webpack', value: 48 },
  { label: 'npm, yarn', value: 58 },
  { label: 'Git, Jira', value: 78 },
  { label: 'Photoshop, Figma', value: 83 },
];

const Skills = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t("skills.title")}</Title>
      <Bars
        data={skillsData}
        barHeight={30}
        verticalSpacing={5}
        barColor={theme.colors.main}
        barBackgroundColor={theme.colors.light}
      />
    </Container>
  );
}


export default Skills;
