const rectangle = document.getElementById("rectangle");
const button = document.getElementById("moveBtn");

let positions = [
  ["20px", "auto", "20px", "auto"],   
  ["20px", "auto", "auto", "20px"],   
  ["auto", "20px", "auto", "20px"],   
  ["auto", "20px", "20px", "auto"]    
];

let colors = ["red", "blue", "green", "orange"];

let index = 0;

button.onclick = function () {
  rectangle.style.bottom = positions[index][0];
  rectangle.style.top = positions[index][1];
  rectangle.style.left = positions[index][2];
  rectangle.style.right = positions[index][3];

  rectangle.style.backgroundColor = colors[index];

  if (index === 0) {
    index = 1;
  } else if (index === 1) {
    index = 2;
  } else if (index === 2) {
    index = 3;
  } else {
    index = 0;
  }
};

// button.click();
