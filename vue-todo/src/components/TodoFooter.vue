<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearToDo">clear text</span>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";

export default {
  methods: {
    ...mapActions({
      clearToDo: "removeAllItems"
    })
    //      clearToDo(){
    //          //this.$emit('removeAllEvent');
    //          this.$store.commit('removeAllItems');
    //      }
  }
};
</script>

<style>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
