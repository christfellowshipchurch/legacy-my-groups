import React, { useState } from 'react';
import Head from 'next/head';

import AuthFlowContext from 'components/Modals/AuthModal/AuthFlowContext';
import Identity from 'components/Modals/AuthModal/AuthIdentity';
import Details from 'components/Modals/AuthModal/AuthDetails';
import Confirm from 'components/Modals/AuthModal/AuthConfirm';
import Success from 'components/Modals/AuthModal/AuthSuccess';
import { Logo } from 'components';
import { Box, Icon } from 'ui-kit';

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
  const [step, setStep] = useState(0);

  return (
    <>
      <Head>
        <title>Login | My Groups</title>
      </Head>
      <AuthFlowContext.Provider
        value={{ isPage: true, step, setStep, redirectPath: '/groups' }}
      >
        <Box
          display="flex"
          flexDirection={{ _: 'column', lg: 'row' }}
          minHeight="100vh"
        >
          {/* Left column — white, form area */}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flex={{ lg: '1' }}
            px={{ _: 'base', md: 'xl' }}
            py="xl"
            bg="white"
          >
            <Box width="100%" maxWidth="420px">
              <Box mb="base">
                <Box as="p" fontSize="s" color="subdued" mb="s">
                  My Groups Login
                </Box>
                <Logo />
              </Box>

              <Box as="h1" fontSize={{ _: 'h3', md: 'h2' }} mb="s">
                My Groups &amp; Classes
              </Box>
              <Box as="p" color="subdued" mb="l">
                Enter your phone number or email address to get started.
              </Box>

              {renderStep(step)}

              <Box mt="l" textAlign="center">
                <Box as="p" fontSize="s" color="subdued">
                  Don&apos;t have an account?{' '}
                  <Box
                    as="a"
                    href="/login"
                    onClick={e => {
                      e.preventDefault();
                      setStep(0);
                    }}
                    color="primary"
                    fontWeight="bold"
                  >
                    Sign Up
                  </Box>
                </Box>
              </Box>

              <Box mt="xl" textAlign="center">
                <Box as="p" fontSize="s" color="subdued">
                  <Box
                    as="a"
                    href="/privacy-policy"
                    color="subdued"
                    mr="base"
                  >
                    Privacy Policy
                  </Box>
                  {' | '}
                  <Box as="a" href="/terms-of-use" color="subdued" ml="base">
                    Terms of Service
                  </Box>
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
            flex="1"
            position="relative"
            style={{
              background: 'linear-gradient(135deg, #0092bc 0%, #004f71 100%)',
              overflow: 'hidden',
            }}
          >
            {/* Decorative icon: house */}
            <Box
              position="absolute"
              style={{ top: '12%', left: '10%', opacity: 0.15 }}
            >
              <Icon name="houseHeartThin" color="white" size="120" />
            </Box>

            {/* Decorative icon: user */}
            <Box
              position="absolute"
              style={{ bottom: '15%', right: '8%', opacity: 0.15 }}
            >
              <Icon name="user" color="white" size="100" />
            </Box>

            {/* Decorative icon: calendar */}
            <Box
              position="absolute"
              style={{ top: '55%', left: '15%', opacity: 0.15 }}
            >
              <Icon name="calendar" color="white" size="80" />
            </Box>

            {/* Main content */}
            <Box textAlign="center" px="xl" position="relative" zIndex="1">
              <Icon name="houseHeartThin" color="white" size="72" mb="l" />
              <Box as="h2" color="white" mb="base">
                Connect with your community
              </Box>
              <Box as="p" color="white" style={{ opacity: 0.85 }}>
                Find groups and classes that help you grow, serve, and belong.
              </Box>
            </Box>
          </Box>
        </Box>
      </AuthFlowContext.Provider>
    </>
  );
}
