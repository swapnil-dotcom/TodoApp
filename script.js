let button = document.getElementById('btn');
let ul = document.querySelector('ul');
let input = document.querySelector('input');
let ip = "";
let list = [];

button.addEventListener('click', addTodoItems);

function addTodoItems() {
    if (input.value === "") {
        alert("Please Enter the Todo Items");
    }
    list.push({ description: input.value });

    showTodoItems();
}

function showTodoItems() {
    list.map((data, index) => {
        ip += `<li id=${index}>${data.description}</li><button onclick="deleteItems(${index});" id='${index}'>Delete</button>`;
    })
    ul.innerHTML = ip;
    ip = "";
    input.value = "";
}

function deleteItems(id) {
    console.log(id);
    list.splice(id, 1);
    showTodoItems();
}