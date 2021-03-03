'use strict'

var addButton = document.getElementById("add");
var input = document.getElementById("inputValue")
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field


	// START ADD DELETE BUTTON
	let deleteBtn = document.createElement("button");
	deleteBtn.appendChild(document.createTextNode("X"));
	li.appendChild(deleteBtn);
	deleteBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}

}


function addListAfterClick(){
	if (input.length > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (input.length > 0 && event.which === 13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


addButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);