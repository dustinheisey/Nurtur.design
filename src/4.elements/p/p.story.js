import { html } from 'lit'
import './p.css'

export default {
  title: 'Elements/Paragraph',
}

const Template = (args) => html`
  <div class="stack gap-xl ${args.class}">
    <p class="overline">${args.overline}</p>
    <h1
      class="${args.size === 'hero'
        ? 'hero-headline'
        : args.size === 'page'
          ? 'page-headline'
          : args.size === 'region'
            ? 'region-headline'
            : args.size === 'title'
              ? 'title-headline'
              : ''}"
    >
      ${args.accent
        ? html`<span class="color-primary">${args.accent}</span>`
        : ''}
      ${args.headline}
    </h1>
    ${args.lead ? html`<p class="lead">${args.lead}</p>` : ''}
    <p>${args.body}</p>
    ${args.btn
      ? html`<a
          href="${args.btn.url}"
          class="btn ${args.btn.variant ? 'btn-' + args.btn.variant : ''}"
          >${args.btn.label}</a
        >`
      : ''}
    ${args.input
      ? html` <div class="input-group">
          <input
            type="${args.input.type}"
            placeholder="${args.input.placeholder}"
            class="input"
          />
          <button type="submit" class="btn btn-primary">
            ${args.input.btn}
          </button>
        </div>`
      : ''}
  </div>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  overline: 'Overline Text',
  size: 'page',
  headline: 'This is a Headline',
  lead: 'This is a lead paragraph with larger text size.',
  body: 'This is the main body text for the paragraph component.',
  btn: { url: '#', label: 'Button', variant: 'primary' },
  input: { type: 'text', placeholder: 'Enter text...', btn: 'Submit' },
}
