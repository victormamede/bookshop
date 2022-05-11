import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

export default function Contact() {
  const { hasCopied, onCopy } = useClipboard('example@example.com');

  return (
    <Flex bg={'gray.100'} align='center' justify='center' id='contact'>
      <Box
        borderRadius='lg'
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}
            >
              Fale conosco
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'column', md: 'row' }}
            >
              <Stack
                align='center'
                justify='space-around'
                direction={{ base: 'row', md: 'column' }}
              >
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    aria-label='email'
                    variant='ghost'
                    size='lg'
                    fontSize='3xl'
                    icon={<MdEmail />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href='#'>
                  <IconButton
                    aria-label='github'
                    variant='ghost'
                    size='lg'
                    fontSize='3xl'
                    icon={<BsGithub />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href='#'>
                  <IconButton
                    aria-label='twitter'
                    variant='ghost'
                    size='lg'
                    icon={<BsTwitter size='28px' />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>

                <Link href='#'>
                  <IconButton
                    aria-label='linkedin'
                    variant='ghost'
                    size='lg'
                    icon={<BsLinkedin size='28px' />}
                    _hover={{
                      bg: 'blue.500',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius='lg'
                p={8}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow='base'
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Nome</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input type='text' name='name' placeholder='Seu nome' />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <MdOutlineEmail />
                      </InputLeftElement>
                      <Input
                        type='email'
                        name='email'
                        placeholder='Seu Email'
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Mensagem</FormLabel>

                    <Textarea
                      name='message'
                      placeholder='Sua mensagem'
                      rows={6}
                      resize='none'
                    />
                  </FormControl>

                  <Button
                    colorScheme='blue'
                    bg='yellow.400'
                    color='white'
                    _hover={{
                      bg: 'yellow.500',
                    }}
                    isFullWidth
                  >
                    Enviar mensagem
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
