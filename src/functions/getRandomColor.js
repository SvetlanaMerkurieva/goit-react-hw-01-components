function getRandomColor(max) {
   return Math.floor(Math.random() * Math.floor(max));
}
let r = getRandomColor(255);
let g = getRandomColor(255);
let b = getRandomColor(255);

export let backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

console.log(backgroundColor);
