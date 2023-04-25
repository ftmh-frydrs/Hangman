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



function Randowm() {
      answer = fruit[Math.floor(Math.random() * 6)];
}

function keyboard(){
    let btnKeyboard ="qwertyuiopasdfghjklzxcvbnm".split('').map(e =>
        `
        <button class="btnEl bg-pink-500 m-1 w-12 h-12 rounded-lg"
        id='` + e + `'
        onClick="keyEl('` + e + `')"
        >
        ` + e + `
        </button>
        `
    ).join('');

    document.querySelector("#keyboard").innerHTML = btnKeyboard
}

keyboard()