import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '../src/index.scss';

export const parameters = {
  layout: 'centered',
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
      order: [
        'Foundations',
        ['Introduction', 'Accessibility', 'Neuro-Inclusivity', 'Sustainability', 'CSS-Developments'],
        'Tokens',
        'Elements',
        'Layouts',
        'Workflows'
      ]
    }
  }
};
