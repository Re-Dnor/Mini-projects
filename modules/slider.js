function slider() {

const prev = document.querySelector('.btn_left'),
next = document.querySelector('.btn_right'),
container = document.querySelector('.container'),
contents = document.querySelectorAll('.content'),
circule = document.querySelector('.circule');

let contentIndex = 1;

showContent(contentIndex);

function showContent(n) {
  if (n > contents.length) {
    contentIndex = 1;
  }
  if (n < 1) {
    contentIndex = contents.length;
  }
  if (contentIndex != 1) {
    circule.style.display = 'none';
  }
  else {
    circule.style.display = '';
  }

  
  
  contents.forEach(i => i.style.display = 'none');
  contents[contentIndex - 1].style.display = '';
  contents[contentIndex - 1].style.transition = '1s ease';
}

function plusContent(n) {
  showContent(contentIndex += n);
}

prev.addEventListener('click', () => {
  plusContent(-1);
});
next.addEventListener('click', () => {
  plusContent(1);
});
}

module.exports = slider;