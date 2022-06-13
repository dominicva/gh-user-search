// chakra-ui
import { Box, Flex, Image, Heading, useColorModeValue } from '@chakra-ui/react';

// helper from lib dir
import formatDate from '../lib/formatDate';

const UserHeader = ({ user }) => {
  const dateJoined = formatDate(user.created_at);

  return (
    <Flex gap={['20px', '40px']} mb={['32px', '24px']} mt={['0', '8px']}>
      <Box>
        {user.avatar_url ? (
          <Image
            src={user.avatar_url}
            alt="user avatar"
            width={['80px', '116px']}
            height={['80px', '116px']}
            borderRadius="50%"
          />
        ) : null}
      </Box>

      <Box>
        <Heading
          as="h3"
          fontSize={['18px', '26px']}
          fontWeight="700"
          color={useColorModeValue('light.gunmetal', 'white')}
        >
          {user.name}
        </Heading>
        <Heading
          as="h4"
          fontSize={['13px', '16px']}
          lineHeight="25px"
          mt={['1px', '3px']}
          mb={['3px', '5px']}
          color="light.blueCrayola"
        >
          <a href={`https://github.com/${user.login}`} target="__blank">
            @{user.login}
          </a>
        </Heading>
        <Heading
          as="h5"
          fontSize={['13px', '15px']}
          lineHeight="25px"
          fontWeight="400"
          color={useColorModeValue('light.gray', 'white')}
        >
          Joined {dateJoined}
        </Heading>
      </Box>
    </Flex>
  );
};

export default UserHeader;
