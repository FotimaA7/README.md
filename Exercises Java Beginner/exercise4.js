function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("output").innerText = `${celsius}°C is ${fahrenheit}°F`;
}

// Example usage
celsiusToFahrenheit(30);
