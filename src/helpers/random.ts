import { 
  canada,
  france,
  indonesia,
  netherlands,
  ukraine
} from '../assets/flags';

const getRealRandom = (maxLimit: number): number => {
  let byteArray = new Uint8Array(1);
  window.crypto.getRandomValues(byteArray);
  let randomNum = Number('0.' + byteArray[0].toString());
  randomNum = Math.floor(randomNum * (maxLimit + 1));
  return randomNum;
}

export const getUniqueRandom = (count: number, maxLimit: number) => {
  const randoms: number[] = [];
  while(new Set(randoms).size !== count) {
    const random = getRealRandom(maxLimit);
    randoms.push(random);
  }

  return Array.from(new Set(randoms));
}

export const getRandomFlag = () => {
  const flagsArray = [canada, france, indonesia, netherlands, ukraine];
  return flagsArray[getRealRandom(flagsArray.length - 1)];
}
