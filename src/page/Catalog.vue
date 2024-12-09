<template>
  <div class="catalog-page">
    <nav class="custom-header-nav">
      <router-link to="/" class="custom-header-link">Главная</router-link>
      <a href="#" class="custom-header-link">О нас</a>
      <img src="@/assets/logo.png" alt="OJJO Logo" class="custom-header-logo" />
      <router-link to="/catalog" class="custom-header-link router-link-exact-active">Каталог</router-link>
      <router-link to="/basket" class="custom-header-link">Корзина</router-link>
    </nav>

    <main class="catalog-main">
      <h1 class="catalog-title">Каталог Услуг</h1>
      <div class="catalog-layout">
        <div class="catalog-left">
          <img src="@/assets/item1.png" alt="Big service image" class="catalog-big-image" />
        </div>
        <div class="catalog-right">
          <div class="catalog-services">
            <div v-for="item in items" :key="item.id" class="catalog-item">
              <h3 class="catalog-item-title">{{ item.title }}</h3>
              <p class="catalog-item-brand">{{ item.brand }}</p>
              <p class="catalog-item-price">{{ item.price }}</p>
              <button @click="addToCart(item)" class="buy-button">В КОРЗИНУ</button>
            </div>
          </div>
        </div>
      </div>
      <button class="load-more-button">Показать еще</button>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import serviceImage from '@/assets/item1.png'
import Footer from '@/components/Footer.vue'

const props = defineProps({
  cartItems: {
    type: Array,
    default: () => []
  },
  addToCart: {
    type: Function,
    required: true
  }
})

const items = [
  { id: 1, title: 'Стрижка и укладка', brand: 'Парикмахер', price: '2 500 ₽', image: serviceImage },
  { id: 2, title: 'Маникюр с покрытием', brand: 'Нейл-мастер', price: '1 500 ₽', image: serviceImage },
  { id: 3, title: 'Массаж всего тела', brand: 'Массажист', price: '3 000 ₽', image: serviceImage },
  { id: 4, title: 'Чистка лица', brand: 'Косметолог', price: '2 200 ₽', image: serviceImage },
  { id: 5, title: 'Окрашивание волос', brand: 'Парикмахер-колорист', price: '5 000 ₽', image: serviceImage },
  { id: 6, title: 'Педикюр с покрытием', brand: 'Нейл-мастер', price: '2 000 ₽', image: serviceImage },
];
</script>

<style scoped>
.catalog-page {
  padding-right: 100px;
  padding-left: 100px;
  font-family: serif;
  background: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.custom-header-nav {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;
  background: #000;
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

.catalog-main {
  padding: 60px 100px;
  color: #fff;
  text-align: left;
}

.catalog-title {
  font-size: 3em;
  font-weight: normal;
  margin-bottom: 60px;
  color: #fff;
  text-align: center;
}

.catalog-layout {
  display: flex;
  align-items: flex-start;
  gap: 50px;
  margin-bottom: 40px;
}

.catalog-left {
  flex: 0 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.catalog-big-image {
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1 / 1; 
  object-fit: cover;
  background: #111;
  border-radius: 8px;
}

.catalog-right {
  flex: 1;
}

.catalog-services {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.catalog-item {
  border-top: 1px solid #777;
  padding-top: 20px;
}

.catalog-item-title {
  font-size: 20px;
  margin: 0;
  color: #fff;
}

.catalog-item-brand {
  margin: 5px 0 0;
  font-size: 14px;
  color: #aaa;
}

.catalog-item-price {
  font-size: 16px;
  color: #fff;
  margin-top: 5px;
}

.buy-button {
  background-color: #fff;
  color: #000;
  border: none;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.3s ease;
}

.buy-button:hover {
  background-color: #bfa77e;
  color: #000;
}

.load-more-button {
  margin: 30px auto 0;
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: background 0.3s ease;
}

.load-more-button:hover {
  background-color: #bfa77e;
  color: #000;
}
</style>
