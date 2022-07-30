import Image from 'next/image';

import JoinCommunity from '@/components/JoinCommunity';
import { Stack, useColorModeValue, useMediaQuery } from '@chakra-ui/react';
import { Heading, Text } from '@/components/UI';
import { css } from '@emotion/react';

const cardInternalCSSLight = css`
  margin-inline-start: 0 !important;
  background: linear-gradient(180deg, rgb(125, 81, 56, 0.8) -14.07%, rgb(60,49,33,0.8) 137.12%);
`;

const cardInternalCSSDark = css`
  margin-inline-start: 0 !important;
  background: linear-gradient(180deg, rgb(208, 168, 139, 0.8) -14.07%, rgb(116, 76, 47, 0.8) 137.12%);
`;

const cardBgLight = css`
  background: linear-gradient(180deg, rgb(239, 231, 226, 1) -14.07%, rgb(211, 184, 168, 1) 137.12%);
`;

const cardBgDark = css`
  background: linear-gradient(180deg, rgb(58, 38, 23, 0.8) -14.07%, rgb(73, 47, 29, 0.8) 137.12%);
`;

const brunaWrapperCSS = css`
  position: absolute;
  right: -10px;
  bottom: 0;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Line = () => (
  <Stack
    height="full"
    borderRadius={18}
    borderWidth={3}
    borderColor="arqbrown.300"
    position="absolute"
    top="-4"
    right="-4"
    w="full"
    zIndex="-1"
  />
);

const GrupoComp = () => {
  const cardInternal = useColorModeValue(cardInternalCSSLight, cardInternalCSSDark);
  const cardBg = useColorModeValue(cardBgLight, cardBgDark);
  const [shouldBreakTitle] = useMediaQuery('(max-width: 1279px)');

  return (
    <Stack as="article" p={8} width={['95%', '90%', '80%', '60%', 'container.lg']}>
      <Stack display="flex" direction="row" borderRadius={18} css={cardBg} position="relative" width="full">
        <Line />
        <Stack
          display="flex"
          direction="column"
          borderRadius={18}
          p={18}
          css={cardInternal}
          width={['100%', '100%', '50%', '60%', '80%']}
        >
          <Heading
            color="white"
            fontSize={['30', '36']}
            fontFamily="Fira Sans Bold"
            textTransform="uppercase"
            wordBreak="break-all"
          >
            {shouldBreakTitle ? (
              <p>
                Comunidade <br /> Renderizando
              </p>
            ) : (
              `Comunidade Renderizando`
            )}
          </Heading>

          <br />

          <Text color="white" fontSize="18">
            Já pensou em ter acesso gratuito à um grupo onde você poderá ter <b>dicas</b>, <b>bloquinhos</b>{' '}
            configurados, <b>materiais exclusivos</b> e <b>muito mais</b>?
          </Text>

          <br />

          <Text color="white" fontSize="18">
            <b>Entre agora</b> para a nossa comunidade e <b>descomplique</b> a renderização.
          </Text>

          <br />
          <JoinCommunity />
        </Stack>

        <Stack display="flex" justifyContent="flex-end" css={brunaWrapperCSS}>
          <Image
            width={240}
            height={380}
            quality={100}
            placeholder="empty"
            src="/bruna.png"
            alt="Bruna Ferri | Arquiteta"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default GrupoComp;
