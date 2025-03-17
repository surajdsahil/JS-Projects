const limit = 200;
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const warningMessage = document.getElementById('warningMessage');

function updateCharCount(){
    const charCountValue = textInput.value.length;
    charCount.innerText = `${charCountValue}/${limit}`;
    if(charCountValue === limit){
        charCount.style.color = 'yellow';
    }
    else if(charCountValue < limit){
        charCount.style.color = 'green';
    }
    else{
        charCount.style.color = 'red';
        warningMessage.innerText = 'You have exceeded the limit';
        warningMessage.style.color = 'red';
    }
}

textInput.addEventListener('input',updateCharCount);