import { useNavigation, useRoute } from '@react-navigation/native';
import { RootNavigatorProps, RootNavigatorRouteProp } from '@src/navigation/RootNavigator/types';
import { useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import tailwind from 'twrnc';

const green = tailwind.color('green-400') as string;
const darkerGreen = tailwind.color('green-600') as string;

const SuccessScreenViewModel = () => {
  const shouldAnimate = useSharedValue<boolean>(false);
  const navigation = useNavigation<RootNavigatorProps>();
  const { params } = useRoute<RootNavigatorRouteProp<'Success'>>();

  const toggleAnimation = () => {
    'worklet';
    shouldAnimate.value = true;
  };

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withRepeat(withTiming(shouldAnimate.value ? green : darkerGreen, { duration: 3000 }), -1, true),
    };
  });

  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(shouldAnimate.value ? 1 : 0, { duration: 2000 }),
    };
  });

  useEffect(() => {
    toggleAnimation();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onContinuePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Order' }],
    });
  };

  return {
    animatedContainerStyle,
    animatedContentStyle,
    onContinuePress,
    params,
  };
};

export { SuccessScreenViewModel };
