import React, { useCallback, useEffect, useRef } from 'react';

import { FormControl, IconButton, Input, Stack, useToast } from '@chakra-ui/react';
import { Field, FieldProps, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { AiOutlineSend } from 'react-icons/ai';
import { Prisma } from '@prisma/client';

import { css } from '@emotion/react';

const sendButtonCommunity = css`
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

export interface JoinCommunityFormValues {
  email: string;
}

export interface JoinCommunityProps {
  autoFocusEmail?: boolean;
  finallyCallback?: () => void;
}

const EMAIL_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleEmailValidation = (value: string) => {
  return !value || !EMAIL_PATTERN.test(value);
};

const JoinCommunity: React.FC<JoinCommunityProps> = ({ finallyCallback, autoFocusEmail }) => {
  const toast = useToast();
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocusEmail) setTimeout(() => emailRef.current?.focus(), 100);
  }, [autoFocusEmail]);

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
        finallyCallback?.();
      }
    },
    [finallyCallback, handleSaveLead, toast],
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
                    ref={emailRef}
                    value={props.form.values.email}
                    placeholder="Ex: arqbrunaferri@gmail.com"
                    backgroundColor="white"
                    focusBorderColor="arqbrown.500"
                    borderColor="arqbrown.300"
                    _placeholder={{ opacity: 0.3 }}
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
