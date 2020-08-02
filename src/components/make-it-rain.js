/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Emoji from './emoji';
import StyledButton from './button';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const MakeItRainButton = ({ listEmoji = [] }) => {
  const [color, setColor] = useState('default');
  const [raining, setRaining] = useState(false);
  const [emoji, setEmoji] = useState();
  const numberOfEmotes = 40;

  const randomEmoji = () => {
    if (listEmoji.length) {
      const selection = getRandomInt(listEmoji.length);

      setEmoji(listEmoji[selection]);
    }
  };

  const onChange = () => {
    const changeColor = (color === 'blue') ? 'default' : 'blue';
    randomEmoji();
    setRaining(!raining);
    setColor(changeColor);
  };

  return (
    <>
      {raining && [...Array(numberOfEmotes)]
        .map((e, number) => (
          <Emoji
            emoji={emoji}
            key={number}
            position={() => getRandomInt(98)}
          />
        ))}
      <StyledButton color={color} onClick={onChange}>
        Make it rain
      </StyledButton>
    </>
  );
};

export default MakeItRainButton;

MakeItRainButton.propTypes = {
  listEmoji: PropTypes.array,
};
