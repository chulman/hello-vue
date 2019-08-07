<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput @addEvent="addTodo"></TodoInput>
    <TodoList
      v-bind:propsTodoItems="todoItems"
      @removeEvent="removeTodo"
      @toggleEvent="toggleComplete"
    ></TodoList>
    <TodoFooter @removeAllEvent="removeAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter
  },
  data() {
    return {
      todoItems: []
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          var itemJson = localStorage.getItem(localStorage.key(i));
          this.todoItems.push(JSON.parse(itemJson));
        }
      }
    }
  },
  methods: {
    addTodo(todoItem) {
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1); //splice는 배열의 원본 값 삭제
    },
    toggleComplete(todoItem, index) {
     // todoItem.completed = !todoItem.completed;
     this.todoItems[index].completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    removeAllItems(){
      localStorage.clear();
      this.todoItems = [];
    },
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px hsla(0, 0%, 0%, 0.03);
}
</style>
