const randomNumber0to255 = () => Math.floor(256 * Math.random());

interface RandomRGBColorGenerator {
  (): [number, number, number];
}

export const randomRGBColorGenerator: RandomRGBColorGenerator = () => [
  randomNumber0to255(),
  randomNumber0to255(),
  randomNumber0to255(),
];
