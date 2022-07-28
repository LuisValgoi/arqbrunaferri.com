import React, { useCallback } from 'react';
import { css } from '@emotion/react';

import {
  FormControl,
  FormErrorMessage,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';

import { Button } from './UI';
import { Field, FieldProps, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { AiOutlineSend } from 'react-icons/ai';
import { sendButtonCommunity } from '../styles/components/JoinCommunity';
import { FaLock, FaLockOpen } from 'react-icons/fa';

const EMAIL_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

interface JoinCommunityFormValues {
  email: string;
}

const JoinCommunityFormInitialValues = { email: '' } as JoinCommunityFormValues;

const JoinCommunity: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const handleEmailValidation = useCallback((value: string) => {
    return !value || !EMAIL_PATTERN.test(value);
  }, []);

  const handleOnSubmit = useCallback(
    (values: FormikValues, formikHelpers: FormikHelpers<JoinCommunityFormValues>) => {
      setTimeout(() => {
        formikHelpers.setSubmitting(false);
        onClose();
        alert(JSON.stringify(values.email));
      }, 1000);
    },
    [onClose],
  );

  return (
    <Popover isOpen={isOpen} onClose={onClose} closeOnEsc>
      <PopoverTrigger>
        <Button
          variant="solid"
          fontFamily="Emperatriz"
          textTransform="uppercase"
          aria-label="Entrar na Comunidade"
          w="72"
          height={12}
          justifyContent="center"
          leftIcon={isOpen ? <FaLockOpen /> : <FaLock />}
          onClick={onToggle}
        >
          Comunidade Renderize
        </Button>
      </PopoverTrigger>

      <PopoverContent p={2}>
        <PopoverArrow />

        <PopoverBody>Só me confirma teu e-mail...</PopoverBody>

        <Formik initialValues={JoinCommunityFormInitialValues} onSubmit={handleOnSubmit}>
          {(props) => (
            <Form>
              <Stack direction="row">
                <Field name="email" validate={handleEmailValidation}>
                  {(props: FieldProps<JoinCommunityFormValues, JoinCommunityFormValues>) => (
                    <FormControl isInvalid={!!(props.form.errors.email && props.form.touched.email)}>
                      <Input
                        {...props.field}
                        value={props.form.values.email}
                        placeholder="Ex: arqbrunaferri@gmail.com"
                        focusBorderColor="arqbrown.300"
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
      </PopoverContent>
    </Popover>
  );
};

export default JoinCommunity;
