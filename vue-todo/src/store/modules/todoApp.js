import Axios from "axios";

const serverUrl = "http://localhost:4500/api/todos";

const state = {
  todoItems: []
};
const getters = {
  getTodoItems(state) {
    return state.todoItems;
  }
};
const actions = {
  loadTodoItems(context) {
    Axios.get(serverUrl)
      .then(r => r.data)
      .then(items => {
        context.commit("setTodoItems", items);
      })
      .catch(error => console.log(error));
  },
  removeTodo(context, payload) {
    Axios.delete(`${serverUrl}/${payload.id}`)
      .then(r => r.data)
      .then(items => {
        context.commit("setTodoItems", items);
      })
      .catch(error => console.log(error));
  },
  addTodoItem(context, payload) {
    Axios.post(`${serverUrl}`, payload)
      .then(r => r.data)
      .then(items => {
        context.commit("setTodoItems", items);
      })
      .catch(error => console.log(error));
  },
  clearToDo(context) {
    Axios.delete(`${serverUrl}`)
      .then(r => r.data)
      .then(items => {
        context.commit("setTodoItems", items);
      });
  },
  removeAllItems(context) {
    Axios.delete(`${serverUrl}`)
      .then(r => r.data)
      .then(items => {
        context.commit("setTodoItems", items);
      });
  },
  toggleTodoItem(context, payload) {
    Axios.put(`${serverUrl}/${payload.id}`, payload)
      .then(r => r.data)
      .then(items => {
        context.commit("setTodoItems", items);
      });
  }
};
const mutations = {
  setTodoItems(state, items) {
    state.todoItems = items;
  },
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
    localStorage.setItem(
      payload.todoItem.item,
      JSON.stringify(payload.todoItem)
    );
  },

  removeAllItems(state) {
    localStorage.clear();
    state.todoItems = [];
  }
};


export default {state, getters, actions, mutations}