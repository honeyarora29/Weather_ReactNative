// @flow
import { fetchWeatherData } from '../../services/http-requests';
import { fetchDataError } from './fetch-data-error';
import { fetchDataRequest } from './fetch-data-request';
import { fetchDataSuccess } from './fetch-data-success';

export const fetchData = searchQuery => (
  (dispatch: Function) => {
    dispatch(fetchDataRequest());
    return fetchWeatherData(searchQuery)
      .then((weatherInfo) => dispatch(fetchDataSuccess(weatherInfo)))
      .catch(() => dispatch(fetchDataError()));
  }
);



