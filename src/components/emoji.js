import React from 'react';
import PropTypes from 'prop-types';
import { Container, SpanEmoji } from './emoji.style';

const Emoji = ({ emoji, position }) => (
  <>
    <Container position={position}>
      <SpanEmoji>
        {emoji}
      </SpanEmoji>
    </Container>
  </>
);

export default Emoji;

Emoji.propTypes = {
  emoji: PropTypes.any,
  position: PropTypes.func,
};
