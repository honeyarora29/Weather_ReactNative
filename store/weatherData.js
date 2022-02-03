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



//const fetchApiCall = () => {
//const [weather, setWeather] = useState('');
//      axios({
//          "method": "GET",
//          "url": config.API_URL+"/current.json?key="+config.API_KEY+"&q=London&aqi=yes"
//        })
//          .then((response) => {
//          const details = {
//          'name':response.data.location.name,
//          "temp_c":response.data.current.temp_c,
//          "localtime":response.data.location.localtime,
//                  "temp_f": response.data.current.temp_f,
//                  "wind_mph": response.data.current.wind_mph,
//                  "wind_kph": response.data.current.wind_kph,
//                  "pressure_mb": response.data.current.pressure_mb,
//                  "pressure_in": response.data.current.pressure_in,
//                  "precip_mm": response.data.current.precip_mm,
//                  "precip_in": response.data.current.precip_in,
//                  "humidity": response.data.current.humidity,
//          }
//           setWeather(details);
//          })
//          .catch((error) => {
//            console.log(error)
//          });
//         return weather;
//  }
//
//  export default fetchApiCall;