require("dotenv").config();

const CONFIG = {
    API_BASE_URL: process.env.API_URL,
    APPID: process.env.WEATHER_APP_ID
}
module.exports = CONFIG