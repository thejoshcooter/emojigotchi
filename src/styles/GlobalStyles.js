import { createGlobalStyle } from 'styled-components'
import { PURPLE } from '../utils/colors'

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${PURPLE};
        color: #fff;
    }
`

export default GlobalStyles