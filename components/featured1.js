import { Heading, Box, VStack } from '@chakra-ui/react';
import BookCard from './book/card';
import mockBooks from '../mock/books';

export default function Featured1() {
  return (
    <VStack my={5}>
      <Heading>Mais vendidos</Heading>
      <Box gap={5} display={{ md: 'flex' }}>
        {mockBooks.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </Box>
    </VStack>
  );
}
