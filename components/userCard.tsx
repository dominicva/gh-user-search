import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';

const formatDate = dateString => {
  const date = new Date(dateString).toDateString();
  const arr = date.split(' ');

  const pt1 = arr.slice(1, -1).reverse();
  const pt2 = arr.at(-1);

  return [...pt1, pt2].join(' ');
};

const UserCard = ({ user }) => {
  const dateJoined = formatDate(user.created_at);

  return (
    <Box
      padding="32px 24px"
      position="relative"
      bgColor="white"
      borderRadius="15px"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    >
      <Flex flexDir="column">
        <Flex gap="20px" mb="32px">
          <Box>
            {user.avatar_url ? (
              <Image
                src={user.avatar_url}
                alt="user avatar"
                width="70px"
                height="70px"
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
            <Heading as="h4" fontSize="14px" mb="6px" color="light.blueCrayola">
              <a href={`https://github.com/${user.login}`} target="__blank">
                @{user.login}
              </a>
            </Heading>
            <h4>Joined {dateJoined}</h4>
          </Box>
        </Flex>
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
          {user.twitter_username ? (
            <a
              href={`https://twitter.com/${user.twitter_username}`}
              target="__blank"
            >
              @{user.twitter_username}
            </a>
          ) : (
            'Not available'
          )}
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
