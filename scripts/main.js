var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  var password = prompt('Please enter your password')
  localStorage.setItem('name', myName);
	localStorage.setItem('password', password)
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
  setUserName();
}

//var myImage = document.querySelector('img');

//myImage.onclick = function() {
//    var mySrc = myImage.getAttribute('src');
//    if(mySrc === 'images/firefox-icon.png') {
//      setUserName();
//		myImage.setAttribute("width","300");
//}
//}