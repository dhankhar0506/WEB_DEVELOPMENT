// ============================================================
// DOM ELEMENT SELECTION
// ============================================================

const title = document.getElementById("title");

const todoForm = document.getElementById("todoForm");

const todoInput = document.getElementById("todoInput");

const todoList = document.getElementById("todoList");

const message = document.getElementById("message");


// ============================================================
// CHANGE HTML CONTENT
// ============================================================

console.log("before: ",title.textContent)
title.textContent = "My Todo List";
console.log("After: ",title.textContent)


// ============================================================
// ADD TODO
// ============================================================

todoForm.addEventListener("submit", (event) => {

    // Prevent form from refreshing the page
    event.preventDefault();


    // Get input value
    const task = todoInput.value.trim();


    // ========================================================
    // VALIDATION
    // ========================================================

    if (task === "") {

        message.textContent = "Please enter a task";

        return;
    }


    // Remove previous message
    message.textContent = "";


    // ========================================================
    // CREATE ELEMENT
    // ========================================================

    const li = document.createElement("li");


    // Create task text
    const span = document.createElement("span");

    span.textContent = task;


    // Create delete button
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";

    deleteButton.classList.add("delete-btn");


    // ========================================================
    // ADD ELEMENTS TO LI
    // ========================================================

    li.append(span);

    li.append(deleteButton);


    // ========================================================
    // ADD LI TO UL
    // ========================================================

    todoList.append(li);


    // ========================================================
    // CLEAR INPUT
    // ========================================================

    todoInput.value = "";

    todoInput.focus();
});


// ============================================================
// EVENT DELEGATION
// ============================================================

todoList.addEventListener("click", (event) => {

    // ========================================================
    // DELETE TODO
    // ========================================================

    if (event.target.classList.contains("delete-btn")) {

        const li = event.target.parentElement;

        li.remove();

        return;
    }


    // ========================================================
    // COMPLETE TODO
    // ========================================================

    if (event.target.tagName === "SPAN") {

        event.target.classList.toggle("completed");
    }
});