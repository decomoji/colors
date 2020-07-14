import {
  DecomojiColorsHexValue,
  DecomojiColorsRgbValue,
  DecomojiColorsHslValue,
} from "./DecomojiColorsValue";
import { DecomojiColorsName } from "./DecomojiColorsName";

export interface DecomojiColorsItem {
  name: DecomojiColorsName;
  hex: DecomojiColorsHexValue;
  rgb: DecomojiColorsRgbValue;
  hsl: DecomojiColorsHslValue;
};
