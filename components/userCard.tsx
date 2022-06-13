// chakra-ui
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';

// project components
import UserHeader from './userHeader';
import UserStats from './userStats';
import MetaDataRow from './metaDataRow';

// helper(s) from lib dir
import cleanUserMetaData from '../lib/cleanUserMetaData';

const UserCard = ({ user }) => {
  const { location, blog, twitterUsername, company } = cleanUserMetaData(user);

  const userBio = user.bio ? (
    <Text fontSize={['13px', '15px']} lineHeight="25px" mb={['24px', '32px']}>
      {user.bio}
    </Text>
  ) : (
    <Text
      fontSize={['13px', '15px']}
      lineHeight="25px"
      mb={['24px', '32px']}
      opacity="0.5"
    >
      This profile has no bio.
    </Text>
  );

  return (
    <Box
      padding="32px 24px"
      position="relative"
      bg={useColorModeValue('white', 'dark.spaceCadet')}
      borderRadius="15px"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
    >
      <Flex flexDir="column" marginBottom="16px">
        <UserHeader user={user} />
        <Box>{userBio}</Box>

        <UserStats user={user} />

        <Flex flexDir={['column', , 'row']} gap={{ md: '60px' }}>
          <Box>
            <MetaDataRow
              icon="location"
              iconDimensions={{ width: '14px', height: '20px' }}
              text={location}
            />
            <MetaDataRow icon="website" text={blog} linkUrl={blog ?? null} />
          </Box>
          <Box>
            <MetaDataRow
              icon="twitter"
              iconDimensions={{ width: '20px', height: '16px' }}
              text={twitterUsername}
              linkUrl={
                twitterUsername
                  ? `https://twitter.com/${twitterUsername}`
                  : null
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
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default UserCard;
