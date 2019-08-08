import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
};

export const store = new Vuex.Store({
    state: {
        todoItems: storage.fetch()
    },
    getters: {
        getTodoItems(state){
            return state.todoItems;
        }
    },
    mutations: {
        addTodo(state, todoItem) {
            let obj = { completed: false, item: todoItem };
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj);
          },
          removeTodo(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1); //splice는 배열의 원본 값 삭제
          },
          toggleComplete(state, payload) {
            // todoItem.completed = !todoItem.completed;
            state.todoItems[payload.index].completed = !payload.todoItem.completed;
             localStorage.removeItem(payload.todoItem.item);
             localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
           },
           removeAllItems(state){
            localStorage.clear();
            state.todoItems = [];
          },
    },
});
