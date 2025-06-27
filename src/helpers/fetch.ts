import axios from 'axios';
import { useCallback, useState } from 'react';
import { getUniqueRandom } from './random';

const API_URL = 'https://restcountries.com/v3.1';

const useRequest = () => {

  const [isLoading, setIslLoading] = useState(false);  
  const [error, setError] = useState<any>(null);  

  const sendRequest = useCallback(async (applyResponse: any) => {
    try {
      setError(null);
      setIslLoading(true);

      const query = `${API_URL}/all?fields=name,flags`;
      const response = await axios.get(query);

      if(response.status !== 200) {
        throw new Error();
      }

      const gameData = mapApiResults(response.data);
      applyResponse(gameData);
    }catch(err) {
      setError(err);
    }
    setIslLoading(false);
  }, []);

  return {
    isLoading,
    sendRequest,
    error
  }
};

const mapApiResults = (results: any[]) => {

  const copyResults = JSON.parse(JSON.stringify(results));
  const resultArray: any[] = [];

  for (let i = 0; i < 10; i++) {
    const randomPositions = getUniqueRandom(4, copyResults.length);
    const answerCountry = copyResults[randomPositions[0]];
    const otherCountries = [
      copyResults[randomPositions[0]],
      copyResults[randomPositions[1]], 
      copyResults[randomPositions[2]], 
      copyResults[randomPositions[3]]
    ];
  
    const scrambledArray = scrambleArray(otherCountries);
  
    resultArray.push({
      answer: {
        name: answerCountry?.name?.common,  
        flag: answerCountry?.flags?.png
      },
      options: scrambledArray.map(country => {
        return {
          name: country?.name?.common,
          flag: country?.flags?.png
        }
      })
    });

    copyResults.splice(randomPositions[0], 1);
    copyResults.splice(randomPositions[1], 1);
    copyResults.splice(randomPositions[2], 1);
    copyResults.splice(randomPositions[3], 1);

  }
  
  return resultArray;
}

export const scrambleArray = (array: any[]) => {
  let currentIndex = array.length;
  let resultArray = [...array];
  while(currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [resultArray[currentIndex], resultArray[randomIndex]] = [resultArray[randomIndex], resultArray[currentIndex]];
  }
  return resultArray;
};

export default useRequest;
