import React, { useState } from 'react';

import {
  useAuthenticateCredentials,
  useForm,
  useVerifyPin,
  useRegisterWithEmail,
  useRegisterWithSms,
} from 'hooks';
import { useAuth, update as updateAuth } from 'providers/AuthProvider';
import { hideModal, useModalDispatch } from 'providers/ModalProvider';
import { useAuthFlow } from 'components/Modals/AuthModal/AuthFlowContext';
import { useRouter } from 'next/router';
import { Box, Button, TextInput } from 'ui-kit';
import ResendCode from './ResendCode';
import ResetPassword from './ResetPassword';

const COPY = {
  DESCRIPTION: {
    smsNew:
      'Enter in the Confirmation Code that was texted to your mobile phone number.',
    smsExisting:
      'Enter in the Confirmation Code that was texted to your mobile phone number.',
    passwordExisting: 'Enter in your existing password below.',
    passwordNew: 'Create your password below.',
  },
  LABEL: {
    sms: 'Confirmation Code',
    password: 'Password',
  },
  SIGNUP_ERROR_FALLBACK:
    "We couldn't create your account. Please check your details and try again.",
};

function getErrorMessageFromApollo(err) {
  if (!err) return null;
  const firstGraphQL = err.graphQLErrors?.[0]?.message;
  if (firstGraphQL) return firstGraphQL;
  const result = err.networkError?.result;
  if (result?.errors?.length) return result.errors[0].message ?? result.errors[0];
  if (typeof result?.message === 'string') return result.message;
  if (err.message) return err.message;
  return null;
}

function AuthConfirm() {
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const [state, dispatch] = useAuth();
  const modalDispatch = useModalDispatch();
  const { isPage, redirectPath } = useAuthFlow();
  const router = useRouter();

  const [registerUserWithSms] = useRegisterWithSms();
  const [registerUserWithEmail] = useRegisterWithEmail();
  const [verifyPin] = useVerifyPin();
  const [authenticateCredentials] = useAuthenticateCredentials();

  const onError = (err) => {
    setStatus('ERROR');
    const isSignupPassword = state.type === 'password' && !state.userExists;
    const message = isSignupPassword
      ? (getErrorMessageFromApollo(err) || COPY.SIGNUP_ERROR_FALLBACK)
      : `The ${COPY.LABEL[state.type]} you entered is incorrect.`;
    setError({ passcode: message });
  };
  const onSuccess = token => {
    setStatus('SUCCESS');
    dispatch(updateAuth({ token }));
    if (isPage) {
      router.push(redirectPath || '/connect');
    } else {
      modalDispatch(hideModal());
      state?.onSuccess();
    }
  };
  const { values, handleChange, handleSubmit } = useForm(async () => {
    const passcode = values.passcode;
    setStatus('LOADING');
    if (state.type === 'sms') {
      try {
        if (state.userExists) {
          await verifyPin({
            variables: { phone: state.identity, code: passcode },
            update: (
              cache,
              { data: { authenticateWithSms: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        } else {
          await registerUserWithSms({
            variables: {
              identity: state.identity,
              password: passcode,
              userProfile: state.userProfile,
            },
            update: (
              cache,
              { data: { registerWithSms: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        }
      } catch (error) {
        onError();
        console.log(error);
      }
    }
    if (state.type === 'password') {
      try {
        if (state.userExists) {
          await authenticateCredentials({
            variables: { email: state.identity, password: passcode },
            update: (
              cache,
              { data: { authenticate: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        } else {
          await registerUserWithEmail({
            variables: {
              identity: state.identity,
              password: passcode,
              userProfile: state.userProfile,
            },
            update: (
              cache,
              { data: { registerPerson: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        }
      } catch (error) {
        onError(error);
        console.log(error);
      }
    }
  });

  const isLoading = status === 'LOADING';
  const descriptionKey = `${state.type}${
    state.userExists ? 'Existing' : 'New'
  }`;

  return (
    <>
      <Box as="p" mb="l">
        {COPY.DESCRIPTION[descriptionKey]}
      </Box>
      <Box as="form" action="" onSubmit={handleSubmit}>
        <Box mb="base">
          <TextInput
            id="passcode"
            type={state.type === 'password' ? 'password' : 'text'}
            label={COPY.LABEL[state.type]}
            onChange={handleChange}
            required
            autoFocus
          />
          {error?.passcode ? (
            <Box as="p" color="alert" fontSize="s" mt="s">
              {error.passcode}
            </Box>
          ) : null}
        </Box>
        <Box textAlign="center">
          <Button
            type="submit"
            status={status}
            width="100%"
            fontWeight="normal"
            mb="base"
          >
            Submit{isLoading ? 'ting...' : ''}
          </Button>
          <ResendCode />
          <ResetPassword />
        </Box>
      </Box>
    </>
  );
}

export default AuthConfirm;
