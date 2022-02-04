import config from '../config.js'
import axios from 'axios';
import {fetchData, fetchSuccess, fetchError} from './ApiAction';

const fetchApiCall = () => (dispatch) => {
  dispatch(fetchData());
  return new Promise(() => {
    axios
      .get(config.API_URL+"/current.json?key="+config.API_KEY+"&q=London&aqi=yes")
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchError(error));
        console.log(error);
      });
  });
};

export default fetchApiCall;