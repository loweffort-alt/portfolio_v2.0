let phrases = ["Frontend Developer", "Backend Developer", "Web Designer"];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
const text = document.getElementById("dinamicText");

function loop() {
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
    }

    if (isDeleting && j == 0) {
      isDeleting = false;
      currentPhrase = [];
      i++;
    }

    if (i == phrases.length) {
      i = 0;
    }

    let speed = isDeleting ? 100 : 200;

    setTimeout(loop, speed);
  }
}

loop();
