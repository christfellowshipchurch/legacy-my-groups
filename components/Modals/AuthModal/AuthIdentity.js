import React, { useEffect } from 'react';

import { validateEmail, validatePhoneNumber } from 'utils';
import { useAuthIdentity, useForm, useUserExists } from 'hooks';
import { useAuthFlow } from 'components/Modals/AuthModal/AuthFlowContext';
import { Box, Button, TextInput } from 'ui-kit';

function AuthIdentity() {
  const { status, setStatus, error, setError, handleAuthIdentity } =
    useAuthIdentity();
  const { mode = 'login' } = useAuthFlow();

  useEffect(() => {
    if (mode === 'login') {
      setError(null);
      setStatus('IDLE');
    }
  }, [mode, setError, setStatus]);
  const [checkIfUserExists] = useUserExists({
    fetchPolicy: 'network-only',
    onCompleted: async data => {
      const identity = values.identity;
      const userExists = data?.userExists !== 'NONE';

      if (mode === 'signup' && userExists) {
        setStatus('ERROR');
        setError({
          identity:
            "Looks like this email or phone number has already been used to create an account. Please sign in below.",
        });
        return;
      }

      handleAuthIdentity({
        identity,
        userExists,
        nextStep: userExists ? 2 : 1,
      });
    },
  });
  const { values, handleSubmit, handleChange } = useForm(() => {
    const identity = values.identity;
    const validEmail = validateEmail(identity);
    const validPhoneNumber = validatePhoneNumber(identity);
    const validIdentity = validEmail || validPhoneNumber;

    if (validIdentity) {
      setStatus('LOADING');
      checkIfUserExists({ variables: { identity: values.identity } });
    } else {
      setStatus('ERROR');
      setError({ identity: 'That is not a valid email or phone number.' });
    }
  });

  const isLoading = status === 'LOADING';

  const description =
    mode === 'signup'
      ? 'Enter your phone number or email address to create your account.'
      : 'Enter your phone number or email address to get started.';
  const buttonLabel = mode === 'signup' ? 'Continue' : 'Login';

  return (
    <>
      <Box as="p" mb="l">
        {description}
      </Box>
      <Box as="form" action="" onSubmit={handleSubmit}>
        <Box mb="base">
          <TextInput
            id="identity"
            label="Mobile Number or Email"
            onChange={handleChange}
            required
            autoFocus
          />
          {error?.identity ? (
            <Box as="p" color="alert" fontSize="s" mt="s">
              {error.identity}
            </Box>
          ) : null}
        </Box>
        <Box textAlign="center">
          <Button
            type="submit"
            status={status}
            width="100%"
            fontWeight="normal"
          >
            {isLoading ? 'Loading...' : buttonLabel}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AuthIdentity;
