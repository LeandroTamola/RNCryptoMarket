import { useNavigation, useRoute } from '@react-navigation/native';
import { RootNavigatorProps, RootNavigatorRouteProp } from '@src/navigation/RootNavigator/types';
import { useCallback, useEffect } from 'react';
import { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import tailwind from 'twrnc';

const green = tailwind.color('green-500') as string;
const darkerGreen = tailwind.color('green-600') as string;

const SuccessScreenViewModel = () => {
  const shouldAnimate = useSharedValue<boolean>(false);
  const navigation = useNavigation<RootNavigatorProps>();
  const { params } = useRoute<RootNavigatorRouteProp<'Success'>>();

  const toggleAnimation = useCallback(() => {
    shouldAnimate.value = true;
  }, [shouldAnimate]);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: withRepeat(withTiming(shouldAnimate.value ? green : darkerGreen, { duration: 3000 }), -1, true),
    };
  });

  useEffect(() => {
    toggleAnimation();
  }, [toggleAnimation]);

  const onContinuePress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Order' }],
    });
  };

  return {
    animatedContainerStyle,
    onContinuePress,
    params,
  };
};

export { SuccessScreenViewModel };
