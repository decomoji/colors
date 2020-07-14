# decomoji-colors

[デコモジ](https://github.com/decomoji/slack-reaction-decomoji)で使われている 12 色のカラーセットです。

| chip                                       | name      | HEX      | RGB           | HSL          |
| ------------------------------------------ | --------- | -------- | ------------- | ------------ |
| ![tomato](./src/images/0_tomato.png)       | tomato    | `dd3b40` | `221,59,64`   | `358,86,59`  |
| ![chocolate](./src/images/1_chocolate.png) | chocolate | `c05b2c` | `192,91,44`   | `19,63,46`   |
| ![gold](./src/images/2_gold.png)           | gold      | `9f7e00` | `159,126,0`   | `48,100,31`  |
| ![olive](./src/images/3_olive.png)         | olive     | `688200` | `104,130,0`   | `72,100,25`  |
| ![forest](./src/images/4_forest.png)       | forest    | `008c22` | `0,140,34`    | `135,100,27` |
| ![teal](./src/images/5_teal.png)           | teal      | `008780` | `0,135,128`   | `177,100,26` |
| ![cerulean](./src/images/6_cerulean.png)   | cerulean  | `0081b1` | `0,129,177`   | `196,100,35` |
| ![denim](./src/images/7_denim.png)         | denim     | `477f9b` | `71,127,155`  | `200,37,44`  |
| ![danube](./src/images/8_danube.png)       | danube    | `5d79aa` | `93,121,170`  | `218,31,52`  |
| ![lavender](./src/images/9_lavender.png)   | lavender  | `a156d2` | `161,86,210`  | `276,58,58`  |
| ![azalea](./src/images/10_azalea.png)      | azalea    | `d43892` | `212,56,146`  | `325,64,53`  |
| ![coral](./src/images/11_coral.png)        | coral     | `a36969` | `163,105,105` | `0,24,53`    |

## HEX Color

```
#dd3b40
#c05b2c
#9f7e00
#688200
#008c22
#008780
#0081b1
#477f9b
#5d79aa
#a156d2
#d43892
#a36969
```

## RGB

```
rgb(221, 59, 64)
rgb(192, 91, 44)
rgb(159, 126, 0)
rgb(104, 130, 0)
rgb(0, 140, 34)
rgb(0, 135, 128)
rgb(0, 129, 177)
rgb(71, 127, 155)
rgb(93, 121, 170)
rgb(161, 86, 210)
rgb(212, 56, 146)
rgb(163, 105, 105)
```

## HSL

```
hsl(358, 86, 59)
hsl(19, 63, 46)
hsl(48, 100, 31)
hsl(72, 100, 25)
hsl(135, 100, 27)
hsl(177, 100, 26)
hsl(196, 100, 35)
hsl(200, 37, 44)
hsl(218, 31, 52)
hsl(276, 58, 58)
hsl(325, 64, 53)
hsl(0, 24, 53)
```

## ファイル形式

下記のファイル形式を用意しています。

- [.json](src/DecomojiColors.json)
- [.js](src/DecomojiColors.js)
- [.ts](src/DecomojiColors.ts)
- .csv（[HEX](src/DecomojiColorsHEX.csv), [RGB](src/DecomojiColorsRGB.csv), [HSL](src/DecomojiColorsHSL.csv)）
- [.css](src/DecomojiClors.css)

また、TypeScript 向けに[型定義](src/models/DecomojiColorsTypes.ts)もあります。

## ライセンス

[MIT](LICENSE).
