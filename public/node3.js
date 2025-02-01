// just buttons to go back to dress up
document.getElementById("btnback1").onclick = function () {
  location.href = "page2.html";
}

// button to change the display name of the character
document.getElementById("changename").onclick = function changename () {
  document.getElementById("name").innerHTML = window.prompt("Enter desired name");
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