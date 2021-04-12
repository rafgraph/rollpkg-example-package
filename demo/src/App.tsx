import { useState } from 'react';
import { randomRGBColorGenerator, ColorBlock } from 'rollpkg-example-package';
import useDarkMode from 'use-dark-mode';
import { styled, globalStyles, darkThemeClass } from './stitches.config';
import { Link, DarkModeButton, Button } from './Interactive';

const AppDiv = styled('div', {
  maxWidth: '400px',
  padding: '14px 15px 25px',
  margin: '0 auto',
});

const H1 = styled('h1', {
  fontSize: '26px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2px',
});

const P = styled('p', {
  margin: '12px 0',
});

const ColorBlockContainer = styled('div', {
  margin: '30px 0',
});

export const App = () => {
  globalStyles();

  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
  });

  const [colors, setColors] = useState(() => [
    randomRGBColorGenerator(),
    randomRGBColorGenerator(),
  ]);

  return (
    <AppDiv>
      <H1>
        <span>Rollpkg Example Package</span>
        <DarkModeButton onClick={darkMode.toggle} />
      </H1>
      <Link
        type="lowContrast"
        href="https://github.com/rafgraph/rollpkg-example-package"
      >
        https://github.com/rafgraph/rollpkg-example-package
      </Link>
      <P>
        This is the demo site for the Rollpkg Example Package.{' '}
        <Link href="https://github.com/rafgraph/rollpkg">Rollpkg</Link> is a
        zero config way to create packages with Rollup and TypeScript.
      </P>

      <P>
        The example package contains a random color generator, which is
        demonstrated here.
      </P>

      <Button
        onClick={() =>
          setColors([randomRGBColorGenerator(), randomRGBColorGenerator()])
        }
      >
        Generate new random colors
      </Button>

      <ColorBlockContainer>
        <ColorBlock width="100%" height="200px" rgbColor={colors[0]} />
        <div>RGB {colors[0].join(', ')}</div>
      </ColorBlockContainer>
      <ColorBlockContainer>
        <ColorBlock width="100%" height="200px" rgbColor={colors[1]} />
        <div>RGB {colors[1].join(', ')}</div>
      </ColorBlockContainer>
    </AppDiv>
  );
};
