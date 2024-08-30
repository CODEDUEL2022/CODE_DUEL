import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

type T = typeof Card;

const meta: Meta<T> = {
  title: 'commons/Card',
  component: Card,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<T>;

export const Default: Story = {
  args: {
    card: {
      name: 'Card Name',
      image_src: 'https://via.placeholder.com/150',
      value: 1,
      type: 'absorption',
    },
  },
};
