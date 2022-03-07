<template>
  <v-container grid-list-xl fluid>
    <v-layout row wrap>
      <v-flex sm12>
        <h4>Basic</h4>
      </v-flex>
      <v-flex lg3 sm12 v-for="(item, index) in users" :key="'mini' + index">
        <social-widget mini v-bind="item"> </social-widget>
      </v-flex>
      <v-flex sm12>
        <h4>Normal</h4>
      </v-flex>
      <v-flex lg3 sm12 v-for="(item, index) in users" :key="'basic' + index">
        <social-widget v-bind="item"> </social-widget>
      </v-flex>
      <v-flex sm12>
        <h4>Name Card with top nav</h4>
      </v-flex>
      <v-flex
        lg3
        sm12
        v-for="(item, index) in users"
        :key="'basic-top-nav' + index"
      >
        <social-widget top-nav v-bind="item"> </social-widget>
      </v-flex>
      <v-flex sm12>
        <h4>Bottom Nav Name Card</h4>
      </v-flex>
      <v-flex
        lg3
        sm12
        v-for="(item, index) in users"
        :key="'bottom-nav' + index"
      >
        <social-widget bottom-nav v-bind="item"> </social-widget>
      </v-flex>
      <v-flex sm12>
        <h4>Contact Card</h4>
      </v-flex>
      <!-- <v-flex lg4 sm12>
            <profile-card></profile-card>
          </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "PhotoPage",
};
</script>

<style></style>
