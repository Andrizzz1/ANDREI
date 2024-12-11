const container = document.getElementById("container");
const imageOne = document.querySelector(".image-1")
const imageTwo = document.querySelector(".image-2")
const btnyes = document.querySelector(".btn-yes")
const btnno = document.querySelector(".btn-no")
let myAudio = document.querySelector('#audio')
let myAudio2 = document.querySelector('#audio2')

const btn = document.getElementById('Thebutton');
const myText = document.getElementById('theDiv');



function getRandomNumber(min,max){
    const randomNumber = Math.floor(Math.random() * (max -  min + 1)) + min;
    return randomNumber


}

let luhhhText;

btnno.addEventListener("mouseover", (e) => {
    const containerHeight = container.getBoundingClientRect().height;
    const containerwidth = container.getBoundingClientRect().width;
    const btnHeight = btnno.getBoundingClientRect().height;
    const btnwidth = btnno.getBoundingClientRect().width;
    const btntop = btnno.getBoundingClientRect().top;
    const btnleft = container.getBoundingClientRect().left;

    let newTop = btntop;
    let newLeft = btnleft;

    while(Math.abs(newTop - btntop) < containerHeight / 3){
        newTop = getRandomNumber(0,containerHeight-btnHeight);
    }

    while (Math.abs(newLeft - btnleft) < containerwidth / 3){
        newLeft = getRandomNumber(0,containerwidth-btnwidth);
    }
    btnno.style.top = Math.floor(newTop) + "px";
    btnno.style.left = Math.floor(newLeft) + "px";

    
    myAudio.play()

    if (!luhhhText) { 
        luhhhText = document.createElement("p");
        luhhhText.textContent = "luhhh";
        luhhhText.style.fontSize = "100px";
        luhhhText.style.color = "red";
        luhhhText.style.fontWeight = "bold";
        container.appendChild(luhhhText);
    }
});


btnyes.addEventListener("click", (e) => {
    btnno.classList.add("hide")
    btnyes.classList.add("hide")
    imageOne.classList.add("hide")
    imageTwo.classList.remove("hide")
    myAudio.remove()

    if (luhhhText) {
        container.removeChild(luhhhText);
        luhhhText = null; 
    }

    const newText = document.createElement("p");
    newText.textContent = "Yey!!! kain tayo laterrr!!";
    newText.style.fontSize = "100px"; 
    newText.style.color = "red";   
    newText.style.fontWeight = " bold"
    container.appendChild(newText); 

    newText.style.position = "absolute";
    newText.style.top = "80%";
    newText.style.left = "50%";
    newText.style.transform = "translate(-50%, -50%)";
    newText.style.textAlign = "center"

    myAudio2.play()
    
});

