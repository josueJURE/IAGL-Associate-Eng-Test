const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos()
    },
    addTask: async (task) => {
      return await repository.addTask(task)
    }
  };
};

module.exports = todoService;