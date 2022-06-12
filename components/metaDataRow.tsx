import NextImage from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import calcGap from '../lib/calcGap';

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

export default MetaDataRow;
