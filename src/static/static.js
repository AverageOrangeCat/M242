function updateTempData(callback) {
    const temp = document.getElementById('temp');
    const temp_text = document.getElementById('temp-text');
    const temp_link = document.getElementById('temp-link');

    fetch('https://tecdottir.herokuapp.com/measurements/tiefenbrunnen')
    .then(data => data.json())
    .then(json => {
        const measurements = json.result;
        const last_index = json.result.length - 1;
        const measured_temp = measurements[last_index].values.air_temperature.value;

        if (measured_temp <= 10) {
            temp_text.innerHTML = "It's pretty cold 🥶";
            temp_link.innerHTML = "Need a Jacket?";
            temp_link.href = "https://www.galaxus.ch/search?q=jacket";
        } else if (measured_temp <= 17.5) {
            temp_text.innerHTML = "It's still fresh 😬";
            temp_link.innerHTML = "Need a Scarf?";
            temp_link.href = "https://www.galaxus.ch/search?q=scarf";
        } else if (measured_temp <= 25) {
            temp_text.innerHTML = "Ahhh just perfect 😎";
            temp_link.innerHTML = "Need a Drink?";
            temp_link.href = "https://www.galaxus.ch/search?q=drink";
        } else if (measured_temp <= 30) {
            temp_text.innerHTML = "It slowly getting hot 🥵"
            temp_link.innerHTML = "Need a Fan?";
            temp_link.href = "https://www.galaxus.ch/search?q=fan";
        } else if (measured_temp > 30) {
            temp_text.innerHTML = "Ahhh it's burning 🤯";
            temp_link.innerHTML = "Need a Fridge?";
            temp_link.href = "https://www.galaxus.ch/search?q=fridge";
        }

        temp.innerHTML = measured_temp + '°C';

        if (callback) {
            callback();
        }
    });
}

function hideLoading() {
    const loading = document.getElementById('loading');
    const content = document.getElementById('content');
    
    loading.classList.add('fade-out');

    setTimeout(() => {
        content.classList.add('fade-in');
    }, 3000)
}

updateTempData(() => {
    hideLoading();
});

setInterval(() => {
    updateTempData()
}, 100000);

window.addEventListener('offline', () => {
    const title = document.getElementById('title');
    
    title.innerHTML = title.innerHTML.replace('🟢', '🟠');
    title.innerHTML = title.innerHTML.replace('🔴', '🟠');
});

window.addEventListener('online', () => {
    const title = document.getElementById('title');
    
    title.innerHTML = title.innerHTML.replace('200 🟠', '200 🟢');
    title.innerHTML = title.innerHTML.replace('404 🟠', '404 🔴');
});
