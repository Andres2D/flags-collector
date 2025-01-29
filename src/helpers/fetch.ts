import axios from 'axios';
import { useCallback, useState } from 'react';
import { getUniqueRandom } from './random';

const API_URL = 'https://restcountries.com/v3.1';

const useRequest = () => {

  const [isLoading, setIslLoading] = useState(false);  
  const [error, setError] = useState<any>(null);  

  const sendRequest = useCallback(async (region: string, applyResponse: any) => {
    try {
      setError(null);
      setIslLoading(true);

      const query = `${API_URL}/region/${region}`;
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
  const randomPositions = getUniqueRandom(4, results.length);
  const answerCountry = results[randomPositions[0]];
  const otherCountries = [
    results[randomPositions[0]],
    results[randomPositions[1]], 
    results[randomPositions[2]], 
    results[randomPositions[3]]
  ];

  return {
    answer: {
      name: answerCountry?.name?.common,  
      flag: answerCountry?.flags?.png
    },
    wrongAnswers: otherCountries.map(country => {
      return {
        name: country?.name?.common,
        flag: country?.flags?.png
      }
    })
  }
}

export default useRequest;
