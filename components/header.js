import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  Text,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Image from 'next/image';
import logo from '../assets/logo.png';
import headerLinks from '../util/header_links';
import NextLink from 'next/link';

const NavLink = ({ children, to }) => (
  <NextLink href={to} passHref>
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      fontSize='lg'
    >
      {children}
    </Link>
  </NextLink>
);
const logoAspect = logo.width / logo.height;

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{
            md: 'none',
          }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box p={1}>
          <Image
            width={70 * logoAspect}
            height={70}
            src={logo.src}
            alt='logo'
          />
        </Box>
        {/* Center this */}
        <HStack
          as={'nav'}
          spacing={4}
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          {headerLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.title}
            </NavLink>
          ))}
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              padding={1}
            >
              <HStack alignItems='center' spacing={4}>
                <Text>Taylor Swift</Text>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box
          pb={4}
          display={{
            md: 'none',
          }}
        >
          <Stack as={'nav'} spacing={4}>
            {headerLinks.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
