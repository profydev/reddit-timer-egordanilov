import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    body {
        font-family: ${(props) => props.theme.font.family.default};
        font-size: ${(props) => props.theme.font.size.default};
        line-height: ${(props) => props.theme.font.lineHeight.default};
        color: ${(props) => props.theme.color.text};
    }
`;

export default GlobalStyles;
