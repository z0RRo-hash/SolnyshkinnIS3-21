<template> 
  <div id="app"> 
    <router-view :cartItems="cartItems" :addToCart="addToCart" :removeFromCart="removeFromCart"/> 
     
  </div> 
</template> 
 
<script setup> 
import { ref } from 'vue'; 
 
const cartItems = ref([]) 
 
function addToCart(item) { 
  cartItems.value.push(item) 
} 
 
function removeFromCart(index) { 
  cartItems.value.splice(index, 1); 
} 
</script> 
 
<style> 
* { 
  margin: 0; 
  padding: 0; 
  box-sizing: border-box; 
} 
 
html, body { 
  width: 100%; 
  height: 100%; 
} 
 
#app { 
  width: 100%; 
  height: 100%; 
  display: flex; 
  flex-direction: column; 
  justify-content: space-between; 
  overflow-x: hidden; 
  background-color: black;
} 
</style>