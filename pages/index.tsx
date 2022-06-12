import Head from 'next/head';
import Image from 'next/image';
import { Box, Flex, Heading, Input, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box
      id="app"
      h="100vh"
      w="100vw"
      bgColor="light.ghostWhite"
      padding="32px 24px"
    >
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

        <Flex
          alignItems="center"
          height="60px"
          borderRadius="15px"
          bgColor="white"
          paddingLeft="16px"
          paddingRight="8px"
          filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        >
          <Image
            src="/icon-search.svg"
            width={25}
            height={25}
            color="light.blueCrayola"
          />
          <Input
            placeholder="Search GitHub username..."
            border="none"
            _focusVisible={{ border: 'none' }}
            width="calc(100% - 120px)"
          />
          <Button
            backgroundColor="light.blueCrayola"
            color="white"
            fontSize="14px"
            h="46px"
            width="84px"
          >
            Search
          </Button>
        </Flex>

        <div>search</div>
        <div>user card</div>
      </main>

      <footer></footer>
    </Box>
  );
}
