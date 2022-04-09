import { createGlobalStyle } from 'styled-components';
import Montserrat from '../../fonts/Montserrat.ttf';
import MontserratItalic from '../../fonts/Montserrat-Italic.ttf';
import Bitter from '../../fonts/Bitter.ttf';
import BitterItalic from '../../fonts/Bitter-Italic.ttf';

const GlobalFonts = createGlobalStyle`

    @font-face {
        font-family: 'Montserrat';
        src: url(${Montserrat}) format('truetype');
    }

    @font-face {
        font-family: 'Montserrat Italic';
        src: url(${MontserratItalic}) format('truetype');
    }

    @font-face {
        font-family: 'Bitter';
        src: url(${Bitter}) format('truetype');
    }

    @font-face {
        font-family: 'Bitter Italic';
        src: url(${BitterItalic}) format('truetype');
    }

    h1 {
        font-family: 'Bitter Italic';
    }
`;

export default GlobalFonts;
