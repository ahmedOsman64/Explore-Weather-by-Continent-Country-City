// Global state
let currentUnits = 'celsius';
let currentTheme = 'dark';
let selectedLocation = null;

// Built-in data
const continents = [
    'Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania', 'Antarctica'
];

const countries = {
    'Africa': [
        { name: 'Somalia', code: 'SO', capital: 'Mogadishu', area: 637657, population: 15893222, currency: 'Somali Shilling', languages: ['Somali', 'Arabic'], flag: '🇸🇴', region: 'Eastern Africa' },
        { name: 'Nigeria', code: 'NG', capital: 'Abuja', area: 923768, population: 206139589, currency: 'Nigerian Naira', languages: ['English'], flag: '🇳🇬', region: 'Western Africa' },
        { name: 'Egypt', code: 'EG', capital: 'Cairo', area: 1001449, population: 102334404, currency: 'Egyptian Pound', languages: ['Arabic'], flag: '🇪🇬', region: 'Northern Africa' },
        { name: 'South Africa', code: 'ZA', capital: 'Cape Town', area: 1221037, population: 59308690, currency: 'South African Rand', languages: ['Afrikaans', 'English'], flag: '🇿🇦', region: 'Southern Africa' },
        { name: 'Kenya', code: 'KE', capital: 'Nairobi', area: 580367, population: 53771296, currency: 'Kenyan Shilling', languages: ['English', 'Swahili'], flag: '🇰🇪', region: 'Eastern Africa' }
    ],
    'Asia': [
        { name: 'China', code: 'CN', capital: 'Beijing', area: 9596960, population: 1439323776, currency: 'Chinese Yuan', languages: ['Chinese'], flag: '🇨🇳', region: 'Eastern Asia' },
        { name: 'Japan', code: 'JP', capital: 'Tokyo', area: 377975, population: 126476461, currency: 'Japanese Yen', languages: ['Japanese'], flag: '🇯🇵', region: 'Eastern Asia' },
        { name: 'India', code: 'IN', capital: 'New Delhi', area: 3287263, population: 1380004385, currency: 'Indian Rupee', languages: ['Hindi', 'English'], flag: '🇮🇳', region: 'Southern Asia' },
        { name: 'Thailand', code: 'TH', capital: 'Bangkok', area: 513120, population: 69799978, currency: 'Thai Baht', languages: ['Thai'], flag: '🇹🇭', region: 'South-Eastern Asia' }
    ],
    'Europe': [
        { name: 'Germany', code: 'DE', capital: 'Berlin', area: 357114, population: 83783942, currency: 'Euro', languages: ['German'], flag: '🇩🇪', region: 'Western Europe' },
        { name: 'France', code: 'FR', capital: 'Paris', area: 643801, population: 65273511, currency: 'Euro', languages: ['French'], flag: '🇫🇷', region: 'Western Europe' },
        { name: 'United Kingdom', code: 'GB', capital: 'London', area: 242495, population: 67886011, currency: 'British Pound', languages: ['English'], flag: '🇬🇧', region: 'Northern Europe' },
        { name: 'Italy', code: 'IT', capital: 'Rome', area: 301340, population: 60461826, currency: 'Euro', languages: ['Italian'], flag: '🇮🇹', region: 'Southern Europe' }
    ],
    'North America': [
        { name: 'United States', code: 'US', capital: 'Washington D.C.', area: 9833517, population: 331002651, currency: 'US Dollar', languages: ['English'], flag: '🇺🇸', region: 'Northern America' },
        { name: 'Canada', code: 'CA', capital: 'Ottawa', area: 9984670, population: 37742154, currency: 'Canadian Dollar', languages: ['English', 'French'], flag: '🇨🇦', region: 'Northern America' },
        { name: 'Mexico', code: 'MX', capital: 'Mexico City', area: 1964375, population: 128932753, currency: 'Mexican Peso', languages: ['Spanish'], flag: '🇲🇽', region: 'Central America' }
    ],
    'South America': [
        { name: 'Brazil', code: 'BR', capital: 'Brasília', area: 8515767, population: 212559417, currency: 'Brazilian Real', languages: ['Portuguese'], flag: '🇧🇷', region: 'South America' },
        { name: 'Argentina', code: 'AR', capital: 'Buenos Aires', area: 2780400, population: 45195774, currency: 'Argentine Peso', languages: ['Spanish'], flag: '🇦🇷', region: 'South America' },
        { name: 'Colombia', code: 'CO', capital: 'Bogotá', area: 1141748, population: 50882891, currency: 'Colombian Peso', languages: ['Spanish'], flag: '🇨🇴', region: 'South America' }
    ],
    'Oceania': [
        { name: 'Australia', code: 'AU', capital: 'Canberra', area: 7692024, population: 25499884, currency: 'Australian Dollar', languages: ['English'], flag: '🇦🇺', region: 'Australia and New Zealand' },
        { name: 'New Zealand', code: 'NZ', capital: 'Wellington', area: 268838, population: 4822233, currency: 'New Zealand Dollar', languages: ['English'], flag: '🇳🇿', region: 'Australia and New Zealand' },
        { name: 'Fiji', code: 'FJ', capital: 'Suva', area: 18274, population: 896445, currency: 'Fijian Dollar', languages: ['English', 'Fijian'], flag: '🇫🇯', region: 'Melanesia' }
    ],
    'Antarctica': [
        { name: 'Antarctica', code: 'AQ', capital: 'N/A', area: 14000000, population: 0, currency: 'N/A', languages: ['N/A'], flag: '🇦🇶', region: 'Antarctica' }
    ]
};

