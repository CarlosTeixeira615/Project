import { Dimensions, PixelRatio } from "react-native";

export const { width } = Dimensions.get("window");

// based on Honor Play L29 scale
const scale = width / 420;
const normalize = (size) => {
  const newSize = size * scale;

  return parseFloat(PixelRatio.roundToNearestPixel(newSize).toFixed(2));
};

export default normalize;
