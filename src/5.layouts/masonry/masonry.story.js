import { html } from 'lit'
import './masonry.css'

export default {
  title: 'Layouts/Masonry',
}

const Template = (args) => html`
  <div class="masonry ${args.class}" style="--gap: 20px;">
    <div style="background-color: lightgray; padding: 20px;">Item 1</div>
    <div style="background-color: lightgray; padding: 20px;">Item 2</div>
    <div style="background-color: lightgray; padding: 20px;">Item 3</div>
    <div style="background-color: lightgray; padding: 20px;">Item 4</div>
    <div style="background-color: lightgray; padding: 20px;">Item 5</div>
    <div style="background-color: lightgray; padding: 20px;">Item 6</div>
    <div style="background-color: lightgray; padding: 20px;">Item 7</div>
    <div style="background-color: lightgray; padding: 20px;">Item 8</div>
  </div>
`

export const Default = Template.bind({})
Default.args = { class: '' }

export const TwoColumns = Template.bind({})
TwoColumns.args = { class: 'col-2' }

export const ThreeColumns = Template.bind({})
ThreeColumns.args = { class: 'col-3' }
