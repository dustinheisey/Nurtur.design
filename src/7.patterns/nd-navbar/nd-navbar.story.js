import { html } from 'lit'
import './nd-navbar.js'

export default {
  title: 'Patterns/Navbar',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  argTypes: {
    config: { control: 'object' },
    type: { control: 'text' },
  },
}

const Template = ({ config, type }) => html`
  <nd-navbar .config=${config} .type=${type}></nd-navbar>
`

export const Default = Template.bind({})
Default.args = {
  config: {
    header: {
      variant: 'center',
      links: [
        { label: 'Home', url: '/', isActive: true },
        {
          label: 'About',
          url: '/about',
          subLinks: [
            { label: 'Team', url: '/about/team' },
            { label: 'Careers', url: '/about/careers' },
          ],
        },
        { label: 'Services', url: '/services' },
        { label: 'Contact', url: '/contact' },
      ],
      action: { label: 'Get Started', url: '/get-started' },
    },
    bottombar: {
      links: [
        { label: 'Home', url: '/', icon: './public/svg/home-icon.svg' },
        {
          label: 'Search',
          url: '/search',
          icon: './public/svg/search-icon.svg',
        },
        {
          label: 'Profile',
          url: '/profile',
          icon: './public/svg/profile-icon.svg',
        },
      ],
      fab: { label: 'Add', url: '/add', icon: './public/svg/add-icon.svg' },
    },
  },
  type: 'article',
}
