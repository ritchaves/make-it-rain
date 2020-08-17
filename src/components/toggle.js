import React from 'react';
import PropTypes from 'prop-types';
import { StyledSwitch, Container } from './toggle.style';

const Toggle = ({ setMode }) => {
  const onChange = (event) => {
    const theme = event.target.checked ? 'dark' : 'light';
    setMode(theme);
  };

  return (
    <>
      <Container>
        <StyledSwitch onChange={onChange} />
      </Container>
    </>
  );
};

export default Toggle;

Toggle.propTypes = {
  setMode: PropTypes.func,
};
