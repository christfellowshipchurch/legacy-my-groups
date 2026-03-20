import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const COCONUT = '#d0d0ce';
const BORDER_ACCENT = '#417890';

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: ${themeGet('colors.screen')};
  padding-left: ${themeGet('space.base')};
  padding-right: ${themeGet('space.base')};
  position: relative;
  z-index: 30;

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    padding-left: 4.5rem;
    padding-right: 4.5rem;
  }

  ${system}
`;

const OceanAccentWrap = styled.div`
  position: relative;
  width: 100%;
`;

const OceanBar = styled.div`
  position: absolute;
  width: 100%;
  height: 1rem;
  background-color: ${themeGet('colors.primary')};
  top: -0.5rem;
  left: 0;
`;

const FooterLink = styled.a`
  color: ${themeGet('colors.white')};
  font-size: ${themeGet('fontSizes.l')};
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  ${system}
`;

const FooterMuted = styled.p`
  color: ${COCONUT};
  font-size: ${themeGet('fontSizes.s')};
  margin: 0;
  font-weight: 500;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: ${themeGet('fontSizes.l')};
  }

  ${system}
`;

const ContactCta = styled.a`
  color: ${themeGet('colors.white')};
  font-size: ${themeGet('fontSizes.xl')};
  font-weight: bold;
  text-decoration: none;
  transition: color 0.15s ease;

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: ${themeGet('fontSizes.h4')};
  }

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  ${system}
`;

/** Long addresses: avoid mid-word breaks; stay one line when there’s room. */
const ContactCtaEmail = styled(ContactCta)`
  white-space: nowrap;

  @media screen and (max-width: 374px) {
    white-space: normal;
    font-size: ${themeGet('fontSizes.s')};
    overflow-wrap: anywhere;
  }
`;

const SectionTitle = styled.div`
  color: ${themeGet('colors.white')};
  font-size: ${themeGet('fontSizes.h4')};
  font-weight: bold;
  ${system}
`;

const ConnectCardButton = styled.button`
  display: inline-flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  cursor: pointer;
  font-family: inherit;
  font-size: ${themeGet('fontSizes.l')};
  font-weight: 300;
  color: ${COCONUT};
  text-align: left;
  min-height: 0;
  transition: color 0.15s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const VerticalRule = styled.div`
  display: none;
  width: 1px;
  align-self: stretch;
  min-height: 4.5rem;
  background: rgba(255, 255, 255, 0.3);

  @media screen and (min-width: ${themeGet('breakpoints.lg')}) {
    display: block;
  }
`;

const CopyrightBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${BORDER_ACCENT};
  padding-top: ${themeGet('space.xl')};
  padding-bottom: ${themeGet('space.xl')};
  font-size: ${themeGet('fontSizes.xs')};
  color: ${COCONUT};

  @media screen and (min-width: ${themeGet('breakpoints.md')}) {
    font-size: ${themeGet('fontSizes.base')};
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themeGet('colors.white')};
  text-decoration: none;
  transition: color 0.15s ease;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }
`;

Footer.OceanAccentWrap = OceanAccentWrap;
Footer.OceanBar = OceanBar;
Footer.Link = FooterLink;
Footer.Muted = FooterMuted;
Footer.ContactCta = ContactCta;
Footer.ContactCtaEmail = ContactCtaEmail;
Footer.SectionTitle = SectionTitle;
Footer.ConnectCardButton = ConnectCardButton;
Footer.VerticalRule = VerticalRule;
Footer.CopyrightBar = CopyrightBar;
Footer.SocialLink = SocialLink;

export default Footer;
