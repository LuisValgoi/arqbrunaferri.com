import React, { useCallback } from 'react';

import { FormControl, IconButton, Input, Stack, useToast } from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { AiOutlineSend } from 'react-icons/ai';
import { Prisma } from '@prisma/client';

import { css } from '@emotion/react';

export interface JoinCommunityFormValues {
  email: string;
}

export interface JoinCommunityProps {
  finallyCallback?: () => void;
}

const EMAIL_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleEmailValidation = (value: string) => {
  return !value || !EMAIL_PATTERN.test(value);
};

const sendButtonCommunity = css`
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const JoinCommunity: React.FC<JoinCommunityProps> = (props) => {
  const toast = useToast();

  const handleSaveLead = useCallback(async (email: Prisma.LeadCreateInput) => {
    const response = await fetch('/api/lead', {
      method: 'POST',
      body: JSON.stringify({
        createdAt: new Date(),
        updatedAt: new Date(),
        email,
      }),
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return await response.json();
  }, []);

  const handleOnSubmit = useCallback(
    async (values: FormikValues, formikHelpers: FormikHelpers<JoinCommunityFormValues>) => {
      try {
        formikHelpers.setSubmitting(true);
        await handleSaveLead(values.email);
        toast({
          title: 'Muito Obrigada!',
          description: 'Você será redirecionada em breve!',
          status: 'success',
          duration: 2000,
          isClosable: false,
          position: 'top',
          onCloseComplete: () => window.open('https://t.me/joinchat/AAAAAEggPUctnh4xk5bAFw', '_blank'),
        });
      } catch (error) {
        toast({
          title: 'Hmmm, algo deu errado!',
          description: `${error}`,
          status: 'error',
          duration: 2000,
          isClosable: false,
          position: 'top',
        });
      } finally {
        formikHelpers.setSubmitting(false);
        props?.finallyCallback?.();
      }
    },
    [handleSaveLead, props, toast],
  );

  return (
    <Formik initialValues={{ email: '' } as JoinCommunityFormValues} onSubmit={handleOnSubmit}>
      {(props) => (
        <Form style={{ width: '100%' }}>
          <Stack direction="row">
            <Field name="email" validate={handleEmailValidation}>
              {(props: FieldProps<JoinCommunityFormValues, JoinCommunityFormValues>) => (
                <FormControl isInvalid={!!(props.form.errors.email && props.form.touched.email)}>
                  <Input
                    {...props.field}
                    value={props.form.values.email}
                    placeholder="Ex: arqbrunaferri@gmail.com"
                    focusBorderColor="arqbrown.300"
                    w="full"
                  />
                </FormControl>
              )}
            </Field>

            <IconButton
              css={sendButtonCommunity}
              isLoading={props.isSubmitting}
              aria-label="Enviar"
              type="submit"
              color="white"
              icon={<AiOutlineSend />}
            />
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default JoinCommunity;
