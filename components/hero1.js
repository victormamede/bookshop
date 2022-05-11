import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import book from '../assets/book.svg';

export default function Hero() {
  return (
    <Container maxW={'5xl'}>
      <Flex
        flexDir={{ sm: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='center'
      >
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
          >
            Sua livraria <Text color='yellow.400'>Online</Text>
          </Heading>
          <Text color={'gray.500'} maxW={'3xl'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque et dignissim nibh, eget aliquam risus. Maecenas et
            ornare massa.
          </Text>
        </Stack>
        <Image src={book} width={500} height={500} alt='book' />
      </Flex>
    </Container>
  );
}
