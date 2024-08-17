var myImage = document.querySelector("img");
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Bar2.jpeg") {
    myImage.setAttribute("src", "images/Bar2.jpeg");
  } else {
    myImage.setAttribute("src", "images/Bar2.jpeg");
  }
};
document.querySelector("html").onclick = function () {
    alert("Ей! Не бей меня, мы не разбавляли твой виски, ты просто пьян!");
  };
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Приветствую, Странник, как тебя зовут?");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Добро пожаловать, " + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Добро пожаловать, " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
