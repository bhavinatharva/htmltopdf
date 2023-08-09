const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};
const postService = async (
  API_URL: string,
  PARAMS: object,
): Promise<{status: number; data: any}> => {
  const result = await fetch(API_URL, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify(PARAMS),
  });
  const returnResponse = {status: 400, data: undefined};
  if (result.ok) {
    const responseJson = await result.json();
    returnResponse.status = result.status;
    returnResponse.data = responseJson;
  }
  return returnResponse;
};
const getService = async (
  API_URL: string,
  PARAMS?: object,
): Promise<{status: number; data: any}> => {
  let URL = API_URL;
  if (PARAMS) {
    URL = API_URL + jsonToQueryString(PARAMS);
  }
  const result = await fetch(URL, {
    method: 'GET',
    headers: HEADERS,
  });
  const returnResponse = {status: 400, data: undefined};
  if (result.ok) {
    const responseJson = await result.json();
    returnResponse.status = result.status;
    returnResponse.data = responseJson;
  }
  return returnResponse;
};
const jsonToQueryString = (json: any) => {
  return (
    '?' +
    Object.keys(json)
      .map(function (key: string) {
        return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
      })
      .join('&')
  );
};
export {postService, getService};
