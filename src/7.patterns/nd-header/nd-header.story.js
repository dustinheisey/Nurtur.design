import { html } from 'lit'
import './nd-header.js'

export default {
  title: 'Patterns/Header',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  component: 'nd-header',
  argTypes: {
    class: { control: 'text' },
    config: { control: 'object' },
    type: { control: 'text' },
  },
}

const Template = ({ class: className, config, type }) => html`
  <nd-header .class=${className} .config=${config} .type=${type}></nd-header>
`

export const Default = Template.bind({})
Default.args = {
  class: 'custom-header-class',
  config: {
    header: {
      theme: 'surface',
      variant: 'center',
      links: [
        { url: '/about', label: 'About' },
        { url: '/services', label: 'Services' },
        { url: '/contact', label: 'Contact' },
      ],
      action: { url: '/signup', label: 'Sign Up' },
    },
    bottombar: {
      links: [
        { url: '/privacy', label: 'Privacy Policy', icon: 'privacy-icon' },
        { url: '/terms', label: 'Terms of Service', icon: 'terms-icon' },
      ],
      fab: { url: '/help', label: 'Help', icon: 'help-icon' },
    },
    footer: {
      variant: 'newsletter',
      mission: 'Our mission is to provide...',
      newsletter: {
        headline: 'Join our Newsletter',
        body: 'Stay updated with our latest news',
      },
      groups: [
        {
          title: 'Company',
          parameters: {
            status: {
              type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
            },
          },
          links: [
            { url: '/about', label: 'About Us' },
            { url: '/careers', label: 'Careers' },
          ],
        },
      ],
      social: [
        { url: 'https://twitter.com', label: 'Twitter', icon: 'twitter-icon' },
        {
          url: 'https://facebook.com',
          label: 'Facebook',
          icon: 'facebook-icon',
        },
      ],
      copywrite: '© 2024 Company Name',
    },
  },
  type: 'article',
}
