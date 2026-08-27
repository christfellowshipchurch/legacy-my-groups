import { Box, Cell, utils } from 'ui-kit';
import { Layout } from 'components';
import { htmlToReactParser } from 'utils';

import { html } from '../lib/privacy-policy';

export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Box mb="base" textAlign="center">
          <Box as="h1">Privacy Policy</Box>
          <Box as="i">Last Update: Aug 26, 2026</Box>
        </Box>
        <Box>{htmlToReactParser.parse(html)}</Box>
      </Cell>
    </Layout>
  );
}
