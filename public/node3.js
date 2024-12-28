document.getElementById("btnback1").onclick = function () {
  location.href = "page2.html";
}

document.getElementById("changename").onclick = function changename () {
  document.getElementById("name").innerHTML = window.prompt("Enter desired name");
}

document.getElementById("changedialogue").onclick = function changedialogue () {

  var dialogueinput = document.getElementById("dialogueinput").value;
  
  document.getElementById("dialogue").innerHTML = dialogueinput;
}

const ids = [
  "title",
  "caption",
  "hrtlndecor",
  "changename",
  "changebackground",
  "dialogueinput",
  "changedialogue"
];

document.getElementById("hideshow").onclick = function hide () {
  document.getElementById("hideshow").style.display = "none";
  
  for (let i = 0; i < ids.length; i++) {
  document.getElementById(ids[i]).style.display = "none";
}
  
document.getElementById("showhide").style.display = "inline";
}

document.getElementById("showhide").onclick = function hide () {
  document.getElementById("showhide").style.display = "none";
  
    for (let i = 0; i < ids.length; i++) {
  document.getElementById(ids[i]).style.display = "inline";
}
  
document.getElementById("hideshow").style.display = "inline";
}