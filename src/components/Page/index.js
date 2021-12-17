import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'components/Link';
import Sidebar from './Sidebar';
import { Title, SubTitle, Text } from 'components/Layout';
import * as S from './styled';

const Page = ({ pageRef }) => {
  const { t } = useTranslation();

  return (
    <S.Container ref={pageRef}>
      <Sidebar />
      <S.Content>
        <S.NameContainer>
          <S.Name>{t("name")}</S.Name>
          <S.Position>{t("profession")}</S.Position>
        </S.NameContainer>
        <S.Article>
          <Title>{t("workExperience.title")}</Title>
          <S.ContentBlock>
            <SubTitle colored>Middle frontend developer</SubTitle>
            <SubTitle>
              EffectiveSoft | {t("timing.april")} 2020 - {t("timing.present")}
            </SubTitle>
            <Text>{t("workExperience.es")}</Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <SubTitle colored>Frontend developer</SubTitle>
            <SubTitle>
              DeltaStream | {t("timing.may")} 2018 - {t("timing.april")} 2020
            </SubTitle>
            <Text>{t("workExperience.deltastream")}</Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <SubTitle colored>Frontend developer</SubTitle>
            <SubTitle>
              Logic Software Inc. | {t("timing.july")} 2017 - {t("timing.may")}{" "}
              2018
            </SubTitle>
            <Text>{t("workExperience.ls")}</Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <SubTitle colored>{t("choirPosition")}</SubTitle>
            <SubTitle>
              {t("choirName")} | {t("timing.march")} 2013 - {t("timing.july")}{" "}
              2017
            </SubTitle>
            <Text>{t("workExperience.choir")}</Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <SubTitle colored>{t("designer")}</SubTitle>
            <SubTitle>
              MidenCo | {t("timing.june")} 2016 - {t("timing.march")} 2017
            </SubTitle>
            <Text>{t("workExperience.midenco")}</Text>
          </S.ContentBlock>
        </S.Article>
        <S.Article noBorder>
          <Title>{t("education")}</Title>
          <S.ContentBlock>
            <SubTitle colored>The Rolling Scopes School</SubTitle>
            <Text noPadding>
              NodeJs course | 2020 &nbsp;
              <Link to="https://drive.google.com/file/d/1Z6MlmxOA3z0MZSCDAX1dJnBxaAlFEr8s/view?usp=sharing">
                {t("seeCertificate")}
              </Link>
            </Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <SubTitle colored>The Rolling Scopes School</SubTitle>
            <Text noPadding>
              React Development (Javascript) course | 2020 &nbsp;
              <Link to="https://drive.google.com/file/d/1tjPPi0UxZ9tOBH7hV67pVJp8WMGF_G39/view?usp=sharing">
                {t("seeCertificate")}
              </Link>
            </Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <SubTitle colored>Udemy</SubTitle>
            <Text noPadding>
              React Native course &nbsp;
              <Link to="https://drive.google.com/file/d/1OKCOxXiv90DgHfYil9GPtKpqyKtvRuq_/view?usp=sharing">
                {t("seeCertificate")}
              </Link>
            </Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <SubTitle colored>The Rolling Scopes School</SubTitle>
            <Text noPadding>
              Javascript Development course | 2016 - 2017
            </Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <SubTitle colored>TeachMeSkills</SubTitle>
            <Text noPadding>
              Web Development course (html, css, js) | 2015
            </Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <SubTitle colored>{t("academy")}</SubTitle>
            <Text noPadding>{t("academyStatus")} | 2010 - 2015</Text>
            <Text noPadding>{t("academyDiploma")} №1177937</Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <SubTitle colored>{t("highSchool")}</SubTitle>
            <Text noPadding>{t("highSchoolStatus")} | 2006 - 2010</Text>
            <Text noPadding>{t("highSchoolDiploma")} №0452623</Text>
          </S.ContentBlock>
        </S.Article>
      </S.Content>
    </S.Container>
  );
};

export default Page;
