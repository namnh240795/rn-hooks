import { useState, useEffect } from 'react';
import { CancelToken } from 'apisauce';
// import { ReqresIn } from 'src/apis';

const useApi = ({ url, config = {}, request }) => {
  const [state, setState] = useState({
    response: undefined,
    error: undefined,
    isLoading: true
  });

  const source = CancelToken.source();

  useEffect(() =>
    // setState({ ...state, isLoading: true });

    // ReqresIn.axiosInstance(url, { ...config, cancelToken: source.token });
    // .then(response => setState({ ...state, isLoading: false }))
    // .catch(error => console.log(error));
    () => {
      source.cancel('useEffect cleanup');
    }
  );
  return [];
};

export { useApi };

// const [loading, data, error] = useApi(id => ({}), 1);
