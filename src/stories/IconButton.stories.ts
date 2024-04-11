import type { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '@/components/icon-button';

const meta = {
  title: 'Example/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PlusButton: Story = {
  args: {
    iconSrc: '/static/images/plus.svg'
  }
};
