import { Box, Center, Flex, Icon, Text, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { FaRegCheckCircle } from 'react-icons/fa';

export default function BookCover({ book, read = false }) {
  return (
    <Box position={'relative'}>
      <Box className='next-image'>
        <Image
          rounded={'lg'}
          height={600}
          width={400}
          objectFit={'fill'}
          src={book.image.url}
          alt='card'
        />
      </Box>
      {read && (
        <Center
          position='absolute'
          flexDir={'column'}
          inset={0}
          backgroundColor='rgba(0, 0, 0, 0.6)'
        >
          <Icon w={16} h={16} as={FaRegCheckCircle} color={'gray.100'} />
          <Text color={'gray.100'}>Lido</Text>
        </Center>
      )}
    </Box>
  );
}
