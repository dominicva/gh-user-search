import { Box, Flex, Text } from '@chakra-ui/react';

const UserStats = ({ user }) => {
  return (
    <Flex
      justifyContent="space-around"
      textAlign="center"
      padding="18px 16px"
      mb="24px"
      bgColor="light.ghostWhite"
      borderRadius="10px"
    >
      <Box>
        <Text fontSize="13px">Repos</Text>
        <Text fontSize="16px" fontWeight="bold">
          {user.public_repos}
        </Text>
      </Box>
      <Box>
        <Text fontSize="13px">Followers</Text>
        <Text fontSize="16px" fontWeight="bold">
          {user.followers}
        </Text>
      </Box>
      <Box>
        <Text fontSize="13px">Following</Text>
        <Text fontSize="16px" fontWeight="bold">
          {user.following}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserStats;
