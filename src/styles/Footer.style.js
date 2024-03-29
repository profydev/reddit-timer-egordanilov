import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.footer`
    width: 100%; /* tries to take up the complete space */
    max-width: 940px; /* prevents growing larger than 940px */
    margin: auto; /* centers footer on screens wider than 940px */
    padding: 0 20px; /* ensures some horizontal space on small devices */    
    height: 100px;
    display: flex;
    align-items: center;
    margin-top: 70px;

    @media (min-width: 992px) and (max-width: 1199px) {
        max-width: 820px;
    }

    @media (min-width: 768px) and (max-width: 991px) {
        max-width: 660px;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        max-width: 500px;
        padding: 0 30px;
    }

    @media (min-width: 440px) and (max-width: 575px) {
        max-width: 360px;
    }

    @media (max-width: 439px) {
        max-width: 300px;
        padding: 0px;
        justify-content: space-between;
        a {
            margin: 0 auto;
        }
        a:first-of-type, a:last-of-type {
            display: none;
        }
    }
`;

export const FooterLink = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.color.text};
    flex: 1;


    &:hover {
        color: ${(props) => props.theme.color.linkHover};
    }
    
    @media (max-width: 439px) {
        display: none;
    }
`;

export const FooterLogoLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0;
`;

export const FooterTermsLink = styled(Link)`
    text-align: right;
    color: ${(props) => props.theme.color.text};
    flex: 1;
    &:hover {
        color: ${(props) => props.theme.color.linkHover};
    }
    @media (max-width: 439px) {
        display: none;
    }
`;
