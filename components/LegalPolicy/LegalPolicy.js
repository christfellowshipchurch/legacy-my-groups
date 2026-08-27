import PropTypes from 'prop-types';

import { Box, Cell, utils } from 'ui-kit';
import { htmlToReactParser } from 'utils';

import LegalContent from './LegalPolicy.styles';

export default function LegalPolicy(props) {
  return (
    <Box as="main" bg="white" minHeight="100%">
      <Box bg="#00354d">
        <Cell
          maxWidth={utils.rem('896px')}
          px={{ _: '24px', md: '40px' }}
          py={{ _: '64px', md: '96px' }}
        >
          <Box
            as="p"
            color="primary"
            fontSize="s"
            fontWeight="bold"
            letterSpacing="0.1em"
            mb="12px"
            textTransform="uppercase"
          >
            Christ Fellowship
          </Box>
          <Box
            as="h1"
            color="white"
            fontSize={{ _: '48px', lg: '52px' }}
            fontWeight="800"
            lineHeight={{ _: '1.2', lg: '1' }}
            mb="0"
          >
            {props.title}
          </Box>
        </Cell>
      </Box>

      <Cell
        maxWidth={utils.rem('896px')}
        px={{ _: '24px', md: '40px' }}
        py={{ _: '56px', md: '80px' }}
      >
        <LegalContent>
          <Box as="p" fontWeight={props.boldLastUpdated ? 'bold' : 'normal'}>
            {props.lastUpdated}
          </Box>
          {htmlToReactParser.parse(props.html)}
        </LegalContent>
      </Cell>
    </Box>
  );
}

LegalPolicy.propTypes = {
  boldLastUpdated: PropTypes.bool,
  html: PropTypes.string.isRequired,
  lastUpdated: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

LegalPolicy.defaultProps = {
  boldLastUpdated: false,
};
