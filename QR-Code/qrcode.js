// const qrinput = document.getElementById('qr-input');
// const qrimg = document.getElementById('qr-img');
// const qrbtn = document.getElementById('qr-btn');
// console.log(qrinput, qrimg, qrbtn);
// qrbtn.addEventListener('click', () => {
//     const inputValue = qrinput.value;
//     console.log(inputValue)

//     if (!inputValue) {
//         alert('Please enter a valid text');
//         return;
//     }
//     else{
//         qrimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;
//         arimg.alt = `QR code for ${inputValue}`
//     }
const qrinput = document.getElementById('qr-input');
const qrbtn = document.getElementById('qr-btn');
const qrimg = document.getElementById('qr-img');
qrbtn.addEventListener('click', () => {
    const inputValue = qrinput.value;
    if(!input){
        alert('Please enter the text');
        return;
    }
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}`;
        qrimg.alt = `QR code for ${inputValue}`;
    }
});