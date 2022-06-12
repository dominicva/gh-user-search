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
  console.log('user:', user);

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
        <Flex>
          <Box>
            <Text>Repos</Text>
            {user.public_repos}
          </Box>
          <Box>
            <Text>Followers</Text>
            {user.followers}
          </Box>
          <Box>
            <Text>Following</Text>
            {user.following}
          </Box>
        </Flex>
        <Box>
          <Text>Location</Text>
          {user.location}
        </Box>
        <Box>
          <Text>Blog</Text>
          <a href={user.blog} target="__blank">
            {user.blog}
          </a>
        </Box>
        <Box>
          <Text>Twitter handle</Text>
          {user.twitter_username ? user.twitter_username : 'Not available'}
        </Box>
        <Box>
          <Text>Works at</Text>
          {user.company}
        </Box>
      </Flex>
    </Box>
  );
};

export default UserCard;
