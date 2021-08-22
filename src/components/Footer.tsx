import {
  Box,
  Container,
  Flex,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue
} from '@chakra-ui/react'

import {
  login,
  register,
  tentang,
  blog,
  ketentuanLayanan,
  kebijakanPrivasi,
  github,
  splitbeeAnalytics
} from 'constants/paths'  


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
          <use xlinkHref="#gentle-wave" x="5" y="0" fill="rgba(0, 118, 200, 0.18)" />
          <use xlinkHref="#gentle-wave" x="20" y="3" fill="rgba(0, 118, 200, 0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0, 118, 200, 0.4)" />
          <use xlinkHref="#gentle-wave" x="90" y="30" fill="rgba(0, 118, 200, 0.7)" />
        </g>
      </svg>

      <Box width="100%">
        <Container maxW={'5xl'}>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={8} py={4}>
            <Stack align={'flex-start'}>
              <Text fontWeight="700" color="#0076C8" fontSize={'lg'} mb={2}>
                Lebih banyak
              </Text>
              <Link href={tentang}>Tentang Hamsh.me</Link>
              <Link href={blog}>Blog</Link>
              <Link href={login}>Masuk</Link>
              <Link href={register}>Daftar</Link>
            </Stack>

            <Stack align={'flex-start'}>
              <Text fontWeight="700" color="#0076C8" fontSize={'lg'} mb={2}>
                Kebijakan
              </Text>
              <Link href={kebijakanPrivasi}>Kebijakan Privasi</Link>
              <Link href={ketentuanLayanan}>Ketentuan Layanan</Link>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Box bg="#0076C8" width="100%">
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
            <Text color='white.400'>
              © 2021 Build By{' '}
              <Link href={'https://instagram.com/ilham.shff'} textDecoration="underline">
              Ilham Shofa
              </Link>{' '}
              based on {' '}
              <Link href={'https://Hamsh.me'} textDecoration="underline">
                Hamsh.me
              </Link>{' '}
            </Text>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}
