window.addEventListener('load', () => {
  todos = JSON.parse(localStorage.getItem('todos')) || [];
  const nameInput = document.querySelector('#name');
  const newTodoForm = document.querySelector("#new-todo-form");

  const userName = localStorage.getItem('username') || '';

  nameInput.value = userName ;

  nameInput.addEventListener('change', e =>{
    localStorage.setItem('userNamer', e.target.value)
  })
  // newTodoForm.addEventListener('submit', e => {
  //   e.preventDefault();

  //   const todo ={
  //     content: e.target.elements.content.value,
  //     category: e.target.elements.category.value,
  //     done: false,
  //     createdAt: new Date().getItem()
  //   }

  //   todos.puch(todo);

  //   localStorage.setItem('todos', JSON.stringify(todos)); 
  // })
})