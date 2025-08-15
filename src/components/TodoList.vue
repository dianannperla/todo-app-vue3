<template>
  <div>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Thêm công việc mới" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed" @change="toggleTodo(index)" />
        {{ todo.text }}
        <button @click="removeTodo(index)">Xóa</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      newTodo: ''
    };
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()) {
        this.$store.commit('addTodo', { text: this.newTodo, completed: false });
        this.newTodo = '';
      }
    },
    removeTodo(index) {
      this.$store.commit('removeTodo', index);
    },
    toggleTodo(index) {
      this.$store.commit('toggleTodo', index);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>