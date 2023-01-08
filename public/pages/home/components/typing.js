let phrases = ["Frontend Developer ", "Backend Developer ", "Web Designer "];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false;
const text = document.getElementById("dinamicText");

function loop() {
  isEnd = false;
  text.innerHTML = currentPhrase.join("");
  if (i < phrases.length) {
    if (!isDeleting && j < phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j]);
      j--;
    }

    if (j == phrases[i].length) {
      isDeleting = true;
      isEnd = true;
    }

    if (isDeleting && j == 0) {
      isDeleting = false;
      currentPhrase = [];
      i++;
    }

    if (i == phrases.length) {
      i = 0;
    }

    let speed = isEnd ? 2000 : isDeleting ? 100 : 200;

    setTimeout(loop, speed);
  }
}

export default loop;
