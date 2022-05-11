import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  HStack,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from '@chakra-ui/react';
import Image from 'next/image';
import book from '../assets/book2.svg';

export default function HeroRead() {
  return (
    <HStack
      as={Box}
      textAlign={'center'}
      justifyContent='center'
      spacing={{ base: 8, md: 14 }}
    >
      <Image src={book} width={300} height={300} alt='book' />
      <Heading
        fontWeight={600}
        fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
        lineHeight={'110%'}
      >
        <Text as={'span'}>Lista de</Text>{' '}
        <Text as={'span'} color={'yellow.400'}>
          Leitura
        </Text>
      </Heading>
    </HStack>
  );
}
