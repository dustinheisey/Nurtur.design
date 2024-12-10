import { addons } from '@storybook/manager-api';
import { defaultConfig, type TagBadgeParameters } from 'storybook-addon-tag-badges';

addons.setConfig({
  tagBadges: [
    {
      tags: 'fixme',
      badge: {
        text: 'Fix Me',
        bgColor: '#4f6628',
        fgColor: '#fff'
      },
      display: {
        sidebar: ['story', 'component'],
        toolbar: true
      }
    },
    ...defaultConfig
  ] satisfies TagBadgeParameters
});
