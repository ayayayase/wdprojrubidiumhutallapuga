// just buttons to go back to dress up
document.getElementById("btnback1").onclick = function () {
  location.href = "page2.html";
}

let maxLength = 9;  

document.getElementById("changename").onclick = function changename () {
  let userInput = window.prompt("Enter desired name (character limit: 9)");

  if (userInput && userInput.length > maxLength) {
    alert(`${maxLength} only please!`);
  } else {
    document.getElementById("name").innerHTML = userInput;  // Update the name if valid
  }
}


//button to change the dialogue of the character
document.getElementById("changedialogue").onclick = function changedialogue () {

  var dialogueinput = document.getElementById("dialogueinput").value;
  
  document.getElementById("dialogue").innerHTML = dialogueinput;
}

// turn elements into an array so its easier to reuse
const ids = [
  "title",
  "caption",
  "hrtlndecor",
  "changename",
  "changebackground",
  "dialogueinput",
  "changedialogue"
];
 
//button to hide the other elements (for when user wants a clearer screen)
document.getElementById("hideshow").onclick = function hide () {
  document.getElementById("hideshow").style.visibility = "hidden";
  
  for (let i = 0; i < ids.length; i++) {
  document.getElementById(ids[i]).style.visibility = "hidden";
}
  
document.getElementById("showhide").style.visibility = "visible";
}

//buttons to show the elements back
document.getElementById("showhide").onclick = function hide () {
  document.getElementById("showhide").style.visibility = "hidden";
  
    for (let i = 0; i < ids.length; i++) {
  document.getElementById(ids[i]).style.visibility = "visible";
}
  
document.getElementById("hideshow").style.visibility = "visible";
}

window.onload = function () {
  let savedState = localStorage.getItem("characterState");

  if (savedState) {
    savedState = JSON.parse(savedState);

    let face = document.getElementById("face");
    let top = document.getElementById("top");
    let bottom = document.getElementById("bottom");
    let fh = document.getElementById("fh");
    let bh = document.getElementById("bh");
     let shoes = document.getElementById("shoes");

    face.setAttribute("class", `face${savedState.face}`);
    top.setAttribute("class", `top${savedState.top}`);
    bottom.setAttribute("class", `bottom${savedState.bottom}`);
    fh.setAttribute("class", `fh${savedState.fh}`);
     bh.setAttribute("class", `bh${savedState.bh}`);
     shoes.setAttribute("class", `shoes${savedState.shoes}`);

  } else {
    console.log("No saved state found.");
  }
};

let state = 1;

function changebg() {
  console.log("bgworks");
  
  let bg = document.querySelector("#bg");
  
  if (state < 8) {
    state++;
    bg.setAttribute("class", `bg${state}`);
  }
  else if (state == 8) {
    state = 1;  
    bg.setAttribute("class", `bg${state}`);
  }
}