const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');

if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);

class item {
    constructor(name) {
        this.createDiv(name)
    }
    createDiv(itemName) {
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add("item")

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add("editButton");

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE"
        removeButton.classList.add("removeButton");

        container.appendChild(itemBox);
        itemBox.appendChild(input);
        itemBox.appendChild(editButton);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBox));

    }
    edit(input, name) {
        if (input.disabled == true) {
            input.disabled = !input.disabled;
        } else {
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }

    }

    remove(itemBox, name) {
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }
}




addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which = 13) {
        check();
    }
})

function check() {
    if (input.value != "") {
        new item(input.value)
        input.value = "";
    }
}

for (var v = 0; v < todos.length; v++) {
    new item(todos[v]);
}


new item("sport");