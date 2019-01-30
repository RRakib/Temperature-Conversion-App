let centigrade = document.getElementById("temp");

centigrade.addEventListener("change" , (e) => {
    const {value} = e.target;
    let FTemp = 9/5 * value + 32;
    document.getElementById("fahrenheit").innerHTML = FTemp + "&deg;";
    
    let KTemp = value + 273;
    document.getElementById("kelvin").innerHTML = KTemp + "K";

})