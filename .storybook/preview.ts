import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/index.scss';

export const parameters = {
  darkMode: {
    darkClass: 'mode-dark',
    lightClass: 'mode-light',
    classTarget: 'html',
    stylePreview: true
  },
  backgrounds: { disable: true },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  options: {
    storySort: {
      order: ['Tokens', 'Elements', 'Layouts', 'Components', 'Patterns']
    }
  }
};
