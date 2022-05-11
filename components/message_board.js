import {
  Container,
  Heading,
  Flex,
  Text,
  Box,
  Avatar,
  HStack,
  Icon,
} from '@chakra-ui/react';
import Image from 'next/image';
import dog from '../assets/dog.svg';
import mockBooks from '../mock/books';
import { FaComment } from 'react-icons/fa';

export default function MessageBoard() {
  return (
    <Container maxW='container.lg' p={3}>
      <HStack>
        <Icon as={FaComment} />
        <Box boxShadow={'lg'} p={3} mb={3}>
          <HStack spacing={3} mb={3}>
            <Avatar
              size={'sm'}
              src={`https://i.pravatar.cc/300?rand=${(Math.random() + 1)
                .toString(36)
                .substring(7)}`}
            />
            <Text fontWeight={'bold'}>Frisk</Text>
            <Text color='gray.600'> Sobre o livro - {mockBooks[0].title}</Text>
          </HStack>
          <Text>Muito empolgante, chorei muito no final</Text>
        </Box>
      </HStack>
      <HStack>
        <Icon as={FaComment} />
        <Box boxShadow={'lg'} p={3} mb={3}>
          <HStack spacing={3} mb={3}>
            <Avatar
              size={'sm'}
              src={`https://i.pravatar.cc/300?rand=${(Math.random() + 1)
                .toString(36)
                .substring(7)}`}
            />
            <Text fontWeight={'bold'}>Undyne</Text>
            <Text color='gray.600'> Sobre o livro - {mockBooks[1].title}</Text>
          </HStack>
          <Text>
            Deixou muito a desejar, as lutas não são empolgantes, o sistema de
            magia é fraco e os personagens não são nada carismáticos
          </Text>
        </Box>
      </HStack>
    </Container>
  );
}
