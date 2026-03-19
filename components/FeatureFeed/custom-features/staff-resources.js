import React from 'react';
import { Box, system } from 'ui-kit';
import styled from 'styled-components';
import { isEmpty, kebabCase } from 'lodash';
import { getUrlFromRelatedNode } from 'utils';

const StyledStaffCardImage = styled.img`
  display: flex;
  align-items: center;
  aspect-ratio: 4/3;
  cursor: pointer;
  border-radius: 12px;
  transition: opacity 0.3s ease;
  object-fit: cover;
  flex: 1;
  min-width: 200px;

  &:hover {
    opacity: 0.8;
  }

  ${system}
`;

export default function StaffResourcesFeature({ edge, regex }) {
  return (
    <Box
      id={
        !isEmpty(edge?.title)
          ? kebabCase(edge?.title)
          : edge?.id?.replace(regex, '')
      }
      key={edge?.id}
      py="xl"
      pr={{ _: 'none', lg: 'base' }}
      pl="base"
    >
      <Box as="h2" fontWeight="bold" color="neutrals.900" mb="base">
        Staff Resources
      </Box>

      <Box
        display="flex"
        maxWidth="1200px"
        style={{ gap: '16px', overflow: 'auto' }}
      >
        {edge?.cards?.map(card => (
          <a
            key={card?.id}
            href={`https://www.christfellowship.church/${getUrlFromRelatedNode(
              card?.relatedNode
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            <StyledStaffCardImage src={card?.coverImage?.sources[0]?.uri} />
          </a>
        ))}
      </Box>
    </Box>
  );
}
