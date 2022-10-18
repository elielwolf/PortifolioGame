let matrix = document.querySelector("#matrix");
let about = document.querySelector("#about");
const ctx = matrix.getContext("2d");

matrix.width = about.clientWidth;
matrix.height = window.innerHeight;

ctx.fillStyle = "#0f0";
ctx.font = `60px arial`;

//let letters = ["日","ﾊ","ﾐ","ﾋ","ｰ","ｳ","ｼ","ﾅ","ﾓ","ﾆ","ｻ","ﾜ","ﾂ","ｵ","ﾘ","ｱ","ﾎ","ﾃ","ﾏ","ｹ","ﾒ","ｴ","ｶ","ｷ","ﾑ","ﾕ","ﾗ","ｾ","ﾈ","ｽ","ﾀ","ﾇ","ﾍ",":","・",".","=","*","+","-","<",">","¦","｜","ﾘ"];
let letters = "FEAR OF THE DARK, ONE WAY OR ANOTHER, ENTER SANDMAN, TOUCH TOO MUCH".split('');

const fontSize = 18;
const columns = matrix.width / fontSize;
const drops = new Array(Math.floor(columns)).fill(1);

function draw(){

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, matrix.width, matrix.height);

    let grd = ctx.createLinearGradient(0,0,0,matrix.height);
    grd.addColorStop(0, '#fc4a1a');
    grd.addColorStop(1, '#f7b733');

    ctx.fillStyle = grd;
    ctx.font =`${fontSize}px arial`

    for(let i=0; i < drops.length; i++){
        const text = letters[Math.floor(Math.random() * letters.length)];
       // console.log(letters);
        ctx.fillText(text, i * fontSize, drops[i]*fontSize);
        if (drops[i] * fontSize > matrix.height && Math.random() > 0.95) {
            drops[i] = 0;
          }
        drops[i]++;
    }

    window.requestAnimationFrame(draw);
}

draw();