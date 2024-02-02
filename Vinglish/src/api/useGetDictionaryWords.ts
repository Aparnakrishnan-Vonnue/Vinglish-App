import {useQuery} from '@tanstack/react-query';
import {DataQueryKeys} from './data-query-keys';
import axios from 'axios';

export function useGetDictionaryWords({inputQuery}) {
  const params = {
    inputQuery: inputQuery,
  };

  console.log(inputQuery);

  return useQuery({
    queryKey: [DataQueryKeys.DICTIONARY_WORDS, inputQuery],
    queryFn: async () => {
      try {
        const response = await axios.get(
          'https://api.dictionaryapi.dev/api/v2/entries/en_US',
          {
            params: params,
          },
        );
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
  });
}
