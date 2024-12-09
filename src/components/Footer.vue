<template>
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-column footer-logo-column">
        <img src="@/assets/logo.png" alt="Logo" class="footer-logo" />
      </div>
      <div class="footer-column footer-contacts-column">
        <h4 class="footer-column-title">Контакты</h4>
        <div class="footer-contact-info">
          <p>+7 (812) 123-45-67</p>
          <p>+7 (911) 123-45-67</p>
          <p>ЖК Вокзал Владикавказ.</p>
        </div>
      </div>
      <div class="footer-column footer-schedule-column">
        <h4 class="footer-column-title">Режим работы</h4>
        <p>С 10:00 до 21:00 (Пн-Пт)</p>
        <p>С 11:00 до 20:00 (Сб-Вс)</p>
      </div>
      <div class="footer-column footer-instagram-column">
        <h4 class="footer-column-title">Мы в Instagram</h4>
        <img src="@/assets/instagram-icon.png" alt="Instagram" class="instagram-icon" />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  background: #000;
  color: #fff;
  font-family: serif;
  border-top: 1px solid #444;
  padding: 40px 60px; 
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  justify-content: space-between; 
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.footer-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
}

.footer-logo-column {
  flex: 0 0 auto;
  margin-right: 60px; 
}

.footer-logo {
  display: block;
  height: 50px;
  margin-bottom: 0;
}

.footer-column-title {
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: normal;
  color: #fff;
}

.footer-contact-info p,
.footer-schedule-column p {
  margin: 5px 0;
  font-size: 16px;
  line-height: 1.4;
  color: #fff;
}

.instagram-icon {
  width: 40px;
  height: 40px;
  margin-top: 10px;
}
</style>
