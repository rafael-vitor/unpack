const colorClasses = [
  'is-white',
  'is-light',
  'is-dark',
  'is-black',
];

const decreaseButton = document.getElementById('decrease-btn');

const increaseButton = document.getElementById('increase-btn');

const hero = document.getElementById('hero');

hero.classList.toggle(colorClasses[1]);

let currentColor = colorClasses[1];
decreaseButton.addEventListener('click', () => {
  let nextColor;
  if (colorClasses.indexOf(currentColor) !== 0) {
    nextColor = colorClasses[colorClasses.indexOf(currentColor) - 1];
  } else {
    nextColor = colorClasses[colorClasses.length - 1];
  }
  
  hero.classList.toggle(currentColor);
  hero.classList.toggle(nextColor);
  currentColor = nextColor;
});

increaseButton.addEventListener('click', () => {
  let nextColor;
  if ((colorClasses.indexOf(currentColor) + 1) !== colorClasses.length) {
    nextColor = colorClasses[colorClasses.indexOf(currentColor) + 1];
  } else {
    nextColor = colorClasses[0];
  }
  
  hero.classList.toggle(currentColor);
  hero.classList.toggle(nextColor);
  currentColor = nextColor;
});
