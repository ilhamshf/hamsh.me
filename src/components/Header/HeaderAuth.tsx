import { Link, Button, Flex } from '@chakra-ui/react'
import Image from 'next/image'


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
      bg="#0076C8"
    >
      
      <Link
        href={'/'}
        name="Beranda"
        _hover={{
          textDecoration: 'none'
        }}
      >
        <Image
          width={81}
          height={50}
          src={'/images/white/header.png'}
          alt="wm"
        />
      </Link> 

      <Flex justifyContent="space-between" alignItems="center">
        {!isLoading && isLogin && (
          <Button
            px={6}
            color={'white'}
            bg="#FF2700"
            _hover={{
              bg: '#A41900'
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
