import { Container, Heading, Flex, Text, Box } from '@chakra-ui/react';
import Image from 'next/image';
import dog from '../assets/dog.svg';

export default function FeedHero() {
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
        <Text as={'span'} color={'yellow.400'}>
          Feed
        </Text>
      </Heading>
      <Image src={dog} width={300} height={300} alt='book' />
    </Flex>
  );
}
