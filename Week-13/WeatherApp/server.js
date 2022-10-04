const CONFIG = require('./config');
const { paginate } = require('./utils/pagination');
const { GenerateRespone, GenerateErrorRespone } = require('./utils/response');

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const getWeatherDataForCity = async (cityName) => {
    try {
        let API_URL = `${CONFIG.API_BASE_URL}/weather?q=${cityName}&appid=${CONFIG.APPID}`
        const response = await fetch(API_URL);
        const data = await response.json();
        return GenerateRespone(data);
    } catch (error) {
        return GenerateErrorRespone("error: " + error);
    }
};
const getWeatherDataForCities = async (cityArr, size = 0, page = 0) => {
    try {
        cityArr = JSON.parse(cityArr);
        if (size > 0 && page > 0)
            cityArr = paginate(cityArr, size, page);
        const response = await Promise.all(
            cityArr.map(getWeatherDataForCity)
        );
        return GenerateRespone(response);
    } catch (error) {
        return GenerateErrorRespone("error: " + error);
    }
}


const getForecastForNextXDays = async (lat, lon, days) => {
    try {
        let API_URL = `${CONFIG.API_BASE_URL}/forecast/?lat=${lat}&lon=${lon}&cnt=${days}&appid=${CONFIG.APPID}`;
        const response = await fetch(API_URL);
        const data = await response.json();
        return GenerateRespone(data);
    } catch (error) {
        return GenerateErrorRespone("error: " + error);
    }
}

module.exports = { getWeatherDataForCity, getWeatherDataForCities, getForecastForNextXDays };