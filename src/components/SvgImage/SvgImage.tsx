import React, { memo } from 'react';

import { SvgProps } from 'react-native-svg';
import { SVG_IMAGES } from './constants';
import tailwind from 'twrnc';

export type SvgImageName = keyof typeof SVG_IMAGES;

export type SvgImageProps = SvgProps & {
  name: SvgImageName;
  color?: string;
};

const SvgImage = ({ name, color = 'white', ...props }: SvgImageProps) => {
  const SVG = SVG_IMAGES[name];
  return <SVG fill={tailwind.color(color)} fillOpacity={1} {...props} accessible />;
};

const Memoized = memo(SvgImage);

export { Memoized as SvgImage };
