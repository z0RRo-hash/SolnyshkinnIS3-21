<template>
  <div class="basket-page">
    <!-- Навигационное меню в том же стиле -->
    <nav class="custom-header-nav">
      <router-link to="/" class="custom-header-link">Главная</router-link>
      <router-link to="/about" class="custom-header-link">О нас</router-link>
      <img src="@/assets/logo.png" alt="OJJO Logo" class="custom-header-logo" />
      <router-link to="/catalog" class="custom-header-link">Каталог</router-link>
      <router-link to="/basket" class="custom-header-link router-link-exact-active">Корзина</router-link>
    </nav>

    <main class="basket-main">
      <h1 class="basket-title">Ваша корзина</h1>
      <div v-if="groupedItems.length" class="basket-items-container">
        <ul class="basket-items-list">
          <li v-for="(gItem, index) in groupedItems" :key="index" class="basket-item">
            <div class="basket-item-info">
              <h3 class="basket-item-title">{{ gItem.item.title }}</h3>
              <p class="basket-item-brand">{{ gItem.item.brand }}</p>
              <p class="basket-item-price">{{ gItem.item.price }}</p>
              <p class="basket-item-quantity">Количество: {{ gItem.quantity }}</p>
            </div>
            <button class="remove-button" @click="removeFromCart(gItem.item)">Удалить</button>
          </li>
        </ul>
        <div class="basket-actions">
          <button class="checkout-button" @click="checkoutCart">Оформить заказ</button>
        </div>
      </div>
      <div v-else class="empty-message">
        <p>Ваша корзина пуста.</p>
        <router-link to="/catalog" class="go-catalog">Перейти в каталог</router-link>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import Footer from '../components/Footer.vue'

const props = defineProps({
  cartItems: {
    type: Array,
    default: () => []
  },
  removeFromCart: {
    type: Function,
    required: true
  },
  checkoutCart: {
    type: Function,
    required: true
  }
})

const groupedItems = computed(() => {
  const map = new Map()
  for (const item of props.cartItems) {
    const key = item.title
    if (!map.has(key)) {
      map.set(key, { item: item, quantity: 1 })
    } else {
      map.get(key).quantity++
    }
  }
  return Array.from(map.values())
})
</script>

<style scoped>
.basket-page {
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

.basket-main {
  flex: 1;
  padding: 60px 100px;
}

.basket-title {
  font-size: 3em;
  font-weight: normal;
  margin-bottom: 60px;
  text-align: center;
  color: #fff;
}

.empty-message {
  margin-top: 50px;
  font-size: 18px;
  color: #ccc;
  text-align: center;
}

.empty-message .go-catalog {
  display: inline-block;
  margin-top: 20px;
  background: #fff;
  color: #000;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
}

.basket-items-container {
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
}

.basket-items-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.basket-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 30px 0;
  margin-bottom: 20px;
  position: relative;
  background: #111;
  border-radius: 8px;
  padding: 20px 20px 30px;
  transition: box-shadow 0.3s ease;
}

.basket-item:hover {
  box-shadow: 0 0 15px rgba(191,167,126,0.3);
}

.basket-item-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.basket-item-title {
  font-size: 22px;
  margin: 0;
  color: #fff;
  font-weight: 400;
}

.basket-item-brand {
  font-size: 14px;
  color: #aaa;
  margin: 0;
  font-style: italic;
}

.basket-item-price {
  font-size: 18px;
  color: #bfa77e;
  margin: 5px 0 0 0;
  font-weight: bold;
}

.basket-item-quantity {
  font-size: 14px;
  color: #ccc;
  margin: 5px 0 0 0;
}

.remove-button {
  background: transparent;
  color: #bfa77e;
  border: 1px solid #bfa77e;
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s ease;
}

.remove-button:hover {
  background: #bfa77e;
  color: #000;
}

.basket-actions {
  margin-top: 60px;
  text-align: center;
}

.checkout-button {
  display: inline-block;
  background: #000;
  color: #fff;
  border: 2px solid #bfa77e;
  padding: 15px 60px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  text-transform: uppercase;
}

.checkout-button:hover {
  background: #bfa77e;
  color: #000;
}
</style>
