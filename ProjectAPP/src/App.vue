

<template>

<main>

<div class="MenuBar">
  <nav class="nav">
    <RouterLink to="/" class="LinkTwo">landing</RouterLink>
    <RouterLink to="/test" class="LinkOne">Country Information</RouterLink>
    <RouterLink to="/" class="LinkThree">Filter Countries</RouterLink>
    <RouterLink to="/" class="LinkFour">Guess that country</RouterLink>
  </nav>
</div>

<div class="RouterViewContent">
  <RouterView />
</div>


</main>





</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import landing from './views/landing.vue'





</script>


<style>
.MenuBar{
  position: fixed; 
  top: 0;
  left: 50%;  
  transform: translateX(-50%); 
  width: 100vw; 
  height: 4vh;  
  background-color: #000000;  
  display: flex;  
  justify-content: center;  
  align-items: center;  


}
.LinkOne, .LinkTwo , .LinkThree , .LinkFour /* If you need to add more router buttons just link them here so they get autoadjusted into the menu bar */{
  color: rgb(255, 255, 255);  
  text-decoration: none;  
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
  background-color: darkgray;
  border-radius: 15px ;
  width: auto;
  

}

.nav{
  display: flex;  
  gap: 1vw;

}

.RouterViewContent {
  margin-top: 5vh; /*  Makes sure that all the content called form the router button will appear below the menu bar so it doesnt clip through */ 
}

</style>