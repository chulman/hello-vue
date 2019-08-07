<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!-- kebab case expression -->
    <HelloWorld :my-msg="message" v-on:addEvents="addTodoItems"/>
    <ul>
      <li v-for="(todo, index) in todoItems" :key="index" >
        {{todo}}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  //여기가 상위 컴포넌트 , 하위(HelloWorld로 전달)
 // props: ['msg'],
  components : {
    HelloWorld
  },
  data(){
    return {
      message: 'parent -> child',
      todoItems: []
    }
  },
  methods: {
    addTodoItems(todoItem){
      this.todoItems.push(todoItem);
      console.log(this.todoItems);
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
