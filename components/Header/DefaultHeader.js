import React from 'react';
import Link from 'next/link';

import { ActionBannerProvider } from 'providers';
import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';
import styled from 'styled-components';

import { themeGet } from '@styled-system/theme-get';

import ActionBanner from '../ActionBanner/ActionBanner';
import { useAuth } from 'providers/AuthProvider';
import Styled from './Header.styles';

function DefaultHeader(props = {}) {
  const [{ authenticated }] = useAuth();

  return (
    <>
      {/* <ActionBannerProvider Component={ActionBanner} /> */}
      <Styled bg="white" position="relative" boxShadow="base" {...props}>
        {/* Next 13 doesn't support a tags as children of Link component so we need to add legacyBehavior prop */}
        <Box display="flex" alignItems="center" gap="l" width="100%">
          <Link legacyBehavior href={authenticated ? '/my-groups' : '/login'}>
            <Box
              cursor="pointer"
              as={Logo}
              mx={{ _: 'auto', md: '0' }}
              mb="0"
            />
          </Link>
          <Box
            display={{ _: 'none', md: 'flex' }}
            alignItems="center"
            gap="24px"
          >
            <StyledLink href="https://www.christfellowship.church/locations">
              About
            </StyledLink>
            <StyledLink href="https://www.christfellowship.church/about">
              Locations
            </StyledLink>
            <StyledLink href="https://www.christfellowship.church/events">
              Events
            </StyledLink>
          </Box>
        </Box>
        <Nav {...props?.data} showMobileNav={props?.showMobileNav} />
      </Styled>
    </>
  );
}

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${themeGet('space.base')};
  text-decoration: none;
  color: #444444;
  font-size: ${themeGet('fontSizes.h4')};
  font-weight: ${themeGet('fontWeights.bold')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`;

DefaultHeader.propTypes = {
  ...systemPropTypes,
};

export default DefaultHeader;
