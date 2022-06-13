// react
import { useState, useEffect } from 'react';

// chakra-ui
import {
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';

const Search = ({ onSubmit, isError }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    onSubmit('octocat');
    // empty deps – run once to init octocat as default
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleQueryChange = e => setQuery(e.target.value);

  return (
    <Flex
      as="form"
      onSubmit={e => {
        onSubmit(query, e);
        setQuery('');
      }}
      alignItems="center"
      justify="space-between"
      height={['60px', '68px']}
      borderRadius="15px"
      bg={useColorModeValue('white', 'dark.spaceCadet')}
      paddingLeft={['8px', '16px']}
      paddingRight={['8px', '10px']}
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      mb={{ base: '16px', md: '24px' }}
    >
      <InputGroup>
        <InputLeftElement>
          <Image
            src="/icon-search.svg"
            alt="search icon"
            width={25}
            height={25}
            color="light.blueCrayola"
          />
        </InputLeftElement>
        <Input
          placeholder="Search GitHub username..."
          marginLeft={['4px', '16px']}
          _placeholder={{
            color: useColorModeValue('light.queenBlue', 'white'),
          }}
          border="none"
          _focusVisible={{ border: 'none' }}
          value={query}
          onChange={handleQueryChange}
        />
      </InputGroup>
      <Text
        fontSize={{ base: '11px', sm: '13px' }}
        fontWeight="700"
        color="light.tartOrange"
        marginRight={{ base: '4px', sm: '24px' }}
        minW="80px"
        display={isError ? 'inline' : 'none'}
      >
        No results
      </Text>
      <Button
        type="submit"
        backgroundColor="light.blueCrayola"
        color="white"
        fontSize="14px"
        h={{ base: '46px', xl: '50px' }}
        minWidth={{ base: '84px', sm: '94px', md: '114px' }}
        _hover={{ backgroundColor: 'light.skyBlue' }}
      >
        Search
      </Button>
    </Flex>
  );
};

export default Search;
