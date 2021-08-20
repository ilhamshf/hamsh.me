import {
  Box,
  Container,
  Flex,
  Stack,
  Text,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

import { BRAND } from 'constants/texts'

export function Footer() {
  const boxColor = useColorModeValue('gray.700', 'gray.200')

  return (
    <Box color={boxColor} as="footer" width="100%">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="5" y="0" fill="rgba(237, 137, 54, 0.18)" />
          <use xlinkHref="#gentle-wave" x="20" y="3" fill="rgba(237, 137, 54, 0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(237, 137, 54, 0.4)" />
          <use xlinkHref="#gentle-wave" x="90" y="30" fill="rgba(237, 137, 54, 0.7)" />
        </g>
      </svg>

      <Box bg="orange.400" width="100%">
        <Container maxW={'5xl'}>
          <Flex
            as={Stack}
            py={4}
            alignItems="center"
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ md: 'space-between' }}
            align={{ md: 'center' }}
          >
            <Text>
              © 2021{' '}
              <Link href={'/'} textDecoration="underline">
                {BRAND}
              </Link>{' '}
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
