import { useState, useEffect } from 'react';
import { Button, Flex, Input, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

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
      onSubmit={e => onSubmit(query, e)}
      alignItems="center"
      height="60px"
      borderRadius="15px"
      bg={useColorModeValue('white', 'dark.spaceCadet')}
      paddingLeft="16px"
      paddingRight={isError ? '8px' : '0px'}
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      mb="16px"
    >
      <Image
        src="/icon-search.svg"
        alt="search icon"
        width={25}
        height={25}
        color="light.blueCrayola"
      />
      <Input
        placeholder="Search GitHub username..."
        _placeholder={{ color: useColorModeValue('light.queenBlue', 'white') }}
        border="none"
        _focusVisible={{ border: 'none' }}
        width="calc(100% - 120px)"
        value={query}
        onChange={handleQueryChange}
      />
      <Text
        fontSize="13px"
        fontWeight="700"
        color="light.tartOrange"
        display={isError ? 'block' : 'none'}
      >
        No results
      </Text>
      <Button
        type="submit"
        backgroundColor="light.blueCrayola"
        color="white"
        fontSize="14px"
        h="46px"
        width="84px"
        _hover={{ backgroundColor: 'light.skyBlue' }}
      >
        Search
      </Button>
    </Flex>
  );
};

export default Search;
