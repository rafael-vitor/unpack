import { hero, decreaseButton, increaseButton } from './elements.js';
import { colorClasses } from './constants.js';
import { setup } from './setup.js';

export const run = () => {
  setup();
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
  
}
