<template>
  <div class="crt-bezel">
    <div class="crt-glass">
      <div class="crt-reflection"></div>
      <div class="crt-inner-glow"></div>
      <div class="crt-scanlines"></div>
      <div class="crt-content">
        <div v-if="showIntro" class="crt-intro">
          <pre>
<span class="pipboy-cmd">VAULT-TEC TERMINAL</span>
<span class="pipboy-comment">// Initializing system...</span>
<span class="pipboy-output">ACCESSING DATABASE</span>
<span class="pipboy-blink">_</span>
          </pre>
        </div>
        <div v-else>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CRTScreen',
  data() {
    return {
      showIntro: true
    }
  },
  mounted() {
    if (sessionStorage.getItem('crtIntroShown')) {
      this.showIntro = false
    } else {
      setTimeout(() => {
        this.showIntro = false
        sessionStorage.setItem('crtIntroShown', '1')
      }, 3000) // 3 seconden
    }
  }
}
</script>

<style scoped>
.crt-center {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #181f13; /* optioneel, voor een mooie achtergrond */
}

.crt-bezel {
  width: 90vw;
  height: 70vh;
  border-radius: 64px;
  background:
    radial-gradient(ellipse 100% 90% at 50% 40%, #3a4a2c 60%, #181a16 100%);
  box-shadow:
    0 0 0 36px #1a2a13,                /* dikke buitenrand, donker */
    0 0 0 48px #2e3d23 inset,           /* diepe binnenste schaduw */
    0 16px 48px 0px #000b inset,        /* extra diepte onder */
    0 -12px 32px 0px #7fff7f22 inset,   /* lichte highlight boven/groen */
    0 0 96px 0px #39ff1444;             /* subtiele groene gloed buiten */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2vw;
  position: relative;
  border: 6px solid #4caf50aa;         /* subtiele groene rand */
}

.crt-glass {
  width: 100%;
  height: 100%;
  background: #111;
  border-radius: 48px;
  box-shadow:
    0 0 0 12px #222,                        /* buitenrand donker */
    0 0 80px 10px #222 inset,                /* binnenste glow */
    0 0 0 8px #222 inset,                    /* extra binnenrand */
    0 6px 24px 0px #000b inset,              /* diepe schaduw onder */
    0 -2px 12px 0px #fff2 inset,             /* lichte highlight boven */
    0 0 0 2px #39ff14 inset,                 /* groene rand */
    0 0 80px 10px #39ff14;                   /* groene glow */
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.crt-reflection {
  pointer-events: none;
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  border-radius: inherit;
  background: linear-gradient(120deg, rgba(255,255,255,0.12) 10%, rgba(255,255,255,0.02) 60%);
  z-index: 5;
  mix-blend-mode: lighten;
}

.crt-scanlines {
  pointer-events: none;
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: repeating-linear-gradient(
    to bottom,
    rgba(120,255,120,0.07) 0px,
    rgba(120,255,120,0.07) 1px,
    transparent 1px,
    transparent 4px
  );
  z-index: 3;
  mix-blend-mode: lighten;
  animation: scan-flicker 0.12s infinite;
}

@keyframes scan-flicker {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

.crt-inner-glow {
  pointer-events: none;
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow:
    0 0 80px 10px #4caf50 inset,
    0 0 40px 10px #000 inset;
  z-index: 2;
  opacity: 0.5;
}

.crt-content {
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at 50% 40%, #193c1a 80%, #111 100%);
  border-radius: inherit;
  z-index: 4;
  overflow: auto;
  color: #39ff14;
  font-family: 'Share Tech Mono', 'Consolas', monospace;
  text-shadow: 0 0 8px #39ff14, 0 0 2px #fff;
  padding: 2vw 2vw;
  filter: blur(0.2px) contrast(1.1) saturate(1.2);
  box-shadow:
    0 0 40px #4caf50 inset,
    0 0 20px #000 inset;
  /* lichte bolling */
  mask-image: radial-gradient(ellipse 80% 90% at 50% 50%, #000 80%, transparent 100%);
}

.crt-content h2 {
  margin-top: 0;
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-align: center;
  text-shadow: 0 0 12px #39ff14;
}

.crt-intro {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 50%, #193c1a 80%, #111 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: crt-fadeout 0.6s 2s forwards;
}

@keyframes crt-fadeout {
  to {
    opacity: 0;
    filter: blur(8px);
    pointer-events: none;
  }
}

.pipboy-window {
  background: rgba(0, 32, 0, 0.7);
  border: 4px solid #39ff14;
  border-radius: 18px;
  box-shadow:
    0 0 24px #39ff14,
    0 0 4px #fff inset;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 480px;
  color: #39ff14;
  font-family: 'Share Tech Mono', 'Consolas', monospace;
  text-shadow:
    0 0 8px #39ff14,
    0 0 2px #fff;
  font-size: 1.2rem;
  letter-spacing: 1px;
}

.pipboy-window h2 {
  margin-top: 0;
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-align: center;
  text-shadow: 0 0 12px #39ff14;
}

.pipboy-blink {
  animation: pipboy-cursor 1s steps(1) infinite;
}

@keyframes pipboy-cursor {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

.pipboy-cmd    { color: #7fff7f; font-weight: bold; }
.pipboy-var    { color: #39ff14; }
.pipboy-output { color: #baffba; }
.pipboy-error  { color: #ff4f4f; text-shadow: 0 0 8px #ff4f4f; }
.pipboy-comment{ color: #3f7f3f; font-style: italic; }
</style>
