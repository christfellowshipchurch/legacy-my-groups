import React from 'react';
import upperFirst from 'lodash/upperFirst';

import { getAge } from 'utils';
import { useAuthIdentity, useForm } from 'hooks';

import { BirthDateField, GenderField } from 'components';
import { Box, Button, Checkbox, TextInput } from 'ui-kit';

function AuthDetails() {
  const { error, setError, status, setStatus, handleAuthIdentity } =
    useAuthIdentity();
  const { values, handleSubmit, handleChange } = useForm(() => {
    const age = getAge(values.birthDate);
    // Make sure they are at least 13 years of age.
    if (age < 13) {
      setError({
        birthdate: 'You must be at least 13.',
      });
    }
    if (!error) {
      setStatus('LOADING');

      const profileFieldKeys = ['firstName', 'lastName', 'birthDate', 'gender'];
      const userProfile = Object.keys(values)
        .filter(key => profileFieldKeys.includes(key))
        .map(key => ({
          field: upperFirst(key),
          value: values[key],
        }));

      handleAuthIdentity({ nextStep: 2, userProfile });
    }
  });

  const isLoading = status === 'LOADING';

  return (
    <>
      <Box as="p" mb="l">
        Help us learn a little more about you so we can connect you with the
        best ministries and events.
      </Box>
      <Box as="form" action="" onSubmit={handleSubmit}>
        <Box
          display="grid"
          gridTemplateColumns="repeat(2, 1fr)"
          gridColumnGap="base"
          mb="base"
        >
          <Box>
            <TextInput
              id="firstName"
              label="First Name"
              onChange={handleChange}
              required
              autoFocus
            />
            {error?.firstName ? (
              <Box as="p" color="alert" fontSize="s" mt="s">
                {error.firstName}
              </Box>
            ) : null}
          </Box>
          <Box>
            <TextInput
              id="lastName"
              label="Last Name"
              onChange={handleChange}
              required
            />
            {error?.lastName ? (
              <Box as="p" color="alert" fontSize="s" mt="s">
                {error.lastName}
              </Box>
            ) : null}
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={{ lg: 'repeat(2, 1fr)' }}
          gridColumnGap="base"
          mb="base"
        >
          <Box>
            <BirthDateField onChange={handleChange} error={error?.birthDate} />
          </Box>
          <Box mt={{ _: 'base', lg: '0' }}>
            <GenderField
              initialValue={values.gender || ''}
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box mb="base" display="flex">
          <Checkbox id="agreement" required onChange={handleChange} mr="s" />
          <Box as="p" fontSize="s">
            I agree to the&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="/terms-of-use">
              Terms of Use
            </a>
            &nbsp;and&nbsp;
            <a target="_blank" rel="noopener noreferrer" href="/privacy-policy">
              Privacy Policy
            </a>
            &nbsp;laid out by Christ Fellowship Church.
          </Box>
        </Box>
        <Box textAlign="center">
          <Button
            type="submit"
            status={status}
            width="100%"
            fontWeight="normal"
          >
            Finish{isLoading ? 'ing...' : ''}
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default AuthDetails;
