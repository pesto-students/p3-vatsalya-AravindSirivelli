const express = require("express");
const router = express.Router();

const { getWeatherDataForCity, getForecastForNextXDays, getWeatherDataForCities } = require("./server");

router.get("/", (req, res) => {
    res.send("Api Router");
})

router.get("/city/:cityName", async (req, res) => {
    const cityName = req.params?.cityName;
    const data = await getWeatherDataForCity(cityName);
    res.send(data);
});

router.get("/list", async (req, res) => {
    const cityArr = req.query.cityArr;
    const data = await getWeatherDataForCities(cityArr);
    res.send(data);
});

router.get("/paginate", async (req, res) => {
    const { size, page, cityArr } = req.query;
    const data = await getWeatherDataForCities(cityArr, size, page);
    res.send(data);
});

router.get("/forecast", async (req, res) => {
    const { lat, lon, days } = req.query;
    const data = await getForecastForNextXDays(lat, lon, days);
    res.send(data);
});
module.exports = router;



// Test URL
//http://localhost:3010/weather/city/Tokyo
//http://localhost:3010/weather/list?cityArr=['Tokyo','London','NewYork']
//http://localhost:3010/weather/paginate?size=2&page=1&cityArr=['Tokyo','London','Berlin','Norway','Sydney']
//http://localhost:3010/weather/forecast?lat=35.6895&lon=139.6917&days=10