function convertTemp(){
    let convertedTemperature = 0;
    let temp = parseFloat(document.getElementById("input-box").value);
    let convertFrom = document.getElementById("from").value;
    let convertTo = document.getElementById("to").value;

    if(convertFrom == convertTo){
        return document.getElementById("result").innerText = `Converted Temperature: ${temp}`;
    }
    else if(convertFrom == "Celsius" && convertTo == "Fahrenheit"){
        convertedTemperature = (temp * 9/5) + 32;
        return document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature} F`;
    }
    else if (convertFrom == "Fahrenheit" && convertTo == "Celsius"){
        convertedTemperature = (temp - 32 ) * 5/9;
        return document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature} C`;
    }
    else if (convertFrom == "Celsius" && convertTo == "Kelvin"){
        convertedTemperature = (temp + 273.15);
        return document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature} K`;
    }
    else if (convertFrom == "Kelvin" && convertTo == "Celsius"){
        convertedTemperature = (temp - 273.15);
        return document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature} C`;
    }
    else if (convertFrom == "Kelvin" && convertTo == "Fahreinheit"){
        convertedTemperature = (temp - 273.15) * 9/5 + 32;
        return document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature} F`;
    }
    else if(convertFrom == "Fahrenheit" && convertTo == "Kelvin"){
        convertedTemperature = (temp - 32) * 5/9 + 273.15;
        return document.getElementById("result").innerText = `Converted Temperature: ${convertedTemperature} K`;
    }
     return ;
    
    
}