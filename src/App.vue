<template>
  <div class="crt-bezel">
    <CRTScreen>
      <router-view />
    </CRTScreen>
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
body, html, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  background: #181f13;
}
.crt-bezel {
  width: 100vw;
  height: 100vh;
  background: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10vh 10vw;
}
</style>
