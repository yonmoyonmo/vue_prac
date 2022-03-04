<template>
  <div>
    <p>nav</p>
    <p>child : {{ $store.state.count }}</p>
    <br />
    <button @click="plus2">2</button>
  </div>
</template>

<script>
export default {
  name: "n-a-v",
  methods: {
    plus2() {
      this.$store.state.count += 2;
    },
  },
};
</script>

<style scoped></style>
