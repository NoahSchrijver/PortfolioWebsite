<template>
  <div class="crt-wrapper">
    <div class="crt-bezel">
      <div class="crt-screen-container">
        <CRTScreen>
          <router-view />
        </CRTScreen>
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
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Zorg dat niets buiten de viewport zichtbaar is */
}

/* De CRT-bezel als rand */
.crt-bezel {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #111; /* Donkere achtergrond voor de bezel */
  border-radius: 20px; /* Subtiele afgeronde hoeken */
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.8), /* Buitenste schaduw */
    inset 0 0 20px rgba(0, 0, 0, 0.6), /* Binnenste schaduw */
    0 0 15px rgba(0, 255, 0, 0.2); /* Groene gloed */;
  pointer-events: none; /* Zorg dat de bezel geen interacties blokkeert */
  z-index: 9999; /* Zet de bezel bovenop alles */
  padding: 20px; /* Ruimte voor de inhoud */
  border: 12px solid #222; /* Donkere rand */
  box-sizing: border-box; /* Inclusief padding in de grootte */
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