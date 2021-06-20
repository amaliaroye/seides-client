import { createGlobalStyle } from 'styled-components'

import monobitwoff2 from './monobit.woff2'
import monobitttf from './monobit.ttf'
import LycheeSodawoff2 from './LycheeSoda.woff2'
import LycheeSodattf from './LycheeSoda.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'monobit';
    src: local(monobit),
    url(${monobitwoff2}) format('woff2'),
    url(${monobitttf}) format('ttf');
  }
  @font-face {
    font-family: 'Lychee Soda';
    src: local(LycheeSoda), local(Lychee Soda),
    url(${LycheeSodawoff2}) format('woff2'),
    url(${LycheeSodattf}) format('ttf');
  }
`
