import { Box } from '@chakra-ui/react';
import Featured from './featured';
import Read from './read';
import mockBooks from '../../mock/books';

const book = mockBooks[0];

export default function ReadingList() {
  return (
    <Box mb={5}>
      <Featured book={book} />
      <Read />
    </Box>
  );
}
