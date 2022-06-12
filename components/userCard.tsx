// next.js
import NextImage from 'next/image';

// chakra-ui
import { Box, Flex, Text } from '@chakra-ui/react';

// project components
import UserHeader from './userHeader';
import UserStats from './userStats';

const UserCard = ({ user }) => {
  const userMetaData = {
    locataion: user.location || null,
    blog: user.blog || null,
    twitterUsername: user.twitter_username || null,
    company: user.company || null,
  };
  console.log('userMetaData:', userMetaData);

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
