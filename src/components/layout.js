import React from 'react';
import { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

// background-image: url(${myImage});
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => ((props.mode === 'light') ? '#e6f0ff' : '#013A78')}
  }
`;

const Layout = ({ mode, children }) => (
  <>
    <GlobalStyle mode={mode} />
    {children}
  </>
);

export default Layout;

Layout.propTypes = {
  mode: PropTypes.string,
  children: PropTypes.node.isRequired,
};
