import { Box, Flex } from '@chakra-ui/react';

const UserCard = ({ user }) => {
  return (
    <Box>
      <Flex>
        {user.avatar_url ? (
          <img
            src={user?.avatar_url}
            alt="user avatar"
            width={32}
            height={32}
          />
        ) : null}
      </Flex>
    </Box>
  );
};

export default UserCard;
