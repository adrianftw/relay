import { ColorPalette, ColorSwatch } from './Colors';

export default {
  title: 'Relay Design System/Colors',
  component: ColorPalette,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const BrandColors = {
  render: () => <ColorPalette />,
};

export const SingleSwatch = {
  render: () => (
    <ColorSwatch
      name="Purple Base"
      variable="--relay-purple-base"
      hex="#333366"
      description="Primary brand color"
    />
  ),
  parameters: {
    layout: 'centered',
  },
};
