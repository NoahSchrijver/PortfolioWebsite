<template>
  <div class="crt-glass">
    <div class="crt-scanlines"></div>
    <div class="crt-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CRTScreen'
}
</script>

<style scoped>
/* Het glas van de CRT */
.crt-glass {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: radial-gradient(ellipse at center, rgba(27, 46, 27, 0.6) 60%, transparent 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 0 40px rgba(0, 255, 0, 0.2) inset,
    0 0 20px rgba(0, 0, 0, 0.8);
}

/* Scanlines */
.crt-scanlines {
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    rgba(0, 255, 0, 0.05) 0px,
    rgba(0, 255, 0, 0.05) 1px,
    transparent 1px,
    transparent 4px
  );
  z-index: 2;
  animation: scanlines-move 0.1s infinite;
}

@keyframes scanlines-move {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(4px);
  }
}

/* De inhoud van de CRT */
.crt-content {
  width: 100%;
  height: 100%;
  background: transparent; /* Geen achtergrondkleur */
  color: #39ff14;
  font-family: 'Share Tech Mono', 'Consolas', monospace;
  text-shadow: 0 0 8px #39ff14, 0 0 2px #fff;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vw;
  filter: contrast(1.2) brightness(0.9);
}
</style>
