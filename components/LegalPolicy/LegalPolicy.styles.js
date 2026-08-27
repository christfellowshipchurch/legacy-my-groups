import styled from 'styled-components';

import { Box } from 'ui-kit';

const LegalContent = styled(Box)`
  color: #666666;
  font-size: 1rem;
  line-height: 1.625;

  h3 {
    border-left: 4px solid #0092bc;
    color: #00354d;
    font-size: 28px;
    font-weight: 800;
    line-height: 1.4;
    margin-bottom: 1rem;
    margin-top: 2.5rem;
    padding-left: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  div {
    margin-bottom: 1rem;
  }

  br {
    display: none;
  }

  b,
  strong {
    color: #222222;
    font-weight: 700;
  }

  a {
    color: #0092bc;
    text-underline-offset: 2px;
  }

  a:hover {
    text-decoration: underline;
  }

  ul {
    list-style-type: disc;
    margin-bottom: 1rem;
    margin-top: 1rem;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.25rem;
  }

  @media screen and (min-width: 1024px) {
    h3 {
      font-size: 1.5rem;
      line-height: 1.3;
    }
  }
`;

export default LegalContent;
