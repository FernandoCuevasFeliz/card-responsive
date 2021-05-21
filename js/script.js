'use strict';

const $counters = document.querySelectorAll('.counter');

const initCounter = (obj) => {
  const { cant, letter, element, speed } = obj;
  let count = 0;
  let time = setInterval(() => {
    element.textContent = count + letter;
    count += 1;
    if (count === cant + 1) {
      clearInterval(time);
    }
  }, speed);
};

initCounter({ cant: 10, letter: 'k+', element: $counters[0], speed: 100 });
initCounter({ cant: 314, letter: '', element: $counters[1], speed: 10 });
initCounter({ cant: 12, letter: 'M+', element: $counters[2], speed: 100 });
