<template>
  <div>
    <h1 @mouseover="upHere = true" @mouseleave="upHere = false">{{ msg }}</h1>
    <transition name="fade">
      <div v-show="upHere">
        <h2>Something Something</h2>
        <ul>
          <li>1. vue router 익히기</li>
          <li>2. vuex 익히기</li>
          <li>3. 근사하게 nav-bar만들기</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "won-mo",
  data() {
    return {
      msg: "empty",
      upHere: false,
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        const str = "월요일에 돌아와서 할 일";
        console.log(json);
        this.msg = str;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
