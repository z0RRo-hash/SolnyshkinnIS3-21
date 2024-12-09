<template>
  <header class="custom-header" :style="currentBackgroundStyle">
    <nav class="custom-header-nav">
      <router-link to="/" class="custom-header-link">Главная</router-link>
      <a href="#" class="custom-header-link">О нас</a>
      <img src="@/assets/logo.png" alt="OJJO Logo" class="custom-header-logo" />
      <router-link to="/catalog" class="custom-header-link">Каталог</router-link>
      <router-link to="/basket" class="custom-header-link">Корзина</router-link>
    </nav>
    <div class="custom-header-content">
      <h1 class="custom-header-title">Салон красоты<br>«Super-Beauty»<br>на Вокзале</h1>
      <div class="custom-scroll-down">Прокрутите вниз</div>
    </div>

    <button class="slider-button slider-button-left" @click="prevBackground">&#10094;</button>
    <button class="slider-button slider-button-right" @click="nextBackground">&#10095;</button>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'

import bg1 from '@/assets/background.png'
import bg2 from '@/assets/background2.png'

const backgrounds = [bg1, bg2]

const currentIndex = ref(0)

const currentBackgroundStyle = computed(() => {
  return {
    backgroundImage: `url(${backgrounds[currentIndex.value]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
})

function nextBackground() {
  currentIndex.value = (currentIndex.value + 1) % backgrounds.length
}

function prevBackground() {
  currentIndex.value = (currentIndex.value - 1 + backgrounds.length) % backgrounds.length
}
</script>

<style scoped>
.custom-header {
  min-height: 100vh;
  width: 100%;
  padding-right: 100px;
  padding-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
  font-family: serif; 
}

.custom-header-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  background: rgba(0, 0, 0, 0);
  border-bottom: 1px solid #bfa77e;
}

.custom-header-link {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: normal;
  position: relative; 
}

.custom-header-link.router-link-exact-active::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #bfa77e;
  bottom: -5px; 
  left: 0;
}

.custom-header-logo {
  height: 50px;
}

.custom-header-content {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.custom-header-title {
  font-size: 3em;
  font-weight: 400; 
  margin-bottom: 20px;
  padding-bottom: 350px;
  padding-top: 250px;
}

.custom-scroll-down {
  font-size: 1em;
  font-weight: normal;
  opacity: 0.8;
}

.slider-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #000;
  color: #fff;
  border: 1px solid #bfa77e;
  font-size: 30px;
  font-weight: bold;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 0;
  transition: background 0.3s ease, color 0.3s ease;
  user-select: none;
}

.slider-button:hover {
  background: #bfa77e;
  color: #000;
}

.slider-button-left {
  left: 30px;
}

.slider-button-right {
  right: 30px;
}

.custom-footer {
  background: rgba(0, 0, 0, 0);
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-footer-logos {
  display: flex;
  gap: 20px;
}

.custom-footer-logo {
  height: 50px;
}
</style>