const cities = {
    'Somalia': [
        { name: 'Mogadishu', lat: 2.0469, lon: 45.3182 },
        { name: 'Hargeisa', lat: 9.5600, lon: 44.0650 },
        { name: 'Kismayo', lat: -0.3582, lon: 42.5454 },
        { name: 'Baidoa', lat: 3.1140, lon: 43.6500 },
        { name: 'Bosaso', lat: 11.2842, lon: 49.1816 },
        { name: 'Garowe', lat: 8.4020, lon: 48.4845 }
    ],
    'Nigeria': [
        { name: 'Lagos', lat: 6.5244, lon: 3.3792 },
        { name: 'Abuja', lat: 9.0765, lon: 7.3986 },
        { name: 'Kano', lat: 12.0022, lon: 8.5920 },
        { name: 'Ibadan', lat: 7.3775, lon: 3.9470 },
        { name: 'Port Harcourt', lat: 4.8156, lon: 7.0498 }
    ],
    'Egypt': [
        { name: 'Cairo', lat: 30.0444, lon: 31.2357 },
        { name: 'Alexandria', lat: 31.2001, lon: 29.9187 },
        { name: 'Giza', lat: 30.0131, lon: 31.2089 },
        { name: 'Luxor', lat: 25.6872, lon: 32.6396 },
        { name: 'Aswan', lat: 24.0889, lon: 32.8998 }
    ],
    'South Africa': [
        { name: 'Cape Town', lat: -33.9249, lon: 18.4241 },
        { name: 'Johannesburg', lat: -26.2041, lon: 28.0473 },
        { name: 'Durban', lat: -29.8587, lon: 31.0218 },
        { name: 'Pretoria', lat: -25.7479, lon: 28.2293 },
        { name: 'Port Elizabeth', lat: -33.9608, lon: 25.6022 }
    ],
    'Kenya': [
        { name: 'Nairobi', lat: -1.2921, lon: 36.8219 },
        { name: 'Mombasa', lat: -4.0435, lon: 39.6682 },
        { name: 'Kisumu', lat: -0.1022, lon: 34.7617 },
        { name: 'Nakuru', lat: -0.3031, lon: 36.0800 },
        { name: 'Eldoret', lat: 0.5143, lon: 35.2698 }
    ],
    'China': [
        { name: 'Beijing', lat: 39.9042, lon: 116.4074 },
        { name: 'Shanghai', lat: 31.2304, lon: 121.4737 },
        { name: 'Guangzhou', lat: 23.1291, lon: 113.2644 },
        { name: 'Shenzhen', lat: 22.5431, lon: 114.0579 },
        { name: 'Chengdu', lat: 30.5728, lon: 104.0668 }
    ],
    'Japan': [
        { name: 'Tokyo', lat: 35.6762, lon: 139.6503 },
        { name: 'Osaka', lat: 34.6937, lon: 135.5023 },
        { name: 'Kyoto', lat: 35.0116, lon: 135.7681 },
        { name: 'Yokohama', lat: 35.4437, lon: 139.6380 },
        { name: 'Nagoya', lat: 35.1815, lon: 136.9066 }
    ],
    'India': [
        { name: 'New Delhi', lat: 28.6139, lon: 77.2090 },
        { name: 'Mumbai', lat: 19.0760, lon: 72.8777 },
        { name: 'Bangalore', lat: 12.9716, lon: 77.5946 },
        { name: 'Chennai', lat: 13.0827, lon: 80.2707 },
        { name: 'Kolkata', lat: 22.5726, lon: 88.3639 }
    ],
    'Thailand': [
        { name: 'Bangkok', lat: 13.7563, lon: 100.5018 },
        { name: 'Chiang Mai', lat: 18.7883, lon: 98.9853 },
        { name: 'Phuket', lat: 7.8804, lon: 98.3923 },
        { name: 'Pattaya', lat: 12.9236, lon: 100.8825 },
        { name: 'Krabi', lat: 8.0863, lon: 98.9063 }
    ],
    'Germany': [
        { name: 'Berlin', lat: 52.5200, lon: 13.4050 },
        { name: 'Munich', lat: 48.1351, lon: 11.5820 },
        { name: 'Hamburg', lat: 53.5511, lon: 9.9937 },
        { name: 'Cologne', lat: 50.9375, lon: 6.9603 },
        { name: 'Frankfurt', lat: 50.1109, lon: 8.6821 }
    ],
    'France': [
        { name: 'Paris', lat: 48.8566, lon: 2.3522 },
        { name: 'Lyon', lat: 45.7640, lon: 4.8357 },
        { name: 'Marseille', lat: 43.2965, lon: 5.3698 },
        { name: 'Nice', lat: 43.7102, lon: 7.2620 },
        { name: 'Toulouse', lat: 43.6047, lon: 1.4442 }
    ],
    'United Kingdom': [
        { name: 'London', lat: 51.5074, lon: -0.1278 },
        { name: 'Manchester', lat: 53.4808, lon: -2.2426 },
        { name: 'Birmingham', lat: 52.4862, lon: -1.8904 },
        { name: 'Edinburgh', lat: 55.9533, lon: -3.1883 },
        { name: 'Liverpool', lat: 53.4084, lon: -2.9916 }
    ],
    'Italy': [
        { name: 'Rome', lat: 41.9028, lon: 12.4964 },
        { name: 'Milan', lat: 45.4642, lon: 9.1900 },
        { name: 'Naples', lat: 40.8518, lon: 14.2681 },
        { name: 'Florence', lat: 43.7696, lon: 11.2558 },
        { name: 'Venice', lat: 45.4408, lon: 12.3155 }
    ],
    'United States': [
        { name: 'New York', lat: 40.7128, lon: -74.0060 },
        { name: 'Los Angeles', lat: 34.0522, lon: -118.2437 },
        { name: 'Chicago', lat: 41.8781, lon: -87.6298 },
        { name: 'Houston', lat: 29.7604, lon: -95.3698 },
        { name: 'Miami', lat: 25.7617, lon: -80.1918 }
    ],
    'Canada': [
        { name: 'Toronto', lat: 43.6532, lon: -79.3832 },
        { name: 'Vancouver', lat: 49.2827, lon: -123.1207 },
        { name: 'Montreal', lat: 45.5017, lon: -73.5673 },
        { name: 'Calgary', lat: 51.0447, lon: -114.0719 },
        { name: 'Ottawa', lat: 45.4215, lon: -75.6972 }
    ],
    'Mexico': [
        { name: 'Mexico City', lat: 19.4326, lon: -99.1332 },
        { name: 'Guadalajara', lat: 20.6597, lon: -103.3496 },
        { name: 'Monterrey', lat: 25.6866, lon: -100.3161 },
        { name: 'Cancun', lat: 21.1619, lon: -86.8515 },
        { name: 'Tijuana', lat: 32.5149, lon: -117.0382 }
    ],
    'Brazil': [
        { name: 'São Paulo', lat: -23.5505, lon: -46.6333 },
        { name: 'Rio de Janeiro', lat: -22.9068, lon: -43.1729 },
        { name: 'Brasília', lat: -15.8267, lon: -47.9218 },
        { name: 'Salvador', lat: -12.9714, lon: -38.5014 },
        { name: 'Fortaleza', lat: -3.7319, lon: -38.5267 }
    ],
    'Argentina': [
        { name: 'Buenos Aires', lat: -34.6118, lon: -58.3960 },
        { name: 'Córdoba', lat: -31.4201, lon: -64.1888 },
        { name: 'Rosario', lat: -32.9442, lon: -60.6505 },
        { name: 'Mendoza', lat: -32.8895, lon: -68.8458 },
        { name: 'La Plata', lat: -34.9215, lon: -57.9545 }
    ],
    'Colombia': [
        { name: 'Bogotá', lat: 4.7110, lon: -74.0721 },
        { name: 'Medellín', lat: 6.2442, lon: -75.5812 },
        { name: 'Cali', lat: 3.4516, lon: -76.5320 },
        { name: 'Barranquilla', lat: 10.9685, lon: -74.7813 },
        { name: 'Cartagena', lat: 10.3910, lon: -75.4794 }
    ],
    'Australia': [
        { name: 'Sydney', lat: -33.8688, lon: 151.2093 },
        { name: 'Melbourne', lat: -37.8136, lon: 144.9631 },
        { name: 'Brisbane', lat: -27.4698, lon: 153.0251 },
        { name: 'Perth', lat: -31.9505, lon: 115.8605 },
        { name: 'Canberra', lat: -35.2809, lon: 149.1300 }
    ],
    'New Zealand': [
        { name: 'Auckland', lat: -36.8485, lon: 174.7633 },
        { name: 'Wellington', lat: -41.2865, lon: 174.7762 },
        { name: 'Christchurch', lat: -43.5321, lon: 172.6362 },
        { name: 'Hamilton', lat: -37.7870, lon: 175.2793 },
        { name: 'Tauranga', lat: -37.6878, lon: 176.1651 }
    ],
    'Fiji': [
        { name: 'Suva', lat: -18.1248, lon: 178.4501 },
        { name: 'Nadi', lat: -17.7765, lon: 177.4162 },
        { name: 'Lautoka', lat: -17.6103, lon: 177.4570 },
        { name: 'Labasa', lat: -16.4333, lon: 179.3667 },
        { name: 'Ba', lat: -17.5333, lon: 177.6667 }
    ],
    'Antarctica': [
        { name: 'McMurdo Station', lat: -77.8419, lon: 166.6863 },
        { name: 'Rothera Research Station', lat: -67.5681, lon: -68.1300 },
        { name: 'Halley Research Station', lat: -75.5833, lon: -26.6500 }
    ]
};

