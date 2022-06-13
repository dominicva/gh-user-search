// next.js
import Head from 'next/head';

// react
import { useState } from 'react';

// chakra-ui
import {
  Box,
  Flex,
  Heading,
  Text,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

// icons
import { IoMoon, IoSunny } from 'react-icons/io5';

// single instance of GitHub API client
import octoKit from '../lib/octokit';

// project components
import UserCard from '../components/userCard';
import Search from '../components/search';

function Home() {
  const [displayedUser, setDisplayedUser] = useState({});
  const [isError, setIsError] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('light.ghostWhite', 'dark.oxfordBlue');
  const color = useColorModeValue('light.queenBlue', 'white');

  const getUser = async username => {
    try {
      const { data: user } = await octoKit.request('GET /users/{username}', {
        username,
      });

      setDisplayedUser(user);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.error(`Hello, letting you know about this error :)) \n ${error}`);
    }
  };

  const handleSubmit = (username, e) => {
    // ?. – prevents error. Search invokes this once on app init
    e?.preventDefault();
    getUser(username);
  };

  return (
    <Box
      h="100vh"
      w="100vw"
      bg={bg}
      color={color}
      padding="32px 24px"
      overflow="scroll"
    >
      <Head>
        <title>GitHub User Search App</title>
        <meta name="description" content="An app to look up GitHub users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ maxWidth: '574px', margin: 'auto' }}>
        <Flex justify="space-between" mb="36px">
          <Heading
            fontSize="26px"
            color={useColorModeValue('light.gunmetal', 'white')}
          >
            devfinder
          </Heading>
          <Flex
            as="button"
            alignItems="center"
            gap="16px"
            color={color}
            _hover={{
              color: useColorModeValue('light.gunmetal', 'dark.blueYonder'),
            }}
            aria-label="Toggle Color Mode"
            onClick={toggleColorMode}
          >
            <Text fontSize="13px" fontWeight="700" letterSpacing="2.5px">
              {colorMode === 'light' ? 'DARK' : 'LIGHT'}
            </Text>
            <Icon
              as={colorMode === 'light' ? IoMoon : IoSunny}
              width={30}
              height={30}
            />
          </Flex>
        </Flex>

        <Search onSubmit={handleSubmit} isError={isError} />

        <UserCard user={displayedUser} />
      </main>
    </Box>
  );
}

export default Home;
