'use strict'

let addButton = document.getElementById("add");
let input = document.getElementById("inputValue");
let ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	let li = document.createElement("li")
	li.appendChild(document.createTextNode(input.value))
	ul.appendChild(li)
	input.value = ""

	// start and delete button
	let deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("x"));
	li.appendChild(deleteButton);
	deleteButton.addEventListener("click", deleteListItem);

	// add a delete class
	function deleteListItem(){
		li.classList.add("delete")
	}
}

function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement()
	}
}

addButton.addEventListener("click", addListAfterClick);