const demoWeatherData = {
    current: {
        temperature: 22,
        feels_like: 25,
        humidity: 65,
        wind_speed: 12,
        wind_direction: 'NW',
        pressure: 1013,
        cloud_cover: 40,
        condition: 'Partly Cloudy'
    },
    hourly: [
        { time: '00:00', temperature: 20, condition: 'Clear' },
        { time: '03:00', temperature: 18, condition: 'Clear' },
        { time: '06:00', temperature: 19, condition: 'Partly Cloudy' },
        { time: '09:00', temperature: 22, condition: 'Partly Cloudy' },
        { time: '12:00', temperature: 26, condition: 'Sunny' },
        { time: '15:00', temperature: 28, condition: 'Sunny' },
        { time: '18:00', temperature: 25, condition: 'Partly Cloudy' },
        { time: '21:00', temperature: 22, condition: 'Clear' }
    ],
    daily: [
        { day: 'Today', min: 18, max: 28, condition: 'Partly Cloudy' },
        { day: 'Tomorrow', min: 20, max: 30, condition: 'Sunny' },
        { day: 'Wednesday', min: 19, max: 27, condition: 'Cloudy' },
        { day: 'Thursday', min: 17, max: 25, condition: 'Rainy' },
        { day: 'Friday', min: 16, max: 23, condition: 'Rainy' },
        { day: 'Saturday', min: 18, max: 26, condition: 'Partly Cloudy' },
        { day: 'Sunday', min: 20, max: 29, condition: 'Sunny' }
    ]
};

