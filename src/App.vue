<template>
    <div class="app">
      <main>
        <navbar />
        <router-view />
        <custom-footer />
      </main>
    </div>
</template>

<script>
import Navbar from '@/components/main/Navbar.vue'
import CustomFooter from "@/components/main/CustomFooter.vue"

export default {
  name: 'App',
  components: {
    Navbar,
    CustomFooter
  },
};
</script>

<style lang="scss">


.app {
  font-family: "Marcellus-Regular" !important;
  direction: ltr;
  background-color: var(--secondary-base);
  overflow-x: hidden;
}

a:hover {
    text-decoration: none !important;
}
ul{
  list-style: none;
}
</style>
