// next.js
import Head from 'next/head';
import Image from 'next/image';

// react
import { useState } from 'react';

// chakra-ui
import { Box, Flex, Heading } from '@chakra-ui/react';

// single instance of GitHub API client
import octoKit from '../lib/octokit';

// project components
import UserCard from '../components/userCard';
import Search from '../components/search';

function Home() {
  const [query, setQuery] = useState('');
  const [userResult, setUserResult] = useState({});

  const getUser = async username => {
    try {
      const { data: user } = await octoKit.request('GET /users/{username}', {
        username,
      });

      setUserResult(user);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQueryChange = e => setQuery(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    getUser(query);
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
          <Flex alignItems="center" gap="16px" color="light.queenBlue">
            Dark{' '}
            <Image src="/moon.svg" alt="moon icon" width={30} height={30} />
          </Flex>
        </Flex>

        <Search
          query={query}
          onQueryChange={handleQueryChange}
          onSubmit={handleSubmit}
        />

        <UserCard user={userResult} />
      </main>
    </Box>
  );
}

export default Home;
