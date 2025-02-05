// just buttons to go back to homepage or studio

document.getElementById("btnback1").onclick = function () {
  location.href = "index.html";
}

document.getElementById("btnstudio").onclick = function () {
  location.href = "page3.html";
}

let state = {face: 1, top: 1, bottom: 1, fh: 1, bh: 1}

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

function nextbottom() {
   console.log("bottomworks");
  
  let bottom = document.querySelector("#bottom");
  
  if (state.bottom < 6) {
    state.bottom++;
    bottom.setAttribute("class", `bottom${state.bottom}`);
  }
  else if (state.bottom == 6) {
    state.bottom= 1;
    bottom.setAttribute("class", `bottom${state.bottom}`);
  }
} 

function nextfh() {
   console.log("fhworks");
  
  let fh = document.querySelector("#fh");
  
  if (state.fh < 8) {
    state.fh++;
    fh.setAttribute("class", `fh${state.fh}`);
  }
  else if (state.fh == 8) {
    state.fh = 1;
    fh.setAttribute("class", `fh${state.fh}`);
  }
}

function nextbh() {
   console.log("bhworks");
  
  let bh = document.querySelector("#bh");
  
  if (state.bh < 8) {
    state.bh++;
    bh.setAttribute("class", `bh${state.bh}`);
  }
  else if (state.bh == 8) {
    state.bh = 1;
    bh.setAttribute("class", `bh${state.bh}`);
  }
}