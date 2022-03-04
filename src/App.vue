<template>
  <div id="app">
    <div>
      <p>
        counter : {{ $store.state.count }} <br />
        <button @click="add">+</button>
        <button @click="sub">-</button>
      </p>
    </div>
    <Nav />
    <Wonmo />
  </div>
</template>

<script>
import Wonmo from "./components/Wonmo.vue";
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Wonmo,
    Nav,
  },
  methods: {
    add() {
      this.$store.state.count++;
    },
    sub() {
      this.$store.state.count--;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
