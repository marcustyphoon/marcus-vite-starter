import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('#root', {
  width: '100%',
  padding: '1.5em',
  boxSizing: 'border-box',
});

// eslint-disable-next-line import/prefer-default-export
export const example = style({
  fontSize: '2em',
});
