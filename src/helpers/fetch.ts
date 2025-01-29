import axios from 'axios';
import { useCallback, useState } from 'react';

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
  const answerCountry: any = results[0];
  const otherCountries = [results[9],results[6],results[2], answerCountry];

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
