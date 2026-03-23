import React from 'react';
import PropTypes from 'prop-types';

import { useModalDispatch } from 'providers/ModalProvider';

import { systemPropTypes } from 'ui-kit';
import Styled from './Nav.styles';
import { useCurrentBreakpoint } from 'hooks';

import SignIn from './SignIn';
import ClientSideComponent from 'components/ClientSideComponent';

function Nav(props = {}) {
  const modalDispatch = useModalDispatch();
  const currentBreakpoint = useCurrentBreakpoint();

  /**
   * todo : Update the handleRouterReload to take a list a specific pages that need to be reloaded after logging as user out. To skip the rest of the pages and continue to reduce the amount of unnecessary reloads.
   */

  return (
    <Styled>
      {/* SignIn/SignOut Icon External Home Page*/}
      <ClientSideComponent>
        <SignIn transparentMode={props.transparentMode}></SignIn>
      </ClientSideComponent>
    </Styled>
  );
}

Nav.propTypes = {
  ...systemPropTypes,
  data: PropTypes.object,
  transparentMode: PropTypes.bool,
};

Nav.defaultProps = {
  transparentMode: false,
};

export default Nav;
