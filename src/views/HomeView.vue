<template>
  <div class="pipboy-login" @click="proceed" @keyup.enter="proceed" tabindex="0">
    <pre>
<span class="pipboy-cmd">LOGIN USER</span>
<span v-if="!proceeding" class="pipboy-blink">_</span>
<span v-else class="pipboy-output">ACCESS GRANTED</span>
    </pre>
    <div v-if="!proceeding" class="pipboy-hint">(Klik of druk op ENTER)</div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      proceeding: false
    }
  },
  mounted() {
    // Focus zodat ENTER direct werkt
    this.$el.focus();
  },
  methods: {
    proceed() {
      if (!this.proceeding) {
        this.proceeding = true;
        setTimeout(() => {
          // Hier kun je router.push doen naar de volgende pagina
          // this.$router.push('/volgende-pagina')
        }, 1200); // wacht even voor effect
      }
    }
  }
}
</script>

<style scoped>
.pipboy-login {
  outline: none;
  cursor: pointer;
  user-select: none;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.pipboy-hint {
  color: #39ff14;
  opacity: 0.5;
  font-size: 1rem;
  margin-top: 1rem;
  font-family: 'Share Tech Mono', 'Consolas', monospace;
}
</style>