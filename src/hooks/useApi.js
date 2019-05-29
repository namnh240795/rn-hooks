import { useState, useEffect } from 'react';
import { CancelToken } from 'apisauce';

const useApi = ({ url, config = {}, request }) => {
  const [state, setState] = useState({
    response: undefined,
    error: undefined,
    isLoading: true
  });
  
  const source = CancelToken.source();

  useEffect(() => () => {
    source.cancel('useEffect cleanup');
  });
  return [];
};

export { useApi };
