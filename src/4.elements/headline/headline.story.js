import { html } from 'lit'
import './headline.css'

export default {
  title: 'Elements/Headline',
  parameters: {
    status: {
      type: 'beta', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
    },
  },
}

const Template = (args) => html`
  <div>
    <h1 class="${args.class}">${args.h1}</h1>
    <h2 class="${args.class}">${args.h2}</h2>
    <h3 class="${args.class}">${args.h3}</h3>
    <h4 class="${args.class}">${args.h4}</h4>
  </div>
`

export const Default = Template.bind({})
Default.args = {
  class: '',
  h1: 'This is an H1 headline',
  h2: 'This is an H2 headline',
  h3: 'This is an H3 headline',
  h4: 'This is an H4 headline',
}

export const Hero = Template.bind({})
Hero.args = {
  class: 'hero-headline',
  h1: 'This is a Hero headline',
  h2: 'This is a Hero headline',
  h3: 'This is a Hero headline',
  h4: 'This is a Hero headline',
}

export const Page = Template.bind({})
Page.args = {
  class: 'page-headline',
  h1: 'This is a Page headline',
  h2: 'This is a Page headline',
  h3: 'This is a Page headline',
  h4: 'This is a Page headline',
}

export const Region = Template.bind({})
Region.args = {
  class: 'region-headline',
  h1: 'This is a Region headline',
  h2: 'This is a Region headline',
  h3: 'This is a Region headline',
  h4: 'This is a Region headline',
}

export const Section = Template.bind({})
Section.args = {
  class: 'section-headline',
  h1: 'This is a Section headline',
  h2: 'This is a Section headline',
  h3: 'This is a Section headline',
  h4: 'This is a Section headline',
}

export const Title = Template.bind({})
Title.args = {
  class: 'title-headline',
  h1: 'This is a Title headline',
  h2: 'This is a Title headline',
  h3: 'This is a Title headline',
  h4: 'This is a Title headline',
}