// DOM Elements
let continentSelect, countrySelect, citySelect, useLocationBtn;
let countryOverview, weatherSection;
let celsiusBtn, fahrenheitBtn;
let themeToggle, themeIcon;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeElements();
    initializeData();
    initializeEventListeners();
    initializeAnimations();
    updateCopyrightYear();
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
});

function initializeElements() {
    continentSelect = document.getElementById('continent-select');
    countrySelect = document.getElementById('country-select');
    citySelect = document.getElementById('city-select');
    useLocationBtn = document.getElementById('use-location');
    countryOverview = document.getElementById('country-overview');
    weatherSection = document.getElementById('weather-section');
    celsiusBtn = document.getElementById('celsius-btn');
    fahrenheitBtn = document.getElementById('fahrenheit-btn');
    themeToggle = document.querySelector('.theme-toggle');
    themeIcon = document.getElementById('theme-icon');
}

function initializeData() {
    // Populate continent select
    continents.forEach(continent => {
        const option = document.createElement('option');
        option.value = continent;
        option.textContent = continent;
        continentSelect.appendChild(option);
    });
}

function initializeEventListeners() {
    // Continent selection
    continentSelect.addEventListener('change', handleContinentChange);
    
    // Country selection
    countrySelect.addEventListener('change', handleCountryChange);
    
    // City selection
    citySelect.addEventListener('change', handleCityChange);
    
    // Use location button
    useLocationBtn.addEventListener('click', handleUseLocation);
    
    // Units toggle
    celsiusBtn.addEventListener('click', () => toggleUnits('celsius'));
    fahrenheitBtn.addEventListener('click', () => toggleUnits('fahrenheit'));
    
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Smooth scroll for CTA button
    document.querySelector('.btn-primary').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
}

