function attachEvents() {
    let conditions = {
        'Sunny': '☀',
        'Partly sunny': '⛅',
        'Overcast': '☁',
        'Rain': '☂',
    };

    const location = document.getElementById('location');

    const forecast = document.getElementById('forecast');

    document.getElementById('submit').addEventListener('click', getWeather);

    async function getWeather() {
        try {
            const url = `http://localhost:3030/jsonstore/forecaster/locations`;

            const response = await fetch(url);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(`${response.status} (${response.statusText})`);
            }

            const town = data.find(x => x.name.toLowerCase() == location.value.toLowerCase());

            if (!town) {
                throw new Error('Error (Invalid town name)!')
            }

            forecast.style.display = "block";

            if (town) {
                getWeatherToday(town.code);
                getWeatherUpcoming(town.code);

                location.value = '';
            }
        } catch (error) {
            forecast.style.display = "block";
            const p = createElement('p', error.message, ['id', 'errorMessage']);
            forecast.appendChild(p);
        }
    }

    async function getWeatherToday(code) {
        if (document.getElementById('errorMessage')) {
            document.getElementById('errorMessage').remove();
        }

        const url = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

        const response = await fetch(url);
        const data = await response.json();

        const current = document.getElementById('current');

        const divForecasts = createElement('div', '', ['class', 'forecasts']);

        if (document.querySelector('div.forecasts')) {
            document.querySelector('div.forecasts').remove();
        }

        const spanConditionSymbol = createElement('span', conditions[data.forecast.condition], ['class', 'condition symbol']);

        const spanaCondition = createElement('span', '', ['class', 'condition']);

        const townName = createElement('span', data.name, ['class', 'forecast-data']);
        const degreesRangeText = `${data.forecast.low}°/${data.forecast.high}°`;
        const degreesRange = createElement('span', degreesRangeText, ['class', 'forecast-data']);
        const condition = createElement('span', data.forecast.condition, ['class', 'forecast-data']);

        spanaCondition.appendChild(townName);
        spanaCondition.appendChild(degreesRange);
        spanaCondition.appendChild(condition);

        divForecasts.appendChild(spanConditionSymbol);
        divForecasts.appendChild(spanaCondition);

        current.appendChild(divForecasts);
    }

    async function getWeatherUpcoming(code) {
        const url = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

        const response = await fetch(url);
        const data = await response.json();

        const upcoming = document.getElementById('upcoming');

        if (document.querySelector('div.forecast-info')) {
            document.querySelector('div.forecast-info').remove();
        }

        const divForecastInfo = createElement('div', '', ['class', 'forecast-info']);

        for (const forecast of data.forecast) {
            const spanUpcoming = createElement('span', '', ['class', 'upcoming']);

            const symbol = createElement('span', conditions[forecast.condition], ['class', 'symbol']);
            const degreesRangeText = `${forecast.low}°/${forecast.high}°`;
            const degreesRange = createElement('span', degreesRangeText, ['class', 'forecast-data']);
            const condition = createElement('span', forecast.condition, ['class', 'forecast-data']);

            spanUpcoming.appendChild(symbol);
            spanUpcoming.appendChild(degreesRange);
            spanUpcoming.appendChild(condition);

            divForecastInfo.appendChild(spanUpcoming);
        }

        upcoming.appendChild(divForecastInfo);
    }

    function createElement(type, content, attributes = []) {
        const element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (attributes.length > 0) {
            element.setAttribute(attributes[0], attributes[1]);
        }

        return element;
    }
}

attachEvents();