export type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
export type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type Gap = '0' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';
export type Inset = '0' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';
export type Space = '0' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl';

export const argTypes: object = {
  align: {
    control: 'select',
    options: ['align-start', 'align-center', 'align-end', 'align-baseline', 'align-stretch'],
    description: 'Vertical Alignment of the cluster items.'
  },
  justify: {
    control: 'select',
    options: ['justify-start', 'justify-center', 'justify-end', 'justify-between', 'justify-around'],
    description: 'Horizontal Justification of the cluster items.'
  },
  gap: {
    control: 'select',
    options: ['gap-0', 'gap-2xs', 'gap-xs', 'gap-s', 'gap-m', 'gap-l', 'gap-xl', 'gap-2xl'],
    description: 'Spacing between items.'
  },
  inset: {
    control: 'select',
    options: ['inset-0', 'inset-2xs', 'inset-xs', 'inset-s', 'inset-m', 'inset-l', 'inset-xl', 'inset-2xl'],
    description: 'padding of the container.'
  },
  space: {
    control: 'select',
    options: ['space-0', 'space-2xs', 'space-xs', 'space-s', 'space-m', 'space-l', 'space-xl', 'space-2xl'],
    description: 'Override parent container gap.'
  },
  role: {
    control: 'select',
    options: ['group'],
    description: 'ARIA Role of the container.'
  }
};
