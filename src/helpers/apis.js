const handleResponse = response => {
  if (!response.ok) {
    return Promise.reject({ ...response, error: true });
  }
  // google routes
  if (response.data && response.data.status === 'ZERO_RESULTS') {
    return Promise.reject({
      ...response,
      message: 'Google không tìm thấy path'
    });
  }
  // request time out
  if (response.data === 'timeout') {
    return Promise.reject({ error: true, problem: response.data });
  }

  return response.data;
};

const handleError = () => {
  // server error
  if (!response.ok && response.status >= 500) {
    if (response.status >= 500) {
      // if (response.data && response.data.message) {
      Alert.alert('Đang bảo trì server', 'Xin vui lòng quay lại sau');
      return;
      // }
    }
    return Promise.reject(response);
  }
  // client error
  if (!response.ok && response.status >= 400 && response.status < 500) {
    return Promise.reject({
      // message: response.data.title,
      error: true
    });
  }
  // na
  return Promise.reject({ ...response.data });
};

export { handleError, handleResponse };
