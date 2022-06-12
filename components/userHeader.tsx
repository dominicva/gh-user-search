import { Box, Flex, Image, Heading } from '@chakra-ui/react';
import formatDate from '../lib/formatDate';

const UserHeader = ({ user }) => {
  const dateJoined = formatDate(user.created_at);

  return (
    <Flex gap="20px" mb="32px">
      <Box>
        {user.avatar_url ? (
          <Image
            src={user.avatar_url}
            alt="user avatar"
            width="80px"
            height="80px"
            borderRadius="50%"
          />
        ) : null}
      </Box>

      <Box>
        <Heading
          as="h3"
          fontSize="18px"
          fontWeight="700"
          color="light.gunmetal"
        >
          {user.name}
        </Heading>
        <Heading
          as="h4"
          fontSize="14px"
          lineHeight="25px"
          mb="6px"
          color="light.blueCrayola"
        >
          <a href={`https://github.com/${user.login}`} target="__blank">
            @{user.login}
          </a>
        </Heading>
        <Heading as="h5" fontSize="14px" lineHeight="25px">
          Joined {dateJoined}
        </Heading>
      </Box>
    </Flex>
  );
};

export default UserHeader;
