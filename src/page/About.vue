<template>
    <div class="about-page">
      <nav class="custom-header-nav">
        <router-link to="/" class="custom-header-link">Главная</router-link>
        <router-link to="/about" class="custom-header-link router-link-exact-active">О нас</router-link>
        <img src="@/assets/logo.png" alt="OJJO Logo" class="custom-header-logo" />
        <router-link to="/catalog" class="custom-header-link">Каталог</router-link>
        <router-link to="/basket" class="custom-header-link">Корзина</router-link>
      </nav>
  
      <main class="about-main">
        <h1 class="about-title">О нас</h1>
        <div class="about-content">
          <p class="about-text">
            Добро пожаловать в салон красоты «Super-Beauty» на Вокзале — место, где роскошь встречается с заботой о вашем внутреннем и внешнем благополучии.
          </p>
          <p class="about-text">
            Мы создали пространство, наполненное спокойной атмосферой, стилем и вниманием к деталям. Наши специалисты — это команда опытных мастеров, для которых красота — это не просто профессия, а искусство. Мы стремимся понять ваши пожелания и воплотить их в жизнь, подчеркнув индивидуальность каждого гостя.
          </p>
          <p class="about-text">
            В «Super-Beauty» мы предлагаем эксклюзивные услуги: от авторских стрижек и профессионального окрашивания до изысканных процедур ухода за кожей и ногтями. Мы используем только лучшие бренды и проверенные методики, чтобы обеспечить вам результат, которым можно гордиться.
          </p>
          <p class="about-text">
            Каждое ваше посещение — это возможность расслабиться, обновиться и раскрыть свою естественную привлекательность. Мы верим, что истинная красота исходит из гармонии между внутренним состоянием и внешним образом. Именно поэтому «Super-Beauty» — это не просто салон, а ваш личный остров спокойствия и вдохновения.
          </p>
          <p class="about-text">
            Спасибо, что выбрали нас. Мы будем рады видеть вас снова и снова, помогая вам сиять и чувствовать себя великолепно в любое время.
          </p>
        </div>
      </main>
  
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Footer from '../components/Footer.vue';
  </script>
  
  <style scoped>
  .about-page {
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
  
  .about-main {
    flex: 1;
    padding: 60px 100px;
    text-align: center;
  }
  
  .about-title {
    font-size: 3em;
    font-weight: normal;
    margin-bottom: 60px;
    color: #fff;
  }
  
  .about-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: left;
  }
  
  .about-text {
    font-size: 18px;
    color: #ccc;
    line-height: 1.8;
    margin-bottom: 30px;
  }
  </style>
  