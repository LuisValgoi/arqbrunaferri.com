import React, { useCallback } from 'react';
import { Prisma } from '@prisma/client';

import {
  FormControl,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';

import { Button } from './UI';
import { Field, FieldProps, Form, Formik, FormikHelpers, FormikValues } from 'formik';
import { AiOutlineSend } from 'react-icons/ai';
import { sendButtonCommunity } from '../styles/components/JoinCommunity';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { useRouter } from 'next/router';

interface JoinCommunityFormValues {
  email: string;
}

const EMAIL_PATTERN =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function handleEmailValidation(value: string) {
  return !value || !EMAIL_PATTERN.test(value);
}

async function handleSaveLead(email: Prisma.LeadCreateInput) {
  const record = {
    createdAt: new Date(),
    updatedAt: new Date(),
    email,
  };

  const response = await fetch('/api/lead', {
    method: 'POST',
    body: JSON.stringify(record),
  });

  if (!response.ok) {
    alert(response.statusText);
  }

  return await response.json();
}

const JoinCommunity: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const toast = useToast();

  const handleOnSubmit = useCallback(
    async (values: FormikValues, formikHelpers: FormikHelpers<JoinCommunityFormValues>) => {
      formikHelpers.setSubmitting(true);
      await handleSaveLead(values.email);
      formikHelpers.setSubmitting(false);
      onClose();
      toast({
        title: 'Muito Obrigada!',
        description: 'Você será redirecionada em breve!',
        status: 'success',
        duration: 2000,
        isClosable: false,
        onCloseComplete: () => window.open('https://t.me/joinchat/AAAAAEggPUctnh4xk5bAFw', '_blank'),
      });
    },
    [onClose, toast],
  );

  return (
    <Popover isOpen={isOpen} onClose={onClose} closeOnEsc>
      <PopoverTrigger>
        <Button
          variant="solid"
          fontFamily="Emperatriz"
          textTransform="uppercase"
          justifyContent="center"
          w="72"
          height={12}
          onClick={onToggle}
          leftIcon={isOpen ? <FaLockOpen /> : <FaLock />}
          aria-label="Comunidade Renderize"
        >
          Comunidade Renderize
        </Button>
      </PopoverTrigger>

      <PopoverContent p={2}>
        <PopoverArrow />

        <PopoverBody>Só me confirma teu e-mail...</PopoverBody>

        <Formik initialValues={{ email: '' } as JoinCommunityFormValues} onSubmit={handleOnSubmit}>
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
