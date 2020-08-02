import React from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
// import myImage from '../assets/raindrops-wallpaper-3.jpg';

// background-image: url(${myImage});
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e6f0ff;
  }
`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
