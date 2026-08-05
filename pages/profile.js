import {
  ClientSideComponent,
  CustomLink,
  Layout,
  UserProfile,
} from 'components';
import { CurrentPersonProvider } from 'providers';
import { BackButton, Box, Cell, utils } from 'ui-kit';

export default function Profile(props = {}) {
  return (
    <Layout title="Profile">
      <Cell
        as="main"
        maxWidth={utils.rem('1100px')}
        px="base"
        py={{ _: 'l', lg: 'xl' }}
      >
        <Box mb="base">
          <CustomLink Component={BackButton} color="black" href="/my-groups" />
        </Box>
        <ClientSideComponent>
          <CurrentPersonProvider Component={UserProfile} />
        </ClientSideComponent>
      </Cell>
    </Layout>
  );
}
