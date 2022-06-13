// next.js
import Head from 'next/head';

// react
import { useState } from 'react';

// chakra-ui
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { IoMoon } from 'react-icons/io5';
// single instance of GitHub API client
import octoKit from '../lib/octokit';

// project components
import UserCard from '../components/userCard';
import Search from '../components/search';

function Home() {
  const [displayedUser, setDisplayedUser] = useState({});
  const [isError, setIsError] = useState(false);

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
    <Box h="100vh" w="100vw" bgColor="light.ghostWhite" padding="32px 24px">
      <Head>
        <title>GitHub User Search App</title>
        <meta name="description" content="An app to look up GitHub users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Flex justify="space-between" mb="36px">
          <Heading color="light.gunmetal">devfinder</Heading>
          <Flex
            as="button"
            alignItems="center"
            gap="16px"
            color="light.queenBlue"
            _hover={{ color: 'light.gunmetal' }}
            aria-label="Toggle Color Mode"
          >
            <Text>Dark</Text>
            <Icon as={IoMoon} width={30} height={30} />
          </Flex>
        </Flex>

        <Search onSubmit={handleSubmit} isError={isError} />

        <UserCard user={displayedUser} />
      </main>
    </Box>
  );
}

export default Home;
