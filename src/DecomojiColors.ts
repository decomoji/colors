export type DecomojiColorsName =
  | "tomato"
  | "chocolate"
  | "gold"
  | "olive"
  | "forest"
  | "teal"
  | "cerulean"
  | "denim"
  | "danube"
  | "lavender"
  | "azalea"
  | "coral";

export type DecomojiColorsHexValue =
  | "dd3b40"
  | "c05b2c"
  | "9f7e00"
  | "688200"
  | "008c22"
  | "008780"
  | "0081b1"
  | "477f9b"
  | "5d79aa"
  | "a156d2"
  | "d43892"
  | "a36969";

export type DecomojiColorsRgbValue =
  | "221,59,64"
  | "192,91,44"
  | "159,126,0"
  | "104,130,0"
  | "0,140,34"
  | "0,135,128"
  | "0,129,177"
  | "71,127,155"
  | "93,121,170"
  | "161,86,210"
  | "212,56,146"
  | "163,105,105";

export type DecomojiColorsHslValue =
  | "358,86,59"
  | "19,63,46"
  | "48,100,31"
  | "72,100,25"
  | "135,100,27"
  | "177,100,26"
  | "196,100,35"
  | "200,37,44"
  | "218,31,52"
  | "276,58,58"
  | "325,64,53"
  | "0,24,53";

export type DecomojiColorsValue =
  | DecomojiColorsHexValue
  | DecomojiColorsRgbValue
  | DecomojiColorsHslValue;

export interface DecomojiColorsItem {
  name: DecomojiColorsName;
  hex: DecomojiColorsHexValue;
  rgb: DecomojiColorsRgbValue;
  hsl: DecomojiColorsHslValue;
}

export const DecomojiColors: DecomojiColorsItem[] = [
  {
    name: "tomato",
    hex: "dd3b40",
    rgb: "221,59,64",
    hsl: "358,86,59",
  },
  {
    name: "chocolate",
    hex: "c05b2c",
    rgb: "192,91,44",
    hsl: "19,63,46",
  },
  {
    name: "gold",
    hex: "9f7e00",
    rgb: "159,126,0",
    hsl: "48,100,31",
  },
  {
    name: "olive",
    hex: "688200",
    rgb: "104,130,0",
    hsl: "72,100,25",
  },
  {
    name: "forest",
    hex: "008c22",
    rgb: "0,140,34",
    hsl: "135,100,27",
  },
  {
    name: "teal",
    hex: "008780",
    rgb: "0,135,128",
    hsl: "177,100,26",
  },
  {
    name: "cerulean",
    hex: "0081b1",
    rgb: "0,129,177",
    hsl: "196,100,35",
  },
  {
    name: "denim",
    hex: "477f9b",
    rgb: "71,127,155",
    hsl: "200,37,44",
  },
  {
    name: "danube",
    hex: "5d79aa",
    rgb: "93,121,170",
    hsl: "218,31,52",
  },
  {
    name: "lavender",
    hex: "a156d2",
    rgb: "161,86,210",
    hsl: "276,58,58",
  },
  {
    name: "azalea",
    hex: "d43892",
    rgb: "212,56,146",
    hsl: "325,64,53",
  },
  {
    name: "coral",
    hex: "a36969",
    rgb: "163,105,105",
    hsl: "0,24,53",
  },
];
