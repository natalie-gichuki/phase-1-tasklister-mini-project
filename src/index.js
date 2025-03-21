document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //select the form using DOM
  const form = document.getElementById("create-task-form");
  //select the tasks div using DOM
  const taskList = document.getElementById("tasks");
  
  //ensure page does not reload when submit button is clicked by adding the preventDefault method.
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    //select the new task description area.
    const taskInput = document.getElementById("new-task-description");
    const priorityInput = document.getElementById("task-priority");
    const userInput = document.getElementById("task-user");
    const dateInput = document.getElementById("task-date");
   
    //retrieve the users input from text field and remove white spaces using .trim()
    const taskText = taskInput.value.trim() ;
    const priority = priorityInput.value;
    const user = userInput.value.trim();
    const dueDate = dateInput.value;
   

    if (taskInput !== ""){
      //create an list item to hold the tasks
      const taskItem = document.createElement("li");
      taskItem.innerHTML = `<strong>${taskText}</strong> (Assigned to: ${user}, Due: ${dueDate})`;
      //call a function with the selected priority colors
      taskItem.style.color = getPriorityColor(priority);

      //set user input to the list item 
      taskItem.textContent = taskText;
      //add the new task to the unordered list
      
      taskList.appendChild(taskItem);
      
      
      //clear input field allowing new item to be added.
      taskInput.value = "";
      userInput.value = "";
      dateInput.value = "";


      //deleting tasks
      //create a deletion button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      //adds delete button to the task items.
      deleteButton.addEventListener("click", () => {
        taskItem.remove();
      })
       
       
       
      taskItem.appendChild(deleteButton);

      }
  })
//create a function to hold the priority colors
  function getPriorityColor(priority){
    switch (priority) {
      case "high" : return "red";
      case "medium" : return "yellow";
      case "low" : return "green";
    }
  }
  
});
