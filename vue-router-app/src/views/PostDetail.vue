<template>
  <div>
    <h2>View Post</h2>
    <div v-if="loading">Loading...</div>
    <div v-if="post">
      <h3>[ID: {{post.id}}]</h3>
      <div>{{post.text}}</div>
    </div>
  </div>
</template>


<script>
import { Post } from "../api";
export default {
  data() {
    return {
      post: null,
      loading: true
    };
  },
  created() {
    this.fetchData();
  },
  watch: { $route: "fetchData" }, //router 객체에 watch를 걸어야 path바뀔때 새로운 데이터 출력
  methods: {
    fetchData() {
      this.post = null;
      this.loading = true;
      Post.get(this.$route.params.id).then(data => {
        this.post = data;
        this.loading = false;
      });
    }
  }
};
</script>

<style scoped>
</style>