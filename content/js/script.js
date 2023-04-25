var fruit = [
	"Apple",
    "Blueberry",
    "Mandarin",
    "Pineapple",
    "Pomegranate",
    "Watermelon",
]

let min = 0;
let max = 6;
let answer = '';
let wordEl = null;
text = [];



function Randowm() {
      answer = fruit[Math.floor(Math.random() * 6)];
}

function keyboard() {
    let btnKeyboard ="qwertyuiopasdfghjklzxcvbnm".split('').map(e =>
        `
        <button class="btnEl bg-pink-500 m-1 w-12 h-12 rounded-lg"
        id='` + e + `'
        onClick="handeling('` + e + `')"
        >
        ` + e + `
        </button>
        `
    ).join('');

    document.querySelector("#keyboard").innerHTML = btnKeyboard;
}

function handeling(){
     
}

function picture() {
    document.querySelector(".img").src = "./content/img" + min +".jpg"
}

function Won() {
    if(wordEl == answer){
        document.querySelector("#keyboard").innerHTML = "You Won !";
    }
}

function Lost() {
     if(min == max){
        document.querySelector("#word").innerHTML = "The Answer Was: " + answer
        document.querySelector("#keyboard").innerHTML = "You Lost !";
     }
}

function reset() {
    text = [];
   document.querySelector(".img").src = "./content/img/0.jpg"
}


keyboard()
Randowm()