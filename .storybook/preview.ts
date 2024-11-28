import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../index.css'; 

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i, 
      date: /Date$/,
    },
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#000000' },
    ],
  },
};