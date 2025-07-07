let todoList = {
  todos: [
    {
      task: "This is a todo example",
    },
  ],
};

module.exports = {
  getTodos: () => Promise.resolve(todoList),

  // task shape: { task: string }
  addTask: (task) => {
    todoList.todos.push(task);
    Promise.resolve(todoList);
  },
};
