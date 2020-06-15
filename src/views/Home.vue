<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Vivus from "Vivus";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
  },
  methods: {
  }
};
</script>
<style lang="scss">
.block {
  color: red;
}
</style>
