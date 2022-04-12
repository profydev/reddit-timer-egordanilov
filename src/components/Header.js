import styled from 'styled-components';
import theme from '../theme';

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 80px;
    font-family: 'Montserrat', sans-serif;
    .header__logo {
        display: block;
    }

    .header__links {
        list-style: none;
        li {
            display: inline;
            font-size: 1rem;
            font-weight: 400;
            text-align: right;
            margin-left: 26px;
            a {
                text-decoration: none;
                color: ${theme.color.text}
            }
        }
    }
`;

export default Header;
