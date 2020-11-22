import * as React from 'react';

interface ColorBlockProps {
  width: string;
  height: string;
  rgbColor: [number, number, number];
}

export const ColorBlock: React.VFC<ColorBlockProps> = ({
  width,
  height,
  rgbColor,
}) => <div style={{ width, height, backgroundColor: `rgb(${rgbColor})` }} />;
