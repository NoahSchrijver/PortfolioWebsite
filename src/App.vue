<template>
  <div class="crt-wrapper">
    <div class="crt-monitor">
      <div class="crt-bezel">
        <div class="crt-screen-container">
          <CRTScreen>
            <router-view />
          </CRTScreen>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CRTScreen from '@/components/CRTScreen.vue'

export default {
  name: 'App',
  components: {
    CRTScreen
  }
}
</script>

<style>
/* Zorg dat de body en app fullscreen zijn */
body, html, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #181f13; /* Donkere achtergrond */
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden; /* Verwijder scrollbars */
}

/* Wrapper om alles netjes te centreren */
.crt-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #181f13; /* Donkere achtergrond */
}

/* CRT-monitor container */
.crt-monitor {
  width: 90%; /* Responsive breedte */
  max-width: 1200px; /* Maximale breedte */
  aspect-ratio: 16 / 9; /* Houd een 16:9 verhouding aan */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* De CRT-bezel */
.crt-bezel {
  width: 100%;
  height: 100%;
  background: #111; /* Donkere achtergrond voor de bezel */
  border-radius: 20px; /* Subtiele afgeronde hoeken */
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.8), /* Buitenste schaduw */
    inset 0 0 20px rgba(0, 0, 0, 0.6), /* Binnenste schaduw */
    0 0 15px rgba(0, 255, 0, 0.2); /* Groene gloed */;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Zorg dat niets buiten de bezel zichtbaar is */
  border: 12px solid #222; /* Donkere rand */
  padding: 20px; /* Ruimte voor het scherm */
}

/* Container voor het scherm */
.crt-screen-container {
  width: 100%;
  height: 100%;
  background: #000; /* Zwarte achtergrond voor het scherm */
  border-radius: inherit; /* Zelfde afgeronde hoeken als de bezel */
  overflow: hidden; /* Zorg dat niets buiten het scherm zichtbaar is */
}
</style>