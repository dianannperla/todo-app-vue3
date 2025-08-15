import { createStore } from 'vuex';

const store = createStore({
  state: {
    todos: []
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
    removeTodo(state, todoIndex) {
      state.todos.splice(todoIndex, 1);
    },
    toggleTodo(state, todoIndex) {
      state.todos[todoIndex].completed = !state.todos[todoIndex].completed;
    }
  },
});

export default store;