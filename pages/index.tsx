// next.js
import Head from 'next/head';
import Image from 'next/image';
// react
import { useState } from 'react';
// chakra-ui
import { Box, Flex, Heading } from '@chakra-ui/react';
// local instance of GitHub API client
import octoKit from '../lib/octokit';
// local project components
import UserCard from '../components/userCard';
import Search from '../components/search';

export default function Home() {
  const [query, setQuery] = useState('');
  const [userResult, setUserResult] = useState({});

  async function getUser(username) {
    try {
      const { data: user } = await octoKit.request('GET /users/{username}', {
        username,
      });

      setUserResult(user);
    } catch (error) {
      console.error(error);
    }
  }

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
          onQueryChange={e => setQuery(e.target.value)}
          onSubmit={e => {
            e.preventDefault();
            getUser(query);
          }}
        />

        <UserCard user={userResult} />
      </main>
    </Box>
  );
}
