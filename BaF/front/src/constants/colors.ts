const colors = {
  SKY_200: '#B8E9FF',
  SKY_400: '#58CCFF',
  SKY_500: '#1187CF',
  SKY_700: '#3c9eff',
  
  RED_300: '#FFB4B4',
  RED_500: '#FF5F5F',
  RED_400: '#EC87A5',
  BLUE_400: '#B4E0FF',
  BLUE_500: '#0D8AFF',
  GREEN_400: '#CCE6BA',
  YELLOW_400: '#FFE594',
  YELLOW_500: '#FACC15',
  PURPLE_400: '#C4C4E7',
  WHITE: '#FFF',
  GRAY_100: '#F8F8F8',
  GRAY_200: '#E7E7E7',
  GRAY_300: '#D8D8D8',
  GRAY_500: '#8E8E8E',
  GRAY_700: '#575757',
  BLACK: '#000',
};

const colorHex = {
  RED: colors.RED_400,
  BLUE: colors.BLUE_400,
  GREEN: colors.GREEN_400,
  YELLOW: colors.YELLOW_400,
  PURPLE: colors.PURPLE_400,
} as const;

export {colors, colorHex};
