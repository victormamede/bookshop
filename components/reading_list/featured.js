import { Box, Heading, HStack, VStack, Text } from '@chakra-ui/react';
import BookCover from '../book/cover';

export default function Featured({ book }) {
  return (
    <VStack gap={3} justifyContent={'center'} mb={5}>
      <Heading>Próxima leitura</Heading>
      <HStack
        alignItems={'flex-start'}
        gap={3}
        display={['block', 'block', 'flex']}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
      >
        <BookCover book={book} />
        <Box maxW='sm'>
          <Heading size='lg' mb={3}>
            {book.title}
          </Heading>
          <Text>Gênero: {book.genre}</Text>
          <Text mb={5}>Valor: {book.price}</Text>
          <Heading size='md'>Sinopse</Heading>
          <Text>{book.synopsis}</Text>
        </Box>
      </HStack>
    </VStack>
  );
}
