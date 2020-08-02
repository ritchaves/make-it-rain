import React from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
  root: {
    background: styledBy('color', {
      default: '#6699ff',
      blue: 'white',
    }),
    borderRadius: 3,
    border: 0,
    color: styledBy('color', {
      default: 'white',
      blue: '#6699ff',
    }),
    height: 48,
    padding: '0 30px',
  },
};

const StyledButton = withStyles(styles)(({ classes, color, ...other }) => (
  <Button className={classes.root} {...other} />
));

export default StyledButton;
