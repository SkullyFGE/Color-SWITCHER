// INDEX - CLICK - COLORSWITCHER
const colors = [
  { colorName: "IndianRed", hexCode: "#CD5C5C" },
  { colorName: "Salmon", hexCode: "#FA8072" },
  { colorName: "FireBrick", hexCode: "#B22222" },
  { colorName: "HotPink", hexCode: "#FF69B4" },
  { colorName: "MediumVioletRed", hexCode: "#C71585" },
  { colorName: "PaleVioletRed", hexCode: "#DB7093" },
  { colorName: "LightSalmon", hexCode: "#FFA07A" },
  { colorName: "OrangeRed", hexCode: "#FF4500" }
];

let index = 0;
const changeColorButton = document.getElementById("btn");
const changeColorName = document.getElementById("color-name");

// Check whether both the button and the color-name element exist.
// If they do, attach the click event listener.
// If they do not, skip this code so the page does not crash.
if (changeColorButton && changeColorName) { // if the
  changeColorButton.addEventListener("click", function() {
    // Apply the current color & display color hexcode
    document.body.style.backgroundColor = colors[index].hexCode;
    changeColorName.textContent = colors[index].colorName + " " + colors[index].hexCode;

    index = (index + 1) % colors.length; // advance cyclically
  });
}
// PICK COLOR SWITCHER
const individualBtn = [
  { id: "btn-green", colorName: "SeaGreen", hexCode: "#2E8B57"},
  { id: "btn-blue", colorName: "Bleu de France", hexCode: "#318ce7"},
  { id: "btn-yellow", colorName: "Banana Yellow", hexCode: "#ffe135"},
  { id: "btn-grey", colorName: "Battleship Gray", hexCode: "#848482"},
  { id: "btn-brown", colorName: "Coffee", hexCode: "#6f4e37"},
  { id: "btn-purple", colorName: "MediumPurple", hexCode: "#9370db"},
];

individualBtn.forEach(element => {
  const button = document.getElementById(element.id);

  if (button && changeColorName) {
    button.addEventListener("click", function() {
      document.body.style.backgroundColor = element.hexCode;
      changeColorName.textContent = element.colorName + " " + element.hexCode;
    });
  }
});

const hexColorButton = document.getElementById("btn-hex");

fetch("https://www.csscolorsapi.com/api/colors/dodgerblue")
  .then(response => {

    if(!response.ok){
      throw new Error("Could not fetch any information!")
    }
    return response.json();
  })
  .then(data => console.log(data.data.name))
  .catch(error => console.error(error));

  fetchData();
  async function fetchData() {
    
    try{
      const response = await fetch("https://www.csscolorsapi.com/api/colors/dodgerblue");

      if(!response.ok){
        throw new Error("Could not fetch data!");
      }

      const data = await response.json();
      console.log(data);

    }catch(error){
      console.error(error);
    }

  }