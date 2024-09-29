<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <h1>Rose O'Malley Portfolio</h1>


      <nav>
        <RouterLink :to="{ name:'home' }">Home</RouterLink> |
        <RouterLink :to="{ name:'software' }">Software Portfolio</RouterLink> |
        
        <RouterLink :to="{ name:'music' }">Music Portfolio</RouterLink> |
        <RouterLink :to="{ name:'resume' }">Resume</RouterLink> |
        <RouterLink :to="{ name:'about' }">About</RouterLink>
        <!-- instead of using the direct route, using a v-bind with the name in case the route is changed later -->
      </nav>
  </header>
<div id="main">
  <RouterView />
</div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  justify-content: space-between;
  background-color: #ffd7ba;
  padding: 20px;
  margin: 0px;
}
#main{
  padding: 20px
}

</style>
