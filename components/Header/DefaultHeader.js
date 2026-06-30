import React from 'react';

import { Box, systemPropTypes } from 'ui-kit';
import { Logo, Nav } from 'components';

import Styled from './Header.styles';

function DefaultHeader(props = {}) {
  return (
    <>
      {/* <ActionBannerProvider Component={ActionBanner} /> */}
      <Styled bg="white" position="relative" boxShadow="base" {...props}>
        <Box display="flex" alignItems="center" gap="l" width="100%">
          <Box as="a" href="https://www.christfellowship.church/">
            <Box
              cursor="pointer"
              as={Logo}
              mx={{ _: 'auto', md: '0' }}
              mb="0"
            />
          </Box>
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
