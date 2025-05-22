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
  name: 'LoginView',
  data() {
    return {
      proceeding: false
    }
  },
  mounted() {
    this.$el.focus();
  },
  methods: {
    proceed() {
      if (!this.proceeding) {
        this.proceeding = true;
        setTimeout(() => {
          this.$router.push('/home');
        }, 1200);
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
.pipboy-cmd    { color: #7fff7f; font-weight: bold; }
.pipboy-output { color: #baffba; }
.pipboy-blink  { animation: pipboy-cursor 1s steps(1) infinite; }
@keyframes pipboy-cursor {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>