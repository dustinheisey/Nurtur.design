import { html } from 'lit'
import './nd-blog.js'

export default {
  title: 'Patterns/Blog',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
  component: 'nd-blog',
  argTypes: {
    variant: { control: 'text' },
    class: { control: 'text' },
    theme: { control: 'text' },
    classes: { control: 'text' },
    headline: { control: 'text' },
    body: { control: 'text' },
    back: { control: 'boolean' },
    categories: { control: 'array' },
    posts: { control: 'array' },
  },
}

const Template = ({
  variant,
  class: className,
  theme,
  classes,
  headline,
  body,
  back,
  categories,
  posts,
}) => html`
  <nd-blog
    .variant=${variant}
    .class=${className}
    .theme=${theme}
    .classes=${classes}
    .headline=${headline}
    .body=${body}
    .back=${back}
    .categories=${categories}
    .posts=${posts}
  ></nd-blog>
`

export const Default = Template.bind({})
Default.args = {
  variant: 'masonry',
  class: 'custom-class',
  theme: 'light',
  classes: '',
  headline: 'Latest Posts',
  body: 'Discover our latest blog posts and updates.',
  back: true,
  categories: [
    { label: 'Technology', theme: 'primary' },
    { label: 'Health', theme: 'secondary' },
    { label: 'Travel', theme: 'tertiary' },
  ],
  posts: [
    {
      date: '2023-01-01',
      tags: ['Technology'],
      title: 'Tech Post 1',
      parameters: {
        status: {
          type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        },
      },
      description: 'Description for tech post 1',
      url: '/post1',
    },
    {
      date: '2023-02-01',
      tags: ['Health'],
      title: 'Health Post 1',
      parameters: {
        status: {
          type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        },
      },
      description: 'Description for health post 1',
      url: '/post2',
    },
    {
      date: '2023-03-01',
      tags: ['Travel'],
      title: 'Travel Post 1',
      parameters: {
        status: {
          type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        },
      },
      description: 'Description for travel post 1',
      url: '/post3',
    },
  ],
}
