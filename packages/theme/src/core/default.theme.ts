import {
  type CustomColor,
  argbFromHex,
} from '@material/material-color-utilities'

interface DefaultTheme {
  source: string
  customColors: CustomColor[]
}

const defaultTheme: DefaultTheme = {
  source: '#6750A4',
  customColors: [
    {
      name: 'success',
      value: argbFromHex('#4caf50'),
      blend: true,
    },
    {
      name: 'warning',
      value: argbFromHex('#ff9800'),
      blend: true,
    },
    {
      name: 'info',
      value: argbFromHex('#2196f3'),
      blend: true,
    },
  ],
}

export default defaultTheme
