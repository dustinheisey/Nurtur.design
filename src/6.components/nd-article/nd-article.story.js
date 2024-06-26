import { html } from 'lit'
import './nd-article.js'

export default {
  title: 'Components/Article',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <nd-article
    imgSrc="${args.imgSrc}"
    imgAlt="${args.imgAlt}"
    .time="${args.time}"
    headline="${args.headline}"
    body="${args.body}"
    .btn="${args.btn}"
  ></nd-article>
`

export const Default = Template.bind({})
Default.args = {
  imgSrc: 'https://via.placeholder.com/150',
  imgAlt: 'Placeholder image',
  time: { time: '2024-07-23T18:25:43.511Z', label: 'July 23, 2024' },
  headline: 'This is the headline',
  body: 'This is the body text of the article. It provides some content about the topic.',
  btn: { href: '#', label: 'Read more' },
}
