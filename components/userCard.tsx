// chakra-ui
import { Box, Flex, Text } from '@chakra-ui/react';

// project components
import UserHeader from './userHeader';
import UserStats from './userStats';
import MetaDataRow from './metaDataRow';

// helper(s) from lib dir
import cleanUserMetData from '../lib/cleanUserMetaData';

const UserCard = ({ user }) => {
  const { location, blog, twitterUsername, company } = cleanUserMetData(user);

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

        <MetaDataRow
          icon="location"
          iconDimensions={{ width: '14px', height: '20px' }}
          text={location}
        />
        <MetaDataRow icon="website" text={blog} linkUrl={blog ?? null} />
        <MetaDataRow
          icon="twitter"
          iconDimensions={{ width: '20px', height: '16px' }}
          text={twitterUsername}
          linkUrl={
            twitterUsername ? `https://twitter.com/${twitterUsername}` : null
          }
        />
        <MetaDataRow
          icon="company"
          text={company}
          linkUrl={
            company
              ? `https://github.com/${
                  company.startsWith('@') ? company.slice(1) : company
                }`
              : null
          }
        />
      </Flex>
    </Box>
  );
};

export default UserCard;
