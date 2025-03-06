const celsius =document.querySelector('#celsius');
const fahrenheit =document.querySelector('#fahrenheit');
const kelvin =document.querySelector('#kelvin');

celsius.addEventListener('input', function(){
    let c = parseFloat(celsius.value);
    let f = (c * 9/5) + 32;
    let k = c + 273.15;
    fahrenheit.value = f;
    kelvin.value = k;
});

fahrenheit.addEventListener('input', function(){
    let f = parseFloat(fahrenheit.value);
    let c = (f - 32) * 5/9;
    let k = c + 273.15;
    celsius.value = c;
    kelvin.value = k;
}); 
kelvin.addEventListener('input', function(){
    let k = parseFloat(kelvin.value);
    let c = k - 273.15;
    let f = (c * 9/5) + 32;
    celsius.value = c;
    fahrenheit.value = f;
})