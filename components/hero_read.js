import { Box, Heading, Text, HStack, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import book from '../assets/book2.svg';

export default function HeroRead() {
  return (
    <Flex
      as={Box}
      textAlign={'center'}
      justifyContent='center'
      alignItems={'center'}
      display={['block', 'block', 'flex']}
      gap={5}
      flexDir='row-reverse'
      p={3}
    >
      <Heading fontWeight={600} lineHeight={'110%'}>
        <Text as={'span'}>Lista de</Text>{' '}
        <Text as={'span'} color={'yellow.400'}>
          Leitura
        </Text>
      </Heading>
      <Image src={book} width={300} height={300} alt='book' />
    </Flex>
  );
}
