import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

import "./navbar.css";


export const Nav = styled.nav`
background: #fff;
height: 165px;
font-size: 17.5px;
font-family: 'Rubik', sans-serif;
z-index: 12;
padding-top: 7px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
@media screen and (max-width: 816px) {
	height: 63px;
}
`;

export const NavLink = styled(Link)`
text-decoration: none;
color: #A9A9A9 !important;
`;

export const NavMenu = styled.div`
width: 100%;
margin-top: 25px;
@media screen and (max-width: 817px) {
	display: none;
}
`;

