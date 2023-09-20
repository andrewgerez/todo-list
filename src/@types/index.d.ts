import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type ThemeType = defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}