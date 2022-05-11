import {
  Container,
  Heading,
  Flex,
  Text,
  Box,
  Avatar,
  HStack,
  Icon,
  Divider,
  VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import dog from '../assets/dog.svg';
import mockBooks from '../mock/books';
import { FaComment } from 'react-icons/fa';

export default function MessageBoard() {
  return (
    <Container maxW='container.lg' p={3}>
      <VStack spacing={4} alignItems='flex-start'>
        <HStack>
          <Icon as={FaComment} />
          <Box boxShadow={'lg'} p={3} mb={3}>
            <HStack spacing={3} mb={3}>
              <Avatar size={'sm'} src={'/Frisk.webp'} />
              <Text fontWeight={'bold'}>Frisk</Text>
              <Text color='gray.600'>Sobre o livro - {mockBooks[0].title}</Text>
            </HStack>
            <Text>Muito empolgante, chorei muito no final</Text>
          </Box>
        </HStack>
        <HStack>
          <Icon as={FaComment} />
          <Box boxShadow={'lg'} p={3} mb={3}>
            <HStack spacing={3} mb={3}>
              <Avatar size={'sm'} src={'/Undyne.webp'} />
              <Text fontWeight={'bold'}>Undyne</Text>
              <Text color='gray.600'>Sobre o livro - {mockBooks[1].title}</Text>
            </HStack>
            <Text>
              Deixou muito a desejar, as lutas não são empolgantes, o sistema de
              magia é fraco e os personagens não são nada carismáticos
            </Text>
          </Box>
        </HStack>
        <HStack>
          <Icon as={FaComment} />
          <Box boxShadow={'lg'} p={3} mb={3}>
            <HStack spacing={3} mb={3}>
              <Avatar size={'sm'} src={'/Sans.webp'} />
              <Text fontWeight={'bold'}>Sans</Text>
              <Text color='gray.600'>Sobre o livro - {mockBooks[2].title}</Text>
            </HStack>
            <Text fontFamily={'"Comic Sans", cursive, sans-serif'}>
              Bom, vou recomendar para o meu irmão
            </Text>
          </Box>
        </HStack>
        <HStack>
          <Icon as={FaComment} />
          <Box boxShadow={'lg'} p={3} mb={3}>
            <HStack spacing={3} mb={3}>
              <Avatar size={'sm'} src={'/papyrus.png'} />
              <Text fontWeight={'bold'}>Papyrus</Text>
              <Text color='gray.600'>Sobre o livro - {mockBooks[2].title}</Text>
            </HStack>
            <Text fontFamily={'Papyrus,fantasy'} fontSize={'4xl'}>
              TODAS AS LETRAS E PERSONAGENS ESTAVAM DE CABEÇA PARA BAIXO E TINHA
              98 VOLUMES
            </Text>
          </Box>
        </HStack>
        <HStack>
          <Icon as={FaComment} />
          <Box boxShadow={'lg'} p={3} mb={3}>
            <HStack spacing={3} mb={3}>
              <Avatar size={'sm'} src={'/Chara.webp'} />
              <Text fontWeight={'bold'}>Chara</Text>
              <Text color='gray.600'>Sobre o livro - {mockBooks[3].title}</Text>
            </HStack>
            <Text>No final o protagonista morre</Text>
          </Box>
        </HStack>
      </VStack>
      <Divider my={5} />
    </Container>
  );
}
