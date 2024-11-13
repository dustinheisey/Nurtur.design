import { html, TemplateResult } from 'lit';
import './nurtur-design.js';

export default {
  title: 'NurturDesign',
  component: 'nurtur-design',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  header?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ header, backgroundColor = 'white' }: ArgTypes) => html`
  <nurtur-design style="--nurtur-design-background-color: ${backgroundColor}" .header=${header}></nurtur-design>
`;

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
