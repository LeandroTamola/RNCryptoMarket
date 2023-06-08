import { TouchableOpacityProps } from 'react-native';

export type HitSlopType = 'noHitSlop' | 'lightHitSlop' | 'mediumHitSlop';

export const hitSlop: Record<HitSlopType, TouchableOpacityProps['hitSlop']> = {
  noHitSlop: { top: 0, bottom: 0, left: 0, right: 0 },
  lightHitSlop: { top: 10, bottom: 10, right: 10, left: 10 },
  mediumHitSlop: { top: 20, bottom: 20, right: 20, left: 20 },
};
