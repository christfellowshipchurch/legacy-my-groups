import React from 'react';

import { links } from 'config/metadata';
import { Box, Cell, Icon, systemPropTypes } from 'ui-kit';
import { CustomLink, Logo } from 'components';
import Styled from './Footer.styles';
import { showModal, useModalDispatch } from 'providers/ModalProvider';

const COCONUT = '#d0d0ce';
const BORDER_SUBTLE = 'rgba(217, 217, 217, 0.3)';

function Footer(props = {}) {
  return (
    <Styled {...props}>
      <Styled.OceanAccentWrap>
        <Styled.OceanBar />
      </Styled.OceanAccentWrap>

      <Cell width="100%">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          <TopContactRow />
          <LinkColumnsGrid />
        </Box>
      </Cell>

      <Styled.CopyrightBar>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} Christ Fellowship Church. All Rights
          Reserved
        </p>
      </Styled.CopyrightBar>
    </Styled>
  );
}

function TopContactRow() {
  return (
    <Box
      display="flex"
      flexDirection={{ _: 'column', lg: 'row' }}
      alignItems="center"
      width="100%"
      py="xl"
      gap={{ _: 0, lg: 'base', xl: 'xl' }}
    >
      <ContactBlock
        icon="phone"
        label="Call Us"
        href="tel:5617997600"
        cta="(561) 799-7600"
        pb={{ _: 'l', lg: '0' }}
        justifyContent={{ _: 'flex-start', md: 'center' }}
      />
      <Styled.VerticalRule />
      <Box
        width="100%"
        borderTop={{ _: `1px solid ${BORDER_SUBTLE}`, lg: 'none' }}
        borderBottom={{ _: `1px solid ${BORDER_SUBTLE}`, lg: 'none' }}
        py={{ _: 'l', lg: '0' }}
        my={{ _: 0, lg: 0 }}
      >
        <ContactBlock
          icon="envelope"
          label="Email Us"
          href="mailto:hello@christfellowship.church"
          cta="hello@christfellowship.church"
          emailCta
          pb="0"
          justifyContent={{ _: 'flex-start', md: 'center' }}
        />
      </Box>
      <Styled.VerticalRule />
      <ContactBlock
        icon="location"
        label="Find Us"
        href="https://www.christfellowship.church/locations"
        cta="View Locations"
        pt={{ _: 'l', lg: '0' }}
        pb="0"
        justifyContent={{ _: 'flex-start', md: 'center' }}
        minWidth={{ lg: '320px' }}
      />
    </Box>
  );
}

function ContactBlock({
  icon,
  label,
  href,
  cta,
  emailCta = false,
  ...boxProps
}) {
  const CtaComponent = emailCta ? Styled.ContactCtaEmail : Styled.ContactCta;

  return (
    <Box
      display="flex"
      alignItems="center"
      gap="base"
      width="100%"
      {...boxProps}
    >
      <Box
        flexShrink={0}
        minWidth="3rem"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color={COCONUT}
      >
        <Icon name={icon} size="42" color="currentColor" />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        minWidth={0}
        flex="1"
      >
        <Styled.Muted>{label}</Styled.Muted>
        <CtaComponent href={href}>{cta}</CtaComponent>
      </Box>
    </Box>
  );
}

function LinkColumnsGrid() {
  return (
    <Box
      width="100%"
      borderTop="1px solid #417890"
      pt="xl"
      pb="xl"
      fontSize="l"
      color={COCONUT}
      display="grid"
      gridTemplateColumns={{
        _: 'repeat(2, minmax(0, 1fr))',
        md: 'repeat(4, minmax(0, 1fr))',
        lg: 'repeat(5, minmax(0, 1fr))',
      }}
      gridColumnGap="base"
      gridRowGap={{ _: 'xxl', md: 'l' }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{ _: 'center', md: 'flex-start' }}
        gridColumn={{ _: 'span 2', md: 'span 4', lg: 'span 1' }}
        mr={{ _: 0, md: 'base' }}
        mb={{ _: 'l', lg: 0 }}
        gap={{ _: 'base', md: 'l' }}
      >
        <Box
          height={{ _: '100px', md: 'auto' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={{ _: '-l', md: '0' }}
        >
          <Logo dark width="160" height="auto" mb="0" />
        </Box>
        <Box display="flex" flexDirection="column" gap="s" width="100%">
          <Box
            display="flex"
            gap="s"
            justifyContent={{ _: 'center', md: 'flex-start' }}
          >
            <SocialIcon
              href={links.youtube}
              name="youtube"
              gtm="footer-link"
              linkName="youtube"
            />
            <SocialIcon
              href={links.instagram}
              name="instagram"
              gtm="footer-link"
              linkName="instagram"
            />
            <SocialIcon
              href={links.linkedin}
              name="linkedIn"
              gtm="footer-link"
              linkName="linkedIn"
            />
          </Box>
        </Box>
      </Box>

      <FooterColumn title="Resources">
        <Styled.Link target="_blank" href={links.churchOnline}>
          Church Online
        </Styled.Link>
        <Styled.Link target="_blank" href={links.pastMessages}>
          Past Messages
        </Styled.Link>
        <Styled.Link href="/give">Give Online</Styled.Link>
      </FooterColumn>

      <ConnectColumn />

      <FooterColumn title="About">
        <CustomLink href="/about" Component={Styled.Link}>
          Our Leadership
        </CustomLink>
        <Styled.Link href="/career-opportunities">
          Career Opportunities
        </Styled.Link>
        <CustomLink href="/privacy-policy" Component={Styled.Link}>
          Privacy Policy
        </CustomLink>
        <CustomLink href="/terms-of-use" Component={Styled.Link}>
          Terms of Use
        </CustomLink>
      </FooterColumn>

      <FooterColumn title="More">
        <Styled.Link target="_blank" href={links.cfConf}>
          CF Conference
        </Styled.Link>
        <Styled.Link target="_blank" href={links.cfSeu}>
          Get Your Degree
        </Styled.Link>
        <Styled.Link target="_blank" href={links.shopOnline}>
          Shop Online
        </Styled.Link>
      </FooterColumn>
    </Box>
  );
}

function FooterColumn({ title, children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s"
      gridColumn={{ md: 'span 1' }}
    >
      <Styled.SectionTitle role="heading" aria-level={2}>
        {title}
      </Styled.SectionTitle>
      {children}
    </Box>
  );
}

function ConnectColumn() {
  const modalDispatch = useModalDispatch();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="s"
      gridColumn={{ md: 'span 1' }}
    >
      <Styled.SectionTitle role="heading" aria-level={2}>
        Connect
      </Styled.SectionTitle>
      <Styled.ConnectCardButton
        type="button"
        onClick={() => modalDispatch(showModal('ConnectCardModal'))}
      >
        Connect Card
      </Styled.ConnectCardButton>
      <Styled.Link target="_blank" href={links.submitPrayerRequest}>
        Request Prayer
      </Styled.Link>
      <Styled.Link target="_blank" href={links.subscribeMailchimp}>
        Subscribe to Updates
      </Styled.Link>
      <Styled.Link href="mailto:hello@christfellowship.church">
        Contact Us
      </Styled.Link>
    </Box>
  );
}

function SocialIcon({ href, name, gtm, linkName }) {
  return (
    <Styled.SocialLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-gtm={gtm}
      data-link-name={linkName}
    >
      <Icon name={name} size="36" color="currentColor" />
    </Styled.SocialLink>
  );
}

Footer.propTypes = {
  ...systemPropTypes,
};

export default Footer;
