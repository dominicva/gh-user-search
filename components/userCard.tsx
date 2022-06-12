// next.js
import NextImage from 'next/image';

// chakra-ui
import { Box, Flex, Text } from '@chakra-ui/react';

// project components
import UserHeader from './userHeader';
import UserStats from './userStats';
import cleanUserMetData from '../lib/cleanUserMetaData';

const calcGap = iconWidth => {
  const w = Number(iconWidth.slice(0, 2));
  const d = 20 - w;
  const gap = 18 + d;
  return `${gap}px`;
};

const MetaDataRow = ({
  icon,
  iconDimensions = { width: '20px', height: '20px' },
  text,
}) => {
  const opacity = text ? 1 : 0.5;
  const displayedText = text ?? 'Not Available';

  const gap = calcGap(iconDimensions.width);

  return (
    <Box
      display="flex"
      gap={gap}
      alignItems="center"
      mb="16px"
      opacity={opacity}
    >
      <NextImage
        src={`/icon-${icon}.svg`}
        alt={`${icon} icon`}
        width={iconDimensions.width}
        height={iconDimensions.height}
      />
      <Text maxW="calc(100% - 80px)">{displayedText}</Text>
    </Box>
  );
};

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
        <MetaDataRow icon="website" text={blog} />
        <MetaDataRow
          icon="twitter"
          iconDimensions={{ width: '20px', height: '16px' }}
          text={twitterUsername}
        />
        <MetaDataRow icon="company" text={company} />
      </Flex>
    </Box>
  );
};

export default UserCard;