function handleContinentChange() {
    const selectedContinent = continentSelect.value;
    
    // Reset dependent selects
    countrySelect.innerHTML = '<option value="">Choose a country...</option>';
    citySelect.innerHTML = '<option value="">Choose a city...</option>';
    countrySelect.disabled = !selectedContinent;
    citySelect.disabled = true;
    
    // Hide sections
    hideCountryOverview();
    hideWeatherSection();
    
    if (selectedContinent && countries[selectedContinent]) {
        countries[selectedContinent].forEach(country => {
            const option = document.createElement('option');
            option.value = country.name;
            option.textContent = country.name;
            countrySelect.appendChild(option);
        });
    }
}

function handleCountryChange() {
    const selectedCountry = countrySelect.value;
    const selectedContinent = continentSelect.value;
    
    // Reset city select
    citySelect.innerHTML = '<option value="">Choose a city...</option>';
    citySelect.disabled = !selectedCountry;
    
    // Hide weather section
    hideWeatherSection();
    
    if (selectedCountry && cities[selectedCountry]) {
        cities[selectedCountry].forEach(city => {
            const option = document.createElement('option');
            option.value = city.name;
            option.textContent = city.name;
            option.dataset.lat = city.lat;
            option.dataset.lon = city.lon;
            citySelect.appendChild(option);
        });
        
        // Show country overview
        showCountryOverview(selectedCountry, selectedContinent);
    } else {
        hideCountryOverview();
    }
}

function handleCityChange() {
    const selectedCity = citySelect.value;
    const selectedOption = citySelect.options[citySelect.selectedIndex];
    
    if (selectedCity && selectedOption.dataset.lat && selectedOption.dataset.lon) {
        selectedLocation = {
            city: selectedCity,
            country: countrySelect.value,
            lat: parseFloat(selectedOption.dataset.lat),
            lon: parseFloat(selectedOption.dataset.lon)
        };
        
        showWeatherSection();
        fetchWeatherData(selectedLocation.lat, selectedLocation.lon);
    } else {
        hideWeatherSection();
    }
}

function handleUseLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by this browser.');
        return;
    }
    
    useLocationBtn.textContent = '📍 Getting location...';
    useLocationBtn.disabled = true;
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            selectedLocation = {
                city: 'Current Location',
                country: 'Unknown',
                lat: lat,
                lon: lon
            };
            
            // Reset selects
            continentSelect.value = '';
            countrySelect.innerHTML = '<option value="">Choose a country...</option>';
            citySelect.innerHTML = '<option value="">Choose a city...</option>';
            countrySelect.disabled = true;
            citySelect.disabled = true;
            
            hideCountryOverview();
            showWeatherSection();
            fetchWeatherData(lat, lon);
            
            useLocationBtn.textContent = '📍 Use My Location';
            useLocationBtn.disabled = false;
        },
        function(error) {
            console.error('Geolocation error:', error);
            alert('Unable to get your location. Please select manually.');
            useLocationBtn.textContent = '📍 Use My Location';
            useLocationBtn.disabled = false;
        }
    );
}

function showCountryOverview(countryName, continentName) {
    const country = countries[continentName]?.find(c => c.name === countryName);
    if (!country) return;
    
    // Update country header
    document.getElementById('country-flag').textContent = country.flag;
    document.getElementById('country-name').textContent = country.name;
    document.getElementById('country-region').textContent = country.region;
    
    // Update country info
    const countryInfo = document.getElementById('country-info');
    countryInfo.innerHTML = `
        <div class="info-item">
            <span class="info-label">Capital</span>
            <span class="info-value">${country.capital}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Area</span>
            <span class="info-value">${country.area.toLocaleString()} km²</span>
        </div>
        <div class="info-item">
            <span class="info-label">Population</span>
            <span class="info-value">${country.population.toLocaleString()}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Currency</span>
            <span class="info-value">${country.currency}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Languages</span>
            <span class="info-value">${country.languages.join(', ')}</span>
        </div>
        <div class="info-item">
            <span class="info-label">Population Density</span>
            <span class="info-value">${Math.round(country.population / country.area)} per km²</span>
        </div>
    `;
    
    // Create charts
    createPopulationDensityChart(country);
    createUrbanRuralChart();
    
    countryOverview.classList.add('visible');
    countryOverview.style.display = 'block';
}

function hideCountryOverview() {
    countryOverview.classList.remove('visible');
    countryOverview.style.display = 'none';
}

function showWeatherSection() {
    weatherSection.classList.add('visible');
    weatherSection.style.display = 'block';
}

function hideWeatherSection() {
    weatherSection.classList.remove('visible');
    weatherSection.style.display = 'none';
}

