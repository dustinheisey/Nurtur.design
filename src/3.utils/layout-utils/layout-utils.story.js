import { html } from 'lit'
import './layout-utils.css'

export default {
  title: 'Utilities/Layout',
}

const layouts = [
  { class: 'reverse', label: 'Reverse' },
  { class: 'justify-start', label: 'Justify Start' },
  { class: 'justify-end', label: 'Justify End' },
  { class: 'justify-center', label: 'Justify Center' },
  { class: 'justify-between', label: 'Justify Between' },
  { class: 'justify-around', label: 'Justify Around' },
  { class: 'justify-evenly', label: 'Justify Evenly' },
  { class: 'align-start', label: 'Align Start' },
  { class: 'align-end', label: 'Align End' },
  { class: 'align-center', label: 'Align Center' },
  { class: 'align-stretch', label: 'Align Stretch' },
  { class: 'align-baseline', label: 'Align Baseline' },
  { class: 'full', label: 'Full Width' },
]

const Template = () => html`
  <div style="display: flex; flex-direction: column; gap: 20px;">
    ${layouts.map(
      (layout) => html`
        <div
          class="layout-example ${layout.class}"
          style="display: flex; gap: 10px; border: 1px solid #ccc; padding: 10px;"
        >
          <div style="background: #eee; padding: 10px;">Item 1</div>
          <div style="background: #ccc; padding: 10px;">Item 2</div>
          <div style="background: #aaa; padding: 10px;">Item 3</div>
        </div>
        <p>${layout.label}</p>
      `
    )}
  </div>
`

export const Default = Template.bind({})
