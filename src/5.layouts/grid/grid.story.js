import { html } from 'lit'
import './grid.css'

export default {
  title: 'Layouts/Grid',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div
    class="grid ${args.class}"
    style="--grid-gap: 10px; width: 100%; height: 100%;"
  >
    <div style="background-color: lightgray; padding: 20px;">Item 1</div>
    <div style="background-color: lightgray; padding: 20px;">Item 2</div>
    <div style="background-color: lightgray; padding: 20px;">Item 3</div>
    <div style="background-color: lightgray; padding: 20px;">Item 4</div>
    <div style="background-color: lightgray; padding: 20px;">Item 5</div>
    <div style="background-color: lightgray; padding: 20px;">Item 6</div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const Grid2 = Template.bind({})
Grid2.args = { class: 'grid-2' }

export const Grid3 = Template.bind({})
Grid3.args = { class: 'grid-3' }

export const Grid4 = Template.bind({})
Grid4.args = { class: 'grid-4' }

export const Grid5 = Template.bind({})
Grid5.args = { class: 'grid-5' }

export const Grid6 = Template.bind({})
Grid6.args = { class: 'grid-6' }

export const RowGapXL = Template.bind({})
RowGapXL.args = { class: 'row-gap-xl' }

export const Span2 = Template.bind({})
Span2.args = { class: 'span-2' }

export const Span3 = Template.bind({})
Span3.args = { class: 'span-3' }

export const Span4 = Template.bind({})
Span4.args = { class: 'span-4' }

export const Span5 = Template.bind({})
Span5.args = { class: 'span-5' }

export const Span6 = Template.bind({})
Span6.args = { class: 'span-6' }
