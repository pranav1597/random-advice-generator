let adviceNumber = document.querySelector(".advice-number");
let adviceText = document.querySelector(".advice-text");
btn = document.querySelector('.btn');
btn.addEventListener('click',()=>{
    generateRandomAdvice();
});

function generateRandomAdvice(){
    
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {

        let val = data.slip;
        let id = val.id;
        let adv = val.advice;
        adviceNumber.textContent = id;
        adviceText.textContent = adv;
    })
    .catch( (err) => {
        adviceNumber.textContent = "Error";
        adviceText.textContent = "Error loading"
    })
    
}
