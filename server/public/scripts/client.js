$(document).ready(onReady) // check extension - get rid of some autofills
  console.log('client.js working');     //Click listeners
 function onReady (){

    $(`#taskTable`).on('click', `#taskIn`, task) // Refer index
    $(`#taskTable`).on('click', `#completedIn`, completed) 
    $(`#taskTable`).on('click', `#deleteIn`) // Refer index - doesn't want delete word
   // I want the taskTable but....
    // $(`#taskForm`).on('click', `#taskIn`, task) // Refer index
    // $(`#taskForm`).on('click', `#completedIn`, completed) 
    // $(`#taskForm`).on('click', `#deleteIn`) // Refer index - doesn't want delete word
    clickListeners();
    getTasks();
};// End of .ready function

function clickListeners(){
  //  listener
  $('#addBtn').on('click', function(){
    console.log('in addButton on click');

  // Delete button
  $(document).on('click', '.deleteBtn', deleteTasks);

  // Complete button listener
  $(document).on('click', '.completeBtn', modifyTasks);

 //End of clickListeners function
}};
// Render tasks function
function renderTasks(tasks) {
  console.log('in render function', tasks);
 // update DOM with taskTable
  // Empty the table
  $('#taskTable').empty();  // taskForm, taskTable is for inputs *****************

  // Render each new task  // case sensitive
//   // Example: $('#outputDiv').append(`
//   <h4>${joke.whoseJoke}'s joke</h4><p>${joke.jokeQuestion} ${joke.punchLine}</p>
//   `)
// }
// }
  for (let task of tasks) {
      $('#taskTable').append(`
          <tr data-id=${task.id}>
              <td class="task">${task.task}</td>
              <td class="completed">${task.completed}</td>  
              <td class="delete">${task.delete}</td>
              <td>
                  <button class="completedBtn">
                      completed
                  </button>
              </td>
              <td>
                  <button class="deleteBtn">
                      delete
                  </button>
              </td>
          </tr>
      `);
  }
}; //End of render Tasks function

// GET Ajax
function getTasks(){
  console.log('in getTasks function');

  $.ajax({
      method: 'GET',
      url: '/task'
  })
  .then((res) => {
      console.log('get response', res);
      renderTasks(res);
  })
  .catch((err) => {
      console.log('error with getting tasks', err);
  })
}; // End of getTasks function

// POST Ajax  // check my case Levels   ***********
function addTasks(){
  console.log('in addTasks function');

  let newTask = {
      task: $('#taskTable').val(),
      completed: $('#completedIn').val(),
  };

  $.ajax({
      method: 'POST',
      url: '/task',
      data: {newTask}
  })
  .then((res) => {
      console.log('post response', res);
  })
  .catch((err) => {
      console.log('error with posting tasks', err);
  })
}; // End of addTask function

// DELETE Ajax
function deleteTasks(){
  console.log('in deleteTasks function');

  // Setting variable to get id
  let taskId = $(this).parents('tr').data('id');

  $.ajax({
      method: 'DELETE',
      url: `/task/${taskId}`,
  })
  .then((res) => {
      console.log('delete response', res);
      getTasks();
  })
  .catch((err) => {
      console.log('error with deleting task', err);
      
  })
}; // End of deleteTasks function

// PUT Ajax
function modifyTasks() {
  console.log('in modify tasks')

  // Setting variable to get id
  let taskId = $(this).parents('tr').data('id');


  // Ajax request
  $.ajax({
      method: "PUT",
      url: `/task/${taskId}`
  })
  .then((res) => {
      console.log('completion success', res)
      getTasks();
  })
  .catch((err) => {
      console.log('error modifying task', err);
  });

}; // End of modifyTasks function