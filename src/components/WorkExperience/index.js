import React, { useMemo } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { useTranslation } from "react-i18next";
import { useTheme } from 'styled-components';
import { Title, SubTitle, Text } from 'components/Layout';

const WorkExperience = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const workData = useMemo(() => {
    return [
      {
        id: 1,
        dateString: `${t("timing.april")} 2020 - ${t("timing.present")}`,
        coloredTitle: "EffectiveSoft",
        title: "Middle frontend developer",
        text: t("workExperience.es"),
      },
      {
        id: 2,
        dateString: `${t("timing.may")} 2018 - ${t("timing.april")} 2020`,
        coloredTitle: "DeltaStream",
        title: "Frontend developer",
        text: t("workExperience.deltastream"),
      },
      {
        id: 3,
        dateString: `${t("timing.july")} 2017 - ${t("timing.may")} 2018`,
        coloredTitle: "Logic Software Inc.",
        title: "Frontend developer",
        text: t("workExperience.ls"),
      },
      {
        id: 3,
        dateString: `${t("timing.june")} 2016 - ${t("timing.march")} 2017`,
        coloredTitle: "xiaomi-store.by",
        title: t("designer"),
        text: t("workExperience.midenco"),
      },
      {
        id: 5,
        dateString: `${t("timing.march")} 2013 - ${t("timing.july")} 2017`,
        coloredTitle: t("choirName"),
        title: t("choirPosition"),
        text: t("workExperience.choir"),
      },
    ];
  }, [t]);
  return (
    <>
      <Title>{t("workExperience.title")}</Title>
      <Timeline lineColor={theme.colors.main}>
        {workData.map((workItem) => (
          <TimelineItem
            key={workItem.id}
            dateText={workItem.dateString}
            dateInnerStyle={{
              background: theme.colors.main,
              fontWeight: "normal",
            }}
          >
            <SubTitle colored>{workItem.coloredTitle}</SubTitle>
            <SubTitle>{workItem.title}</SubTitle>
            <Text>{workItem.text}</Text>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default WorkExperience;
