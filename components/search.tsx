import { Button, Flex, Input } from '@chakra-ui/react';
import Image from 'next/image';

const Search = ({ query, onQueryChange, onSubmit }) => {
  return (
    <Flex
      as="form"
      onSubmit={onSubmit}
      alignItems="center"
      height="60px"
      borderRadius="15px"
      bgColor="white"
      paddingLeft="16px"
      paddingRight="8px"
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
        border="none"
        _focusVisible={{ border: 'none' }}
        width="calc(100% - 120px)"
        value={query}
        onChange={onQueryChange}
      />
      <Button
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
