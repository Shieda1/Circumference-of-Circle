// https://calculator.swiftutors.com/circle-solver.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const circumferenceofCircleRadio = document.getElementById('circumferenceofCircleRadio');
const radiusRadio = document.getElementById('radiusRadio');

let circumferenceofCircle;
const PI = Math.PI;
let radius = v1; 

// labels of the inpust
const variable1 = document.getElementById('variable1');

circumferenceofCircleRadio.addEventListener('click', function() {
  variable1.textContent = 'Radius';
  radius = v1;
  result.textContent = '';
});

radiusRadio.addEventListener('click', function() {
  variable1.textContent = 'Circumference of Circle';
  circumferenceofCircle = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(circumferenceofCircleRadio.checked)
    result.textContent = `Circumference of Circle = ${computeCircumferenceofCircle().toFixed(5)}`;

  else if(radiusRadio.checked)
    result.textContent = `Radius = ${computeRadius().toFixed(5)}`;
})

// calculation

function computeCircumferenceofCircle() {
  return 2 * PI * Number(radius.value);
}

function computeRadius() {
  return Number(circumferenceofCircle.value) / (2 * PI);
}