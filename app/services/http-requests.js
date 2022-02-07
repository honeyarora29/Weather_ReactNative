// @flow

import config from '../../config';
import axios from 'axios';

export const fetchWeatherData = (searchQuery) => (
fetch(config.API_URL+"/current.json?key="+config.API_KEY+"&q=" +searchQuery +"&aqi=yes")
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => err)
)