async function fetchWeatherData(lat, lon) {
    const loadingElement = document.getElementById('weather-loading');
    const errorElement = document.getElementById('weather-error');
    const contentElement = document.getElementById('weather-content');
    
    loadingElement.style.display = 'flex';
    errorElement.style.display = 'none';
    contentElement.style.opacity = '0.5';
    
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m,cloud_cover&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&timezone=auto`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('Weather API request failed');
        
        const data = await response.json();
        displayWeatherData(data);
        
        loadingElement.style.display = 'none';
        contentElement.style.opacity = '1';
        
    } catch (error) {
        console.error('Weather fetch error:', error);
        
        // Show error and use demo data
        errorElement.style.display = 'block';
        loadingElement.style.display = 'none';
        contentElement.style.opacity = '1';
        
        displayWeatherData(null, true);
    }
}

function displayWeatherData(data, useDemo = false) {
    if (useDemo || !data) {
        displayCurrentWeather(demoWeatherData.current);
        displayHourlyWeather(demoWeatherData.hourly);
        displayDailyWeather(demoWeatherData.daily);
        return;
    }
    
    // Process API data
    const current = {
        temperature: Math.round(data.current_weather.temperature),
        feels_like: Math.round(data.current_weather.temperature + 2), // Approximation
        humidity: data.hourly.relative_humidity_2m[0] || 50,
        wind_speed: Math.round(data.current_weather.windspeed),
        wind_direction: getWindDirection(data.current_weather.winddirection),
        pressure: 1013, // Default as not provided by Open-Meteo
        cloud_cover: data.hourly.cloud_cover[0] || 0,
        condition: getWeatherCondition(data.current_weather.weathercode)
    };
    
    const hourly = data.hourly.time.slice(0, 8).map((time, index) => ({
        time: new Date(time).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        temperature: Math.round(data.hourly.temperature_2m[index]),
        condition: getWeatherCondition(data.current_weather.weathercode)
    }));
    
    const daily = data.daily.time.slice(0, 7).map((date, index) => ({
        day: index === 0 ? 'Today' : new Date(date).toLocaleDateString('en-US', { weekday: 'long' }),
        min: Math.round(data.daily.temperature_2m_min[index]),
        max: Math.round(data.daily.temperature_2m_max[index]),
        condition: getWeatherCondition(data.current_weather.weathercode)
    }));
    
    displayCurrentWeather(current);
    displayHourlyWeather(hourly);
    displayDailyWeather(daily);
}

function displayCurrentWeather(current) {
    const container = document.getElementById('weather-current');
    const temp = currentUnits === 'celsius' ? current.temperature : celsiusToFahrenheit(current.temperature);
    const feelsLike = currentUnits === 'celsius' ? current.feels_like : celsiusToFahrenheit(current.feels_like);
    const unit = currentUnits === 'celsius' ? '°C' : '°F';
    
    container.innerHTML = `
        <div class="weather-item">
            <div class="weather-value">${temp}${unit}</div>
            <div class="weather-label">Temperature</div>
        </div>
        <div class="weather-item">
            <div class="weather-value">${feelsLike}${unit}</div>
            <div class="weather-label">Feels Like</div>
        </div>
        <div class="weather-item">
            <div class="weather-value">${current.humidity}%</div>
            <div class="weather-label">Humidity</div>
        </div>
        <div class="weather-item">
            <div class="weather-value">${current.wind_speed} km/h</div>
            <div class="weather-label">Wind Speed</div>
        </div>
        <div class="weather-item">
            <div class="weather-value">${current.wind_direction}</div>
            <div class="weather-label">Wind Direction</div>
        </div>
        <div class="weather-item">
            <div class="weather-value">${current.pressure} hPa</div>
            <div class="weather-label">Pressure</div>
        </div>
        <div class="weather-item">
            <div class="weather-value">${current.cloud_cover}%</div>
            <div class="weather-label">Cloud Cover</div>
        </div>
        <div class="weather-item">
            <div class="weather-value">${getWeatherIcon(current.condition)}</div>
            <div class="weather-label">${current.condition}</div>
        </div>
    `;
}

function displayHourlyWeather(hourly) {
    const container = document.getElementById('weather-hourly');
    container.innerHTML = hourly.map(hour => {
        const temp = currentUnits === 'celsius' ? hour.temperature : celsiusToFahrenheit(hour.temperature);
        const unit = currentUnits === 'celsius' ? '°C' : '°F';
        
        return `
            <div class="hourly-item">
                <div style="font-weight: 600; margin-bottom: 0.5rem;">${hour.time}</div>
                <div style="font-size: 1.5rem; margin: 0.5rem 0;">${getWeatherIcon(hour.condition)}</div>
                <div style="font-weight: 600;">${temp}${unit}</div>
            </div>
        `;
    }).join('');
}

function displayDailyWeather(daily) {
    const container = document.getElementById('weather-daily');
    container.innerHTML = daily.map(day => {
        const minTemp = currentUnits === 'celsius' ? day.min : celsiusToFahrenheit(day.min);
        const maxTemp = currentUnits === 'celsius' ? day.max : celsiusToFahrenheit(day.max);
        const unit = currentUnits === 'celsius' ? '°C' : '°F';
        
        return `
            <div class="daily-item">
                <div>
                    <div style="font-weight: 600;">${day.day}</div>
                    <div style="color: var(--muted); font-size: 0.875rem;">${day.condition}</div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="font-size: 1.5rem;">${getWeatherIcon(day.condition)}</div>
                    <div>
                        <span style="font-weight: 600;">${maxTemp}${unit}</span>
                        <span style="color: var(--muted); margin-left: 0.5rem;">${minTemp}${unit}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function toggleUnits(unit) {
    currentUnits = unit;
    
    celsiusBtn.classList.toggle('active', unit === 'celsius');
    fahrenheitBtn.classList.toggle('active', unit === 'fahrenheit');
    
    // Refresh weather display if data exists
    if (selectedLocation) {
        const currentWeather = document.getElementById('weather-current');
        const hourlyWeather = document.getElementById('weather-hourly');
        const dailyWeather = document.getElementById('weather-daily');
        
        if (currentWeather.children.length > 0) {
            // Re-display with new units (using demo data for simplicity)
            displayWeatherData(null, true);
        }
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', currentTheme);
    themeIcon.textContent = currentTheme === 'dark' ? '🌙' : '☀️';
}

function handleNavigation(e) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

function initializeAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

function createPopulationDensityChart(country) {
    const svg = document.getElementById('density-chart');
    const density = Math.round(country.population / country.area);
    const maxDensity = 1000; // Arbitrary max for visualization
    const barHeight = Math.min((density / maxDensity) * 80, 80);
    
    svg.innerHTML = `
        <rect x="25" y="${90 - barHeight}" width="100" height="${barHeight}" fill="var(--primary)" rx="4"/>
        <text x="75" y="85" text-anchor="middle" fill="var(--text)" font-size="12">${density}/km²</text>
    `;
}

function createUrbanRuralChart() {
    const svg = document.getElementById('urban-chart');
    // Demo data - 60% urban, 40% rural
    const urbanPercent = 60;
    const ruralPercent = 40;
    
    svg.innerHTML = `
        <circle cx="75" cy="50" r="35" fill="none" stroke="var(--surface-2)" stroke-width="8"/>
        <circle cx="75" cy="50" r="35" fill="none" stroke="var(--primary)" stroke-width="8" 
                stroke-dasharray="${urbanPercent * 2.2} ${ruralPercent * 2.2}" stroke-dashoffset="0"/>
        <circle cx="75" cy="50" r="35" fill="none" stroke="var(--success)" stroke-width="8" 
                stroke-dasharray="${ruralPercent * 2.2} ${urbanPercent * 2.2}" stroke-dashoffset="${-urbanPercent * 2.2}"/>
        <text x="75" y="45" text-anchor="middle" fill="var(--text)" font-size="10">Urban</text>
        <text x="75" y="57" text-anchor="middle" fill="var(--text)" font-size="10">${urbanPercent}%</text>
    `;
}

function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Utility functions
function celsiusToFahrenheit(celsius) {
    return Math.round((celsius * 9/5) + 32);
}

function getWindDirection(degrees) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return directions[Math.round(degrees / 22.5) % 16];
}

function getWeatherCondition(code) {
    const conditions = {
        0: 'Clear',
        1: 'Mainly Clear',
        2: 'Partly Cloudy',
        3: 'Overcast',
        45: 'Foggy',
        48: 'Depositing Rime Fog',
        51: 'Light Drizzle',
        53: 'Moderate Drizzle',
        55: 'Dense Drizzle',
        61: 'Slight Rain',
        63: 'Moderate Rain',
        65: 'Heavy Rain',
        71: 'Slight Snow',
        73: 'Moderate Snow',
        75: 'Heavy Snow',
        95: 'Thunderstorm'
    };
    return conditions[code] || 'Unknown';
}

function getWeatherIcon(condition) {
    const icons = {
        'Clear': '☀️',
        'Mainly Clear': '🌤️',
        'Partly Cloudy': '⛅',
        'Overcast': '☁️',
        'Cloudy': '☁️',
        'Foggy': '🌫️',
        'Light Drizzle': '🌦️',
        'Moderate Drizzle': '🌦️',
        'Dense Drizzle': '🌧️',
        'Slight Rain': '🌦️',
        'Moderate Rain': '🌧️',
        'Heavy Rain': '🌧️',
        'Rainy': '🌧️',
        'Slight Snow': '🌨️',
        'Moderate Snow': '❄️',
        'Heavy Snow': '❄️',
        'Thunderstorm': '⛈️',
        'Sunny': '☀️'
    };
    return icons[condition] || '🌤️';
}
