import { Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import BookCover from '../book/cover';
import mockBooks from '../../mock/books';

export default function Read() {
  return (
    <Container maxW='container.lg' mb={3}>
      <Heading mb={3}>Minha lista</Heading>
      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(6, 1fr)']}
        gap={6}
      >
        {mockBooks.map((book) => (
          <GridItem key={book.id}>
            <BookCover book={book} />
          </GridItem>
        ))}
        {mockBooks.map((book) => (
          <GridItem key={book.id}>
            <BookCover book={book} read />
          </GridItem>
        ))}
        {mockBooks.map((book) => (
          <GridItem key={book.id}>
            <BookCover book={book} read />
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
}
