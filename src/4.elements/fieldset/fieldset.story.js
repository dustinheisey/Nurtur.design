import { html } from 'lit'
import './fieldset.css'

export default {
  title: 'Elements/Fieldset',
}

const Template = (args) => html`
  <fieldset class="cards ${args.class}">
    <legend>${args.legend}</legend>
    <label>
      <input type="radio" name="card" value="1" />
      <span>Card 1</span>
    </label>
    <label>
      <input type="radio" name="card" value="2" />
      <span>Card 2</span>
    </label>
    <label>
      <input type="radio" name="card" value="3" />
      <span>Card 3</span>
    </label>
  </fieldset>
`

export const Default = Template.bind({})
Default.args = { class: '', legend: 'Choose a card' }

export const CustomLegend = Template.bind({})
CustomLegend.args = { class: '', legend: 'Select an option' }
