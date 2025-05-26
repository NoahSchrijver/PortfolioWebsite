<template>
  <div class="ui-home">
    <h2>FILE SYSTEM</h2>
    <div class="ui-folders">
      <div class="ui-folder" @click="goTo('about')">
        <span class="ui-icon">[📁]</span>
        <span class="ui-label">Over Mij</span>
      </div>
      <div class="ui-folder" @click="goTo('portfolio')">
        <span class="ui-icon">[📂]</span>
        <span class="ui-label">Portfolio</span>
      </div>
    </div>
    <div class="ui-hint">(Klik op een map om te openen)</div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    goTo(section) {
      if (section === 'about') {
        this.$router.push('/about');
      } else if (section === 'portfolio') {
        this.$router.push('/portfolio');
      }
    }
  }
}
</script>

<style scoped>
.ui-home {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;
  padding: 2rem 1rem;
  color: #39ff14;
  font-family: 'Share Tech Mono', 'Consolas', monospace;
  text-shadow: 0 0 8px #39ff14, 0 0 2px #fff;
}
.ui-home h2 {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-align: left;
  width: 100%;
  text-shadow: 0 0 12px #39ff14;
}
.ui-folders {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}
.ui-folder {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.3rem;
  padding: 1.2rem 2rem;
  border: 2px solid #39ff14;
  border-radius: 14px;
  background: rgba(0, 32, 0, 0.25);
  box-shadow: 0 0 12px #39ff14 inset;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  user-select: none;
}
.ui-folder:hover {
  background: rgba(60, 255, 60, 0.08);
  box-shadow: 0 0 24px #39ff14, 0 0 8px #fff inset;
}
.ui-icon {
  font-size: 2rem;
  filter: drop-shadow(0 0 6px #39ff14);
}
.ui-label {
  font-size: 1.3rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.ui-hint {
  margin-top: 2.5rem;
  color: #39ff14;
  opacity: 0.5;
  font-size: 1rem;
}
</style>