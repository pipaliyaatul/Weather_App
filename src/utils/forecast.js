const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0e1014e10593b66e53a5fe5644b4b246&query=' + latitude + ',' + longitude

    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            debugger
            callback(undefined, ' It is currently '+body.current.weather_descriptions[0] + ' and ' + body.current.temperature + ' degress out')
        }
    })
}
console.log('dummy')
module.exports = forecast