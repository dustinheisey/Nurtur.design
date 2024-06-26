import { html } from 'lit'
import './nd-reading-progress.js'

export default {
  title: 'Components/Reading Progress',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = () => html`
  <style>
    body {
      height: 2000px;
      padding-top: 20px;
    }
    #comments,
    footer {
      position: absolute;
      bottom: 0;
      height: 100px;
    }
  </style>
  <nd-reading-progress></nd-reading-progress>
  <div id="comments"></div>
  <footer></footer>
`

export const Default = Template.bind({})
