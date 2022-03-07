<template>
  <div id="app">
    <v-navigation-drawer
      color="#07151E"
      permanent
      expand-on-hover
      app
      class="nav-bar"
    >
      <v-list nav dense>
        <v-list-item link href="#">
          <v-list-item-title class="title">Photo</v-list-item-title>
          <v-list-item-title class="title">Charts</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
.nav-bar {
}
</style>
