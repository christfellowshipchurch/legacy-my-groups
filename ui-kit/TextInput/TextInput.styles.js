import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'ui-kit';

const TextInput = styled.div`
  position: relative;

  ${system}
`;

const Input = styled.input`
  border: 1px solid ${themeGet('colors.neutrals.600')};
  border-radius: ${themeGet('radii.base')};
  font-family: ${themeGet('fonts.base')};
  font-size: ${themeGet('fontSizes.base')};
  padding: ${themeGet('space.s')};
  width: 100%;

  &::placeholder {
    color: ${themeGet('colors.border')};
  }

  &:focus {
    border-color: ${themeGet('colors.primary')};
    outline: none;
  }

  ${system}
`;

TextInput.Input = Input;

export default TextInput;
