<template>
  <main class="main-content">
    <section class="events-section">
      <div class="events-quote">“</div>
      <div class="events-description">
        В нашем салоне красоты “Ваша Красота” мы создаем не просто внешнюю привлекательность, а помогаем раскрыть ваш внутренний потенциал и подчеркнуть вашу индивидуальность.
      </div>
      <div class="events-grid">
        <div class="event-item">
          <img src="@/assets/service1.png" alt="Парикмахерские услуги" class="event-image" />
          <div class="event-caption">Парикмахерские услуги</div>
        </div>
        <div class="event-item">
          <img src="@/assets/service2.png" alt="Маникюр" class="event-image" />
          <div class="event-caption">Маникюр</div>
        </div>
        <div class="event-item">
          <img src="@/assets/service3.png" alt="Педикюр" class="event-image" />
          <div class="event-caption">Педикюр</div>
        </div>
        <div class="event-item">
          <img src="@/assets/service4.png" alt="Косметология" class="event-image" />
          <div class="event-caption">Косметология</div>
        </div>
        <div class="event-item">
          <img src="@/assets/service5.png" alt="Эстетист по телу" class="event-image" />
          <div class="event-caption">Эстетист по телу</div>
        </div>
        <div class="event-item">
          <img src="@/assets/service6.png" alt="Визаж" class="event-image" />
          <div class="event-caption">Визаж</div>
        </div>
      </div>

      <div class="brands-grid">
        <img src="@/assets/k.png" alt="Brand K" class="brand-logo" />
        <img src="@/assets/oribe.png" alt="Brand Oribe" class="brand-logo" />
        <img src="@/assets/alterna.png" alt="Brand Alterna" class="brand-logo" />
        <img src="@/assets/aldo-coppola.png" alt="Brand Aldo Coppola" class="brand-logo" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.main-content {
  padding: 40px 20px;
  font-family: Arial, sans-serif;
}

.events-section {
  background: #000;
  color: #fff;
  text-align: center;
  padding: 60px 20px;
  margin-bottom: 80px;
  margin-top: 25px;
}

.events-quote {
  font-size: 48px;
  font-weight: normal;
  margin-bottom: 30px;
}

.events-description {
  font-size: 18px;
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto 50px;
}

.events-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.event-item {
  text-align: center;
}

.event-image {
  width: 100%;
  height: auto;
}

.event-caption {
  font-size: 16px;
  margin-top: 10px;
  font-weight: normal;
}

.brands-grid {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 250px; 
  margin-top: 120px; 
}

.brand-logo {
  max-height: 85px; 
  filter: grayscale(100%) brightness(0.9); 
}
</style>
