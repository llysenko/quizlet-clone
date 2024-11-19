import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/buttons';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    mode: { control: 'mode' }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Sign up now'
  }
};

export const Accent: Story = {
  args: {
    label: 'Sign up now',
    mode: 'accent'
  }
};

export const Borderless: Story = {
  args: {
    label: 'Sign up now',
    borderless: true
  }
};

export const ButtonWithIcon: Story = {
  args: {
    label: 'Generate',
    iconSrc: '/static/images/sparkles.png',
    size: 'medium'
  }
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Sign up now'
  }
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Sign up now'
  }
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button'
  }
};
