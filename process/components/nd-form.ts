import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

interface InputBase {
  id: string;
  label: string;
  required?: boolean;
  type: string;
}

interface TextInput extends InputBase {
  type: 'text' | 'email' | 'tel';
}

interface TextareaInput extends InputBase {
  type: 'textarea';
}

interface RangeInput extends InputBase {
  type: 'range';
  min: number;
  max: number;
  step: number;
  value: number;
  output: string;
}

interface CardInput extends InputBase {
  type: 'checkbox-cards' | 'radio-cards';
  name: string;
  cards: Array<{
    icon: string;
    value: string;
  }>;
}

type FormInput = TextInput | TextareaInput | RangeInput | CardInput;

@customElement('nd-form')
export class NdForm extends LitElement {
  @property({ type: String })
  overrides?: string;

  @property({ type: String })
  theme?: string;

  @property({ type: String })
  headline?: string;

  @property({ type: String })
  overline?: string;

  @property({ type: String })
  body?: string;

  @property({ type: Array })
  inputs: FormInput[] = [];

  @property({ type: String })
  submit: string = 'Submit';

  static styles = [
    css`
      .input-card {
        display: flex;
        align-items: center;
        gap: var(--space-xs);
      }
    `
  ];

  private renderInput(input: FormInput) {
    if (input.type === 'textarea') {
      return html`
        <label>
          <span class="${input.required ? 'required' : ''}">${input.label}</span>
          <textarea id="${input.id}" name="${input.id}" ?required=${input.required}></textarea>
        </label>
      `;
    }

    if (input.type === 'checkbox-cards' || input.type === 'radio-cards') {
      return html`
        <fieldset class="cards switcher switch-phone">
          <legend>
            <span class="${input.required ? 'required' : ''}">${input.label}</span>
          </legend>
          ${input.cards.map(
            card => html`
              <label class="input-card">
                <input
                  type="${input.type === 'checkbox-cards' ? 'checkbox' : 'radio'}"
                  name="${input.name}"
                  .value="${card.value}"
                />
                <span>
                  <nd-icon name="${card.icon}"></nd-icon>
                  ${card.value}
                </span>
              </label>
            `
          )}
        </fieldset>
      `;
    }

    if (input.type === 'range') {
      return html`
        <label for="${input.id}" class="${input.required ? 'required' : ''}">${input.label}</label>
        <div class="inline gap-2xs full">
          <input
            type="range"
            id="${input.id}"
            name="${input.id}"
            min="${input.min}"
            max="${input.max}"
            step="${input.step}"
            .value="${input.value.toString()}"
          />
          <output id="budget-value">${input.output}${input.value}</output>
        </div>
      `;
    }

    return html`
      <label>
        <span class="${input.required ? 'required' : ''}">${input.label}</span>
        <input type="${input.type}" id="${input.id}" name="${input.id}" class="input" ?required=${input.required} />
      </label>
    `;
  }

  render() {
    return html`
      <div class="${this.overrides} stack fixed center center-intrinsic ${this.theme ? `theme-${this.theme}` : ''}">
        ${this.headline
          ? html`
              <section class="prose">
                <p class="overline">${this.overline}</p>
                <h1 class="page-headline">${this.headline}</h1>
                <p>${this.body}</p>
              </section>
            `
          : ''}

        <form class="stack align-start gap-s" name="contact" method="post" data-netlify="true">
          ${this.inputs.map(input => this.renderInput(input))}
          <button type="submit" class="btn">${this.submit}</button>
        </form>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'nd-form': NdForm;
  }
}
