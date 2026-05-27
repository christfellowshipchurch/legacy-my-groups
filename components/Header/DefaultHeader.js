import React from 'react';
import Link from 'next/link';

import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';

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
        </Box>
        <Nav {...props?.data} showMobileNav={props?.showMobileNav} />
      </Styled>
    </>
  );
}

DefaultHeader.propTypes = {
  ...systemPropTypes,
};

export default DefaultHeader;
