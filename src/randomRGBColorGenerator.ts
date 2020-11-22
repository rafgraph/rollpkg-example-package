const randomNumber0to255 = () => Math.floor(256 * Math.random());

interface RandomRGBColorGenerator {
  (): [number, number, number];
}

export const randomRGBColorGenerator: RandomRGBColorGenerator = () => {
  const red = randomNumber0to255();
  const green = randomNumber0to255();
  const blue = randomNumber0to255();

  if (process.env.NODE_ENV !== 'production') {
    console.log(`Color generated: red ${red}, green ${green}, blue ${blue}`);
  }

  return [red, green, blue];
};
