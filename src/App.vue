<template>
  <div id="app">
    <router-link to="/"></router-link>
    <input type="text" placeholder="邓伦道歉" @click="fn"/>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
    // FaXian
    // SouSuo
  },
  created() {},
  
  methods:{
    fn(){
      this.$router.push({path:"/SouSuo"})
      }
  }
};
</script>

<style scoped>
input {
        width:90%;
        height:0.6rem;
        line-height:.6rem;
        border-radius:.3rem;
        box-sizing:border-box;
        padding:0 .6rem;
        background:#e4e4e6;
        font-size:.16rem;
    }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
