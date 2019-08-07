<template>
  <div class="hello">
    <!-- camelCase expression -->
    <h1>{{ myMsg }}</h1>
    <input type="text" v-model='todoItem' />
    <button v-on:click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    myMsg: String
  },
  data() {
    return {
      todoItem:'',
    }
  },
  methods: {
    addTodo(){
      //상위 컴포넌트에 이벤트 전달 (method name, data)
      this.$emit('addEvents', this.todoItem);
      this.todoItem='';
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
