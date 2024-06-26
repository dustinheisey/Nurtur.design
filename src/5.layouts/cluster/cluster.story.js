import { html } from 'lit'
import './cluster.css'

export default {
  title: 'Layouts/Cluster',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div class="cluster ${args.class}" style="--gap: 10px;">
    <div style="background-color: lightgray; padding: 10px;">Item 1</div>
    <div style="background-color: lightgray; padding: 10px;">Item 2</div>
    <div style="background-color: lightgray; padding: 10px;">Item 3</div>
    <div style="background-color: lightgray; padding: 10px;">Item 4</div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const JustifyStart = Template.bind({})
JustifyStart.args = { class: 'justify-start' }

export const JustifyEnd = Template.bind({})
JustifyEnd.args = { class: 'justify-end' }

export const JustifyCenter = Template.bind({})
JustifyCenter.args = { class: 'justify-center' }

export const JustifyBetween = Template.bind({})
JustifyBetween.args = { class: 'justify-between' }

export const JustifyAround = Template.bind({})
JustifyAround.args = { class: 'justify-around' }

export const JustifyEvenly = Template.bind({})
JustifyEvenly.args = { class: 'justify-evenly' }

export const AlignStart = Template.bind({})
AlignStart.args = { class: 'align-start' }

export const AlignEnd = Template.bind({})
AlignEnd.args = { class: 'align-end' }

export const AlignCenter = Template.bind({})
AlignCenter.args = { class: 'align-center' }

export const AlignBaseline = Template.bind({})
AlignBaseline.args = { class: 'align-baseline' }

export const AlignStretch = Template.bind({})
AlignStretch.args = { class: 'align-stretch' }
