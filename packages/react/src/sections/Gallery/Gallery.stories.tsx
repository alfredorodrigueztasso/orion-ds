import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from './Gallery';

const meta = {
  title: 'Sections/Marketing/Gallery',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: 'select',
      options: [2, 3, 4],
    },
    layout: {
      control: 'select',
      options: ['grid', 'masonry'],
    },
    background: {
      control: 'select',
      options: ['base', 'subtle', 'none'],
    },
  },
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

// Using placeholder image URLs
const defaultImages = [
  { id: '1', src: 'https://picsum.photos/seed/1/600/400', alt: 'Gallery image 1' },
  { id: '2', src: 'https://picsum.photos/seed/2/600/400', alt: 'Gallery image 2' },
  { id: '3', src: 'https://picsum.photos/seed/3/600/400', alt: 'Gallery image 3' },
  { id: '4', src: 'https://picsum.photos/seed/4/600/400', alt: 'Gallery image 4' },
  { id: '5', src: 'https://picsum.photos/seed/5/600/400', alt: 'Gallery image 5' },
  { id: '6', src: 'https://picsum.photos/seed/6/600/400', alt: 'Gallery image 6' },
];

export const Default: Story = {
  args: {
    images: defaultImages,
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Our Work',
    description: 'A showcase of projects built with Orion.',
    images: defaultImages,
  },
};

export const TwoColumns: Story = {
  args: {
    title: 'Featured',
    images: defaultImages.slice(0, 4),
    columns: 2,
  },
};

export const FourColumns: Story = {
  args: {
    images: defaultImages,
    columns: 4,
  },
};

export const WithCaptions: Story = {
  args: {
    title: 'Portfolio',
    images: defaultImages.map((img, i) => ({
      ...img,
      caption: `Project ${i + 1}`,
    })),
    showCaptions: true,
  },
};

export const SubtleBackground: Story = {
  args: {
    title: 'Gallery',
    images: defaultImages,
    background: 'subtle',
  },
};

export const WithLightbox: Story = {
  args: {
    title: 'Click to enlarge',
    images: defaultImages,
    lightbox: true,
  },
};

export const Filterable: Story = {
  args: {
    title: 'Filter by Category',
    images: [
      { id: '1', src: 'https://picsum.photos/seed/1/600/400', alt: 'Nature 1', category: 'Nature' },
      {
        id: '2',
        src: 'https://picsum.photos/seed/2/600/400',
        alt: 'Architecture 1',
        category: 'Architecture',
      },
      { id: '3', src: 'https://picsum.photos/seed/3/600/400', alt: 'Nature 2', category: 'Nature' },
      {
        id: '4',
        src: 'https://picsum.photos/seed/4/600/400',
        alt: 'Portrait 1',
        category: 'Portrait',
      },
      {
        id: '5',
        src: 'https://picsum.photos/seed/5/600/400',
        alt: 'Architecture 2',
        category: 'Architecture',
      },
      {
        id: '6',
        src: 'https://picsum.photos/seed/6/600/400',
        alt: 'Portrait 2',
        category: 'Portrait',
      },
    ],
    filterable: true,
  },
};
