import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading'
/* Uso de Meta e StoryObj para intelisense. Importamos HeadingProps para uso dos props nos args */
export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Hello World',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: { type: 'inline-radio' },
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm',
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg',
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with H1</h1>
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