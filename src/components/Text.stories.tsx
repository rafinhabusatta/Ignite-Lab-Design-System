import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text'
/* Uso de Meta e StoryObj para intelisense. Importamos TextProps para uso dos props nos args */
export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello World',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with p tag</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    },
    asChild: {
      table: {
        disable: true,
      }
    },
  }
}