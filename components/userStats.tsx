import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

const UserStats = ({ user }) => {
  return (
    <Flex
      justifyContent="space-around"
      textAlign="center"
      padding="20px 16px"
      mb="24px"
      bgColor={useColorModeValue('light.ghostWhite', 'dark.oxfordBlue')}
      borderRadius="10px"
    >
      <Box>
        <Text fontSize="13px" mb="6px">
          Repos
        </Text>
        <Text fontSize="16px" fontWeight="bold">
          {user.public_repos}
        </Text>
      </Box>
      <Box>
        <Text fontSize="13px" mb="6px">
          Followers
        </Text>
        <Text fontSize="16px" fontWeight="bold">
          {user.followers}
        </Text>
      </Box>
      <Box>
        <Text fontSize="13px" mb="6px">
          Following
        </Text>
        <Text fontSize="16px" fontWeight="bold">
          {user.following}
        </Text>
      </Box>
    </Flex>
  );
};

export default UserStats;
