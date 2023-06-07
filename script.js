'use strict'
let todoList = [];


function addItem(item) {
  todoList.push(item);
  console.log("Mehsul elave edildi:", item);
}


function removeItem(item) {
  const index = todoList.indexOf(item);
  if (index > -1) {
    todoList.splice(index, 1);
    console.log("Mehsul gotruldu:", item);
  } else {
    console.log("Mehsul tapilmir:", item);
  }
}


function displayList() {
  console.log("To-Do List:");
  todoList.forEach((item, index) => {
    console.log(index + 1 + ". " + item);
  });
}


addItem("Buy nothing");
addItem("Pay bills");
addItem("Walk the dog");
displayList();

removeItem("Pay bills");
displayList();