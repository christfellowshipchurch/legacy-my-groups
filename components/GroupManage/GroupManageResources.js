import React from 'react';

import { useGroupManage, update } from 'providers/GroupManageProvider';
import { Box } from 'ui-kit';
import { CardTitle, SmallPillButton } from './GroupManage.components';

import AddResourceLink from './AddResourceLink';
import ResourcesList from './ResourcesList';

function GroupManageResources(props = {}) {
  const [{ resourceStatus: status }, dispatch] = useGroupManage();
  const setStatus = s => dispatch(update({ resourceStatus: s }));

  const handleAddLinkClick = event => {
    event.preventDefault();
    setStatus('ADD_LINK');
  };

  function render() {
    if (status === 'IDLE') {
      return <ResourcesList />;
    }

    if (status === 'ADD_LINK') {
      return <AddResourceLink />;
    }

    return null;
  }

  return (
    <>
      <Box
        alignItems="center"
        display="flex"
        flexWrap="wrap"
        gridGap="s"
        mb="base"
      >
        <CardTitle title="Resources" />
        <SmallPillButton onClick={handleAddLinkClick} icon="plus" title="Add Link" />
        <SmallPillButton
          title="Find Studies and Resources"
          href="https://www.christfellowship.church/studies-and-resources"
          target="_blank"
          rel="noopener noreferrer"
        />
      </Box>
      {render()}
    </>
  );
}

export default GroupManageResources;
