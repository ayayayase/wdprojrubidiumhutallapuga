document.getElementById("btnback1").onclick = function () {
  location.href = "page2.html";
}

document.getElementById("changename").onclick = function changename () {
  document.getElementById("name").innerHTML = window.prompt("Enter desired name");
}

document.getElementById("changedialogue").onclick = function changedialogue () {
  // Get the current value of the #dialogueinput field
  var dialogueinput = document.getElementById("dialogueinput").value;
  
  // Update the #dialogue element with the new input value
  document.getElementById("dialogue").innerHTML = dialogueinput;
}