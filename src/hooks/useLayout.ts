import { useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

const useLayout = () => {
  const [layout, setLayout] = useState<LayoutRectangle | null>(null);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height, width } = event.nativeEvent.layout;
    (width || height) && !layout && setLayout(event.nativeEvent.layout);
  };

  return { onLayout, layout };
};

export { useLayout };
