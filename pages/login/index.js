import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useAuth } from 'providers/AuthProvider';
import AuthFlowContext from 'components/Modals/AuthModal/AuthFlowContext';
import Identity from 'components/Modals/AuthModal/AuthIdentity';
import Details from 'components/Modals/AuthModal/AuthDetails';
import Confirm from 'components/Modals/AuthModal/AuthConfirm';
import Success from 'components/Modals/AuthModal/AuthSuccess';
import { Logo } from 'components';
import { Box, Image } from 'ui-kit';

function renderStep(step) {
  switch (step) {
    case 1:
      return <Details />;
    case 2:
      return <Confirm />;
    case 3:
      return <Success />;
    default:
      return <Identity />;
  }
}

export default function LoginPage() {
  const router = useRouter();
  const [{ authenticated }] = useAuth();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (authenticated) {
      router.replace('/connect');
    }
  }, [authenticated, router]);

  return (
    <>
      <Head>
        <title>Login | My Groups</title>
      </Head>
      <AuthFlowContext.Provider
        value={{ isPage: true, step, setStep, redirectPath: '/connect' }}
      >
        <Box
          display="flex"
          flexDirection={{ _: 'column', lg: 'row' }}
          minHeight="100vh"
          position="relative"
        >
          <Logo position="absolute" top="24px" left="24px" />
          {/* Left column — white, form area */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flex={{ _: '1', md: '2' }}
            px={{ _: 'base', md: 'xl' }}
            py="xl"
            bg="white"
          >
            <Box width="100%" maxWidth="420px">
              <Box
                as="h1"
                color="secondary"
                fontSize={{ _: 'h3', md: 'h2' }}
                mb="s"
              >
                My Groups &amp; Classes
              </Box>

              {renderStep(step)}

              {step === 0 && (
                <Box mt="l" textAlign="center">
                  <Box as="p" fontSize="s">
                    Don&apos;t have an account?{' '}
                    <Box
                      as="a"
                      href="/login"
                      onClick={e => {
                        e.preventDefault();
                        setStep(1);
                      }}
                      color="neutrals.800"
                    >
                      Sign Up
                    </Box>
                  </Box>
                </Box>
              )}
              {step === 1 && (
                <Box mt="l" textAlign="center">
                  <Box as="p" fontSize="s">
                    Already have an account?{' '}
                    <Box
                      as="a"
                      href="/login"
                      onClick={e => {
                        e.preventDefault();
                        setStep(0);
                      }}
                      color="neutrals.800"
                    >
                      Sign In
                    </Box>
                  </Box>
                </Box>
              )}
              {step === 2 && (
                <Box mt="l" textAlign="center">
                  <Box as="p" fontSize="s">
                    <Box
                      as="a"
                      href="/login"
                      onClick={e => {
                        e.preventDefault();
                        setStep(0);
                      }}
                      color="neutrals.800"
                    >
                      Back to Sign In
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
            <Box mt="xl" position="absolute" bottom="24px">
              <Box as="p" fontSize="s">
                <Box as="a" href="/privacy-policy" mr="base">
                  Privacy Policy
                </Box>
                {' | '}
                <Box as="a" href="/terms-of-use" ml="base">
                  Terms of Service
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right column — blue gradient with icons */}
          <Box
            display={{ _: 'none', lg: 'flex' }}
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flex="3"
            position="relative"
            style={{
              background: 'linear-gradient(135deg, #0092bc 0%, #004f71 100%)',
              overflow: 'hidden',
            }}
          >
            <Image
              source="https://cloudfront.christfellowship.church/GetImage.ashx?id=3141245"
              altText="Login Background"
              objectFit="contain"
              px="xl"
            />
          </Box>
        </Box>
      </AuthFlowContext.Provider>
    </>
  );
}
