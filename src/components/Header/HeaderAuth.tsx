import { Button, Flex } from '@chakra-ui/react'

import {
  Text
} from '@chakra-ui/react'

import { HiLogout } from 'react-icons/hi'

import { useAuthContext } from 'context/Auth'
import { DarkModeSwitch } from '../DarkModeSwitch'

import { handleLogout } from 'libs/supabase'

export function Header() {
  const { isLoading, isLogin } = useAuthContext()

  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      p="4"
      as="header"
      zIndex="3"
      bg="orange.400"
    >
      
      <Text color="#fff" fontSize="xs">
              hamsh.me
      </Text>

      <Flex justifyContent="space-between" alignItems="center">
        {!isLoading && isLogin && (
          <Button
            px={6}
            color={'white'}
            bg="red.400"
            _hover={{
              bg: 'red.500'
            }}
            mr="2"
            onClick={handleLogout}
            leftIcon={<HiLogout />}
          >
            Keluar
          </Button>
        )}
        <DarkModeSwitch />
      </Flex>
    </Flex>
  )
}
