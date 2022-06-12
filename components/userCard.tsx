import { Box, Flex, Text } from '@chakra-ui/react';

/**
 *
 * @ bio
- email
- blog
- created_at
- followers
- following
- id
- location
- name
- public_repos
- twitter_username
- login -->
 * @
 */
const UserCard = ({ user }) => {
  return (
    <Box>
      <Flex flexDir="column">
        {user.avatar_url ? (
          <img
            src={user?.avatar_url}
            alt="user avatar"
            width={32}
            height={32}
          />
        ) : null}

        <h2>{user.name}</h2>
        <h3>@{user.login}</h3>
        <h4>{new Date(user.created_at).toDateString()}</h4>
        <Box>
          <Text>{user.bio}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserCard;
