import styled from 'styled-components';
import { Switch } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export const StyledSwitch = withStyles({
  switchBase: {
    color: '#6699FF',
    '&$checked': {
      color: '#013A78',
    },
    '&$checked + $track': {
      backgroundColor: '#000',
    },
  },
  checked: {},
  track: {},
})(Switch);

export const Container = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  z-index: 4;
`;
