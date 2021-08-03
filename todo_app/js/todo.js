/********* TO-DO APP JS ************/

/*This func gets task from input */
function get_todos() {
    /*This creates array of tasks that are inputted*/
    var todos = new Array;
    /*this pulls the new task thats saved in browsers memory.*/
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null, JSON.parse will communicate with 
        browser to make task a javascript object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}
/*this func adds inputted task to get_todos func array.*/
function add() {
    /*This takes inputted task and creates var of it. */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /*This adds new task to end of array. */
    todos.push(task);
    /*Converts task input to JSON string. */
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;

}
/*This function keeps tasks permanently displyed on screen. */
function show() {
    /*This sets task that was retrieved as var. */
    var todos = get_todos();

    /*This sets up each tas as unordered list (ul)*/
    var html = '<ul>';
    /*This displays a task to list in order that is was recieved. */
    for (var i = 0; i < todos.length; i++) {
        /*This also displays task as list and creates button with 'x'. */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    
    };
    html += '</ul>';
    /*This displays task as list. */
    document.getElementById('todos').innerHTML = html;
}

/*This allows the 'x' button to remove item from todo array. */
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /*This references show() for how to display removed item on screen. */
    show();

    return false;
}

/*This displays the inputted task when 'Add Item' button is clicked*/
document.getElementById('add').addEventListener('click', add);
/*this keeps inputs displayed permanently on screen*/
show();
/* This tells browser how to display todo array after an item is removed. */
var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
};