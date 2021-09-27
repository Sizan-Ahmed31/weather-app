const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', function() {
    const input = document.getElementById('weather-input').value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input + '&appid=de40b791eff8645c7a981e63dac32871')
        .then((response) => response.json())
        .then((json) => {

            const name = json.name;
            const tem = json.main.temp;
            const cels = tem - 273.15;
            const desc = json.weather[0].description;

            document.getElementById('city').innerHTML = name;
            document.getElementById('temp').innerHTML = cels.toFixed(2);
            document.getElementById('des').innerHTML = desc
        });



})



// const inputBtn = document.getElementById('submit-btn');
// inputBtn.addEventListener('click', function() {
//     const select = document.getElementById('weather-input').value;
//     axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + select + '&appid=de40b791eff8645c7a981e63dac32871')
//         .then((response) => {
//             const name = response.data.name;

//             const tem = response.data.main.temp;
//             const cels = tem - 273.15;

//             const desc = response.data.weather[0].description;

//             document.getElementById('city').innerHTML = name;

//             document.getElementById('temp').innerHTML = cels.toFixed(2);

//             document.getElementById('des').innerHTML = desc

//         })
// })