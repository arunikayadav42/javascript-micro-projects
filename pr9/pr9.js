var btn = document.querySelector('button');

function random(number) {
        return Math.floor(Math.random()*number);
      }

function bgChange(e) {
    var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCol;
    }

btn.addEventListener('click', bgChange);