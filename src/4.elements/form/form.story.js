import { html } from 'lit'
import './form.css'

export default {
  title: 'Elements/Form',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div
    class="${args.class} stack fixed center center-intrinsic ${args.theme
      ? 'theme-' + args.theme
      : ''}"
  >
    ${args.headline
      ? html` <section class="prose">
          <p class="overline">${args.overline}</p>
          <h1 class="page-headline">${args.headline}</h1>
          <p>${args.body}</p>
        </section>`
      : ''}
    <form
      class="stack align-start gap-s"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      ${args.inputs.map(
        (input) => html`
          ${input.type === 'textarea'
            ? html` <label>
                <span class="${input.required ? 'required' : ''}"
                  >${input.label}</span
                >
                <textarea
                  id="${input.id}"
                  name="${input.id}"
                  ?required=${input.required}
                ></textarea>
              </label>`
            : ''}
          ${input.type === 'checkbox-cards'
            ? html` <fieldset class="cards switcher switch-phone">
                <legend>
                  <span class="${input.required ? 'required' : ''}"
                    >${input.label}</span
                  >
                </legend>
                ${input.cards.map(
                  (card) =>
                    html` <label class="input-card">
                      <input
                        type="checkbox"
                        name="${input.name}"
                        value="${card.value}"
                      />
                      <span>
                        ${card.icon ? html`<i class="${card.icon}"></i>` : ''}
                        ${card.value}
                      </span>
                    </label>`
                )}
              </fieldset>`
            : ''}
          ${input.type === 'radio-cards'
            ? html` <fieldset class="cards switcher switch-phone">
                <legend>
                  <span class="${input.required ? 'required' : ''}"
                    >${input.label}</span
                  >
                </legend>
                ${input.cards.map(
                  (card) =>
                    html` <label class="input-card">
                      <input
                        type="radio"
                        name="${input.name}"
                        value="${card.value}"
                      />
                      <span>
                        ${card.icon ? html`<i class="${card.icon}"></i>` : ''}
                        ${card.value}
                      </span>
                    </label>`
                )}
              </fieldset>`
            : ''}
          ${input.type === 'range'
            ? html` <label
                  for="${input.id}"
                  class="${input.required ? 'required' : ''}"
                  >${input.label}</label
                >
                <div class="inline gap-2xs full">
                  <input
                    type="range"
                    id="${input.id}"
                    name="${input.id}"
                    min="${input.min}"
                    max="${input.max}"
                    step="${input.step}"
                    value="${input.value}"
                  />
                  <output id="budget-value"
                    >${input.output}${input.value}</output
                  >
                </div>`
            : ''}
          ${input.type !== 'textarea' &&
          input.type !== 'checkbox-cards' &&
          input.type !== 'radio-cards' &&
          input.type !== 'range'
            ? html` <label>
                <span class="${input.required ? 'required' : ''}"
                  >${input.label}</span
                >
                <input
                  type="${input.type}"
                  id="${input.id}"
                  name="${input.id}"
                  class="input"
                  ?required=${input.required}
                />
              </label>`
            : ''}
        `
      )}
      <button type="submit" class="btn">${args.submit}</button>
    </form>
  </div>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  theme: '',
  headline: 'Contact Us',
  overline: 'Get in touch',
  body: 'Please fill out the form below and we will get back to you as soon as possible.',
  inputs: [
    { type: 'text', id: 'name', label: 'Name', required: true },
    { type: 'email', id: 'email', label: 'Email', required: true },
    { type: 'textarea', id: 'message', label: 'Message', required: true },
  ],
  submit: 'Submit',
}
