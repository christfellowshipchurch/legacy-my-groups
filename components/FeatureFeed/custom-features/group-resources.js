import { isEmpty, kebabCase } from 'lodash';
import React from 'react';
import { Box, Icon, system } from 'ui-kit';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { getAbsoluteUrlFromRelatedNode } from 'utils';

const StyledGroupCard = styled(Box)`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: ${themeGet('space.s')} ${themeGet('space.base')};
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  background-color: white;
  border-radius: ${themeGet('radii.l')};
  border: 1px solid ${themeGet('colors.neutrals.200')};
  box-shadow: ${themeGet('shadows.s')};

  color: ${themeGet('colors.neutrals.900')};
  font-size: ${themeGet('fontSizes.base')};
  font-weight: bold;
  font-family: ${themeGet('fonts.base')};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${themeGet('shadows.l')};
    border-color: ${themeGet('colors.primary')};
  }

  &:active {
    transform: translateY(0);
  }

  ${system}
`;

const StyledIconBadge = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${themeGet('colors.secondarySubdued')};
`;

// Matches an icon to each CMS-driven resource card by keywords in its title.
function getIconName(title = '') {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes('portal')) return 'computer';
  if (
    normalizedTitle.includes('orientation') ||
    normalizedTitle.includes('guide')
  )
    return 'page';
  if (
    normalizedTitle.includes('stud') ||
    normalizedTitle.includes('resource') ||
    normalizedTitle.includes('library')
  )
    return 'book';

  return 'link';
}

export default function GeneralGroupResourcesFeature({ edge, regex }) {
  return (
    <Box
      id={
        !isEmpty(edge?.title)
          ? kebabCase(edge?.title)
          : edge?.id?.replace(regex, '')
      }
      key={edge?.id}
      py="xl"
      px="base"
    >
      <Box as="h2" fontWeight="bold" color="neutrals.900" mb="base">
        General Group Resources
      </Box>

      <Box
        display="flex"
        flexDirection={{ _: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="stretch"
        maxWidth="1200px"
        width="100%"
        style={{
          gap: '16px',
        }}
      >
        {edge?.cards?.map(card => (
          <StyledGroupCard
            key={card?.id}
            as="a"
            href={getAbsoluteUrlFromRelatedNode(card?.relatedNode) || '#'}
            target="_blank"
            rel="noreferrer"
          >
            <Box
              display="flex"
              alignItems="center"
              width="100%"
              style={{ gap: '12px' }}
            >
              <StyledIconBadge>
                <Icon
                  name={getIconName(card?.title)}
                  size="24"
                  color="secondary"
                />
              </StyledIconBadge>
              <Box flex="1">{card?.title}</Box>
              <Icon name="angleRight" size="20" color="neutrals.400" />
            </Box>
          </StyledGroupCard>
        ))}
      </Box>
    </Box>
  );
}
