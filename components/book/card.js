import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function BookCard({ book }) {
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${book.image.url})`,
            filter: 'blur(20px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(25px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={600}
            width={400}
            objectFit={'fill'}
            src={book.image.url}
            alt='card'
          />
        </Box>
        <Stack pt={4} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {book.genre}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {book.title}
          </Heading>
          <Stack direction={'row'} align={'center'} gap={3}>
            <Text fontWeight={800} fontSize={'xl'}>
              {book.price}
            </Text>
            <Button colorScheme={'yellow'}>Comprar</Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
