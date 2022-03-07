<template>
  <div id="app">
    <v-navigation-drawer
      color="#07151E"
      width="200"
      fixed
      permanent
      expand-on-hover
      app
      class="nav-bar"
    >
      <v-list nav dense>
        <v-list-item link href="#">
          <router-link to="/" class="nav-menu">home</router-link>
        </v-list-item>
        <v-list-item link href="#">
          <router-link to="/photo" class="nav-menu">photo</router-link>
        </v-list-item>
        <v-list-item link href="#">
          <router-link to="/charts" class="nav-menu">chart</router-link>
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
.nav-menu {
  display: block;
}
</style>
