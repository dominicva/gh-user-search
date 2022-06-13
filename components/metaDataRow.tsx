// import NextImage from 'next/image';
import { Box, Text, Image, useColorMode } from '@chakra-ui/react';
import calcGap from '../lib/calcGap';

const MetaDataRow = ({
  icon,
  iconDimensions = { width: '20px', height: '20px' },
  text = null,
  linkUrl = null,
}) => {
  // derived state
  const opacity = text ? 1 : 0.5;

  const { colorMode } = useColorMode();

  const exactIcon =
    colorMode === 'light' ? `/icon-${icon}.svg` : `/icon-${icon}-dark-mode.svg`;

  const displayedText = text ?? 'Not Available';

  const gap = calcGap(iconDimensions.width);

  const innerText = linkUrl ? (
    <a href={linkUrl} target="__blank">
      {displayedText}
    </a>
  ) : (
    displayedText
  );

  return (
    <Box
      display="flex"
      gap={gap}
      alignItems="center"
      mb="16px"
      opacity={opacity}
      _hover={{
        textDecoration:
          opacity === 1 && icon !== 'location' ? 'underline' : 'none',
      }}
    >
      <Image
        src={exactIcon}
        alt={`${icon} icon`}
        width={iconDimensions.width}
        height={iconDimensions.height}
      />
      <Text maxW="calc(100% - 80px)">{innerText}</Text>
    </Box>
  );
};

export default MetaDataRow;
