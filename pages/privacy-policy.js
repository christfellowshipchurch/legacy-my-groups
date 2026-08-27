import { Layout, LegalPolicy } from 'components';

import { html } from '../lib/privacy-policy';

export default function PrivacyPolicy() {
  return (
    <Layout title="Privacy Policy">
      <LegalPolicy
        title="Privacy Policy"
        lastUpdated="Last Update: Aug 26, 2026"
        html={html}
      />
    </Layout>
  );
}
