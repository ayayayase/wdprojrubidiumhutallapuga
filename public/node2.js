// just buttons to go back to homepage or studio

document.getElementById("btnback1").onclick = function () {
  location.href = "index.html";
}

document.getElementById("btnstudio").onclick = function () {
  location.href = "page3.html";
}

let state = {face: 1, top: 1}

function nextface() {
  console.log("faceworks");
  
  let face = document.querySelector("#face");
  
  if (state.face < 6) {
    state.face++;
    face.setAttribute("class", `face${state.face}`);
  }
  else if (state.face == 6) {
    state.face = 1;
    face.setAttribute("class", `face${state.face}`);
  }
}

function nexttop() {
   console.log("topworks");
  
  let top = document.querySelector("#top");
  
  if (state.top < 6) {
    state.top++;
    top.setAttribute("class", `top${state.top}`);
  }
  else if (state.top == 6) {
    state.top= 1;
    top.setAttribute("class", `top${state.top}`);
  }
}