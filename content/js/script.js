

var fruit = [
    "apple",
    "blueberry",
    "mandarin",
    "pineapple",
    "pomegranate",
    "watermelon",
];

let min = 0;
let max = 6;
let answer = '';
let wordEl = null;
let text = [];
let guessed = false;

function Random() {
    answer = fruit[Math.floor(Math.random() * 6)]
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

function handeling(letter){
    if (!text.includes(letter)) {
        text.push(letter);
        document.getElementById(letter).classList.add('bg-gray-400');
        let word = '';
        for (let i = 0; i < answer.length; i++) {
            if (text.includes(answer[i])) {
                word += answer[i] + ' ';
            } else {
                word += '_ ';
            }
        }
        wordEl.textContent = word;
        if (!word.includes('_')) {
            guessed = true;
            Won();
        }
        if (!answer.includes(letter)) {
            min++;
            picture();
        }
        Lost();
    }
}

function picture() {
    document.querySelector(".img").src = "./content/img/" + min + ".jpg";
}

function Won() {
    if(guessed) {
        document.querySelector("#keyboard").innerHTML = "You Won !";
    
    }
}

function Lost() {
    if (min == max) {
        document.querySelector("#word").innerHTML = "The Answer Was: " + answer;
        document.querySelector("#keyboard").innerHTML = "You Lost !";
        for (let i = 0; i < answer.length; i++) {
            document.getElementById(answer[i]).classList.add('bg-green-500');
        }
    }
}

function reset() {
    text = [];
    guessed = false;
    min = 0;
    Random();
    wordEl.textContent = answer.replace(/[a-z]/g, '_ ');
    picture();
    keyboard();
}

Random();
wordEl = document.querySelector("#word");
wordEl.textContent = answer.replace(/[a-z]/g, '_ ');
picture();
keyboard();