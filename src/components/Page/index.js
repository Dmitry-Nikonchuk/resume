import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'components/Link';
import * as S from './styled';

const Page = () => {
  const { t } = useTranslation();
  const { t: contactsT } = useTranslation('contacts');

  return (
    <S.Container>
      <S.Row>
        <S.Col horizontalCenter bordered left>
          <S.Avatar />
        </S.Col>
        <S.Col bordered>
          <S.Name>{t("name")}</S.Name>
          <S.Position>{t("profession")}</S.Position>
        </S.Col>
      </S.Row>
      <S.Row>
        <S.Col left>
          <S.Title>{contactsT("title")}</S.Title>
          <S.SubTitle colored>{contactsT("phone")}:</S.SubTitle>
          <S.Text mb={20}>+375 (29) 222-90-51</S.Text>
          <S.SubTitle colored>{contactsT("email")}:</S.SubTitle>
          <S.Text>nicon66@mail.ru</S.Text>
          <S.Text mb={20}>minihilator@gmail.com</S.Text>
          <S.SubTitle colored>{contactsT("skype")}:</S.SubTitle>
          <S.Text mb={20}>nikonchuk_dmitrey</S.Text>
          <S.SubTitle colored>LinkedIn:</S.SubTitle>
          <S.Text mb={20}>linkedin.com/in/дмитрий-никончук-b9b966115</S.Text>
          <S.SubTitle colored>{contactsT("address")}:</S.SubTitle>
          <S.Text>{contactsT("addressString")}</S.Text>
        </S.Col>
        <S.Col bordered>
          <S.Title>{t("workExperience")}</S.Title>
          <S.ContentBlock>
            <S.SubTitle colored>Middle frontend developer</S.SubTitle>
            <S.SubTitle>EffectiveSoft | April 2020 - Present</S.SubTitle>
            <S.Text>Three words about work</S.Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <S.SubTitle colored>Frontend developer</S.SubTitle>
            <S.SubTitle>DeltaStream | May 2018 - April 2020</S.SubTitle>
            <S.Text>Three words about work</S.Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <S.SubTitle colored>Frontend developer</S.SubTitle>
            <S.SubTitle>Logic Software Inc. | July 2017 - May 2018</S.SubTitle>
            <S.Text>Three words about work</S.Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <S.SubTitle colored>Artist of Orchestra (Drums)</S.SubTitle>
            <S.SubTitle>
              National Choir of Belarus named Citovich | March 2013 - July 2017
            </S.SubTitle>
            <S.Text>Three words about work</S.Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <S.SubTitle colored>Layout Designer</S.SubTitle>
            <S.SubTitle>MidenCo | June 2016 - March 2017</S.SubTitle>
            <S.Text>Three words about work</S.Text>
          </S.ContentBlock>
        </S.Col>
      </S.Row>
      <S.Row>
        <S.Col left />
        <S.Col bordered>
          <S.Title>{t("education")}</S.Title>
          <S.ContentBlock>
            <S.SubTitle colored>The Rolling Scopes School</S.SubTitle>
            <S.Text>NodeJs course | 2020</S.Text>
            <Link to="https://drive.google.com/file/d/1Z6MlmxOA3z0MZSCDAX1dJnBxaAlFEr8s/view?usp=sharing">
              {t("seeCertificate")}
            </Link>
          </S.ContentBlock>
          <S.ContentBlock>
            <S.SubTitle colored>The Rolling Scopes School</S.SubTitle>
            <S.Text>React Development (Javascript) course | 2020</S.Text>
            <Link to="https://drive.google.com/file/d/1tjPPi0UxZ9tOBH7hV67pVJp8WMGF_G39/view?usp=sharing">
              {t("seeCertificate")}
            </Link>
          </S.ContentBlock>
          <S.ContentBlock>
            <S.SubTitle colored>Udemy</S.SubTitle>
            <S.Text>React Native course</S.Text>
            <Link to="https://drive.google.com/file/d/1OKCOxXiv90DgHfYil9GPtKpqyKtvRuq_/view?usp=sharing">
              {t("seeCertificate")}
            </Link>
          </S.ContentBlock>
          <S.ContentBlock>
            <S.SubTitle colored>The Rolling Scopes School</S.SubTitle>
            <S.Text mb={20}>Javascript Development course | 2016 - 2017</S.Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <S.SubTitle colored>TeachMeSkills</S.SubTitle>
            <S.Text mb={20}>
              Web Development course (html, css, js) | 2015
            </S.Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <S.SubTitle colored>Belorussian Academy of Music</S.SubTitle>
            <S.Text>Teacher, Artist of orchestra | 2010 - 2015</S.Text>
            <S.Text>Diploma of Higher Education №123456752</S.Text>
          </S.ContentBlock>
          <S.ContentBlock>
            <S.SubTitle colored>High School student</S.SubTitle>
            <S.Text>Teacher of music (drums) | 2006 - 2010</S.Text>
            <S.Text>High School Diploma №12358765</S.Text>
          </S.ContentBlock>
        </S.Col>
      </S.Row>
      <S.Row>
        <S.Col left />
        <S.Col>
          <S.Row>
            <S.Col borderedRight>
              <S.Title>{t('skills')}</S.Title>
            </S.Col>
            <S.Col>
              <S.Title>{t('langs')}</S.Title>
              <S.Row>
                <S.Col>
                  <S.SubTitle colored>Russian</S.SubTitle>
                </S.Col>
                <S.Col>
                  <S.Text>Native</S.Text>
                </S.Col>
              </S.Row>
              <S.Row>
                <S.Col>
                  <S.SubTitle colored>Belorussian</S.SubTitle>
                </S.Col>
                <S.Col>
                  <S.Text>Native</S.Text>
                </S.Col>
              </S.Row>
              <S.Row>
                <S.Col>
                  <S.SubTitle colored>English</S.SubTitle>
                </S.Col>
                <S.Col>
                  <S.Text>A2</S.Text>
                </S.Col>
              </S.Row>
            </S.Col>
          </S.Row>
        </S.Col>
      </S.Row>
    </S.Container>
  );
};

export default Page;
