import { colorsDataBase } from "../constants/color-flag";
import { ColorsGame } from "../interface/store";
import { getUniqueRandom } from "./random";
import { scrambleArray } from './fetch';

export const getColorGame = (): ColorsGame[] => {
  const indexes = getUniqueRandom(10, 86);
  let gameData: ColorsGame[] = [];
  const game = indexes.map((index) => colorsDataBase[index]);
  
  gameData = game.map(country => {
    if(!country) {
      console.log('Error data: ', game);
    }

    return {
      answer: country.colors,
      options: scrambleArray(country.colors),
      // options: scrambleArray([...country.colors, ...getRandomHexColors(2)]),
      countryName: country.country,
      direction: country.direction
    }
  })
  return gameData;
};


// const getRandomHexColors = (quantity: number): string[] => {
//   const colors: string[] = [];
//   Array.from({ length: quantity}).forEach(() => {
//     let output = '';
//     for (let i = 0; i < 5; ++i) {
//       output += (Math.floor(Math.random() * 16)).toString(16);
//     }
//     colors.push(`#${output}`);
//   });
//   return colors;
// }
