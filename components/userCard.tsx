import { Box, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import UserStats from './userStats';
import UserHeader from './userHeader';

const UserCard = ({ user }) => {
  return (
    <Box
      padding="32px 24px"
      position="relative"
      bgColor="white"
      borderRadius="15px"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    >
      <Flex flexDir="column">
        <UserHeader user={user} />
        <Box>
          <Text fontSize="14px" lineHeight="25px" mb="24px">
            {user.bio}
          </Text>
        </Box>

        <UserStats user={user} />

        <Box display="flex" gap="18px" alignItems="center" mb="16px">
          <NextImage
            src="/icon-location.svg"
            alt="location icon"
            width="14px"
            height="20px"
          />
          <Text>{user.location ?? 'Not Available'}</Text>
        </Box>
        <Box display="flex" gap="18px" alignItems="center" mb="16px">
          <NextImage
            src="/icon-website.svg"
            alt="weblink icon"
            width="20px"
            height="20px"
          />
          <Text>{user.blog || 'Not Available'}</Text>
        </Box>
        <Box display="flex" gap="18px" alignItems="center" mb="16px">
          <NextImage
            src="/icon-twitter.svg"
            alt="twitter icon"
            width="20px"
            height="16px"
          />
          <Text>{user.twitter_username ?? 'Not Available'}</Text>
        </Box>
        <Box display="flex" gap="18px" alignItems="center" mb="16px">
          <NextImage
            src="/icon-company.svg"
            alt="company icon"
            width="20px"
            height="20px"
          />
          <Text>{user.company ?? 'Not Available'}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default UserCard;
