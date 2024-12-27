document.getElementById("btnback1").onclick = function () {
  location.href = "page2.html";
}

document.getElementById("changename").onclick = function changename () {
  document.getElementById("name").innerHTML = window.prompt("Enter desired name");
}