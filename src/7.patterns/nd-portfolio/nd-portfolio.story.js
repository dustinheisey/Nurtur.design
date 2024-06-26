import { html } from 'lit'
import './nd-portfolio.js'

export default {
  title: 'Patterns/Portfolio',
  component: 'nd-portfolio',
  argTypes: {
    class: { control: 'text' },
    variant: { control: 'text' },
    theme: { control: 'text' },
    headline: { control: 'text' },
    body: { control: 'text' },
    config: { control: 'object' },
  },
}

const Template = ({
  class: className,
  variant,
  theme,
  headline,
  body,
  config,
}) => html`
  <nd-portfolio
    .class=${className}
    .variant=${variant}
    .theme=${theme}
    .headline=${headline}
    .body=${body}
    .config=${config}
  ></nd-portfolio>
`

export const Default = Template.bind({})
Default.args = {
  class: 'custom-portfolio-class',
  variant: 'masonry',
  theme: 'background',
  headline: 'Our Portfolio',
  body: 'Check out some of our recent projects.',
  config: {
    portfolio: [
      {
        data: {
          img: 'project1.jpg',
          alt: 'Project 1',
          permalink: '/project1',
          title: 'Project 1',
          summary: 'Summary of Project 1',
        },
      },
      {
        data: {
          img: 'project2.jpg',
          alt: 'Project 2',
          permalink: '/project2',
          title: 'Project 2',
          summary: 'Summary of Project 2',
        },
      },
    ],
  },
}
