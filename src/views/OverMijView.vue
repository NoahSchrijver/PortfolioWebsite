<template>
  <div class="over-mij-ui">
    <div class="ui-panel">
      <div class="ui-header">
        <span class="ui-header-title">[ OVER MIJ ]</span>
        <span class="ui-header-blip"></span>
      </div>
      <div class="ui-section ui-intro">
        <pre class="ui-typing">
<span v-for="(char, i) in introText" :key="i" :style="{ animationDelay: i * 0.025 + 's' }">{{ char }}</span>
        </pre>
      </div>
      <div class="ui-section">
        <h3 class="ui-section-title">Tijdlijn</h3>
        <div class="timeline">
          <div class="timeline-item" v-for="item in timeline" :key="item.year">
            <span class="timeline-year">{{ item.year }}</span>
            <span class="timeline-title">{{ item.title }}</span>
            <div class="timeline-desc">{{ item.desc }}</div>
          </div>
        </div>
      </div>
      <div class="ui-section">
        <h3 class="ui-section-title">Skills</h3>
        <div class="skills-list">
          <span class="skill-badge" v-for="skill in skills" :key="skill">{{
            skill
          }}</span>
        </div>
      </div>
      <div class="ui-section ui-contact">
        <h3 class="ui-section-title">Contact</h3>
        <span
          >Wil je samenwerken of meer weten?
          <a href="mailto:n.schrijver21@gmail.com">Stuur een mail!</a></span
        >
      </div>
      <button class="ui-back-button" @click="$router.go(-1)">Terug</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverMijView",
  data() {
    return {
      introText: Array.from(
        "Ik ben Noah, een enthousiaste developer met passie voor slimme technologie en maatschappelijke impact. Mijn kracht ligt in het combineren van creativiteit en techniek om de samenleving slimmer en beter te maken. Nieuwsgierig, leergierig en altijd op zoek naar innovatieve oplossingen!"
      ),
      timeline: [
        {
          year: "2025",
          title: "Stage bij Gemeente 's-Hertogenbosch",
          desc: "Werk aan slimme openbare ruimte, AI-projecten en maatschappelijke innovatie.",
        },
        {
          year: "2023-2025",
          title: "ICT-opleiding bij KW1C",
          desc: "Specialisatie in softwareontwikkeling, IoT en teamwork.",
        },
        {
          year: "2022",
          title: "Eerste programmeerprojecten",
          desc: "Start met programmeren, ontdekken van passie voor technologie.",
        },
      ],
      skills: [
        "JavaScript",
        "Vue.js",
        "Python",
        "IoT",
        "HTML",
        "CSS",
        "Git",
        "Teamwork",
        "Creativiteit",
      ],
    };
  },
};
</script>

<style scoped>
.over-mij-ui {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 80vh;
  width: 100%;
}
.ui-panel {
  background: rgba(16, 32, 16, 0.98);
  border: 2px solid #39ff14;
  border-radius: 12px;
  box-shadow: 0 0 24px #39ff1460;
  padding: 2rem 2.5rem;
  max-width: 650px;
  width: 100%;
  margin: 2rem 0;
  font-family: "Share Tech Mono", "Consolas", monospace;
  color: #baffba;
  position: relative;
  animation: panelFadeIn 0.9s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes panelFadeIn {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.ui-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  border-bottom: 1.5px solid #39ff14;
  padding-bottom: 0.5rem;
}
.ui-header-title {
  color: #39ff14;
  font-weight: bold;
  font-size: 1.3rem;
  letter-spacing: 2px;
}
.ui-header-blip {
  width: 12px;
  height: 12px;
  background: #39ff14;
  border-radius: 50%;
  box-shadow: 0 0 8px #39ff14, 0 0 2px #fff;
  animation: blip 1.2s infinite alternate;
}
@keyframes blip {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}
.ui-section {
  margin-bottom: 2rem;
}
.ui-section-title {
  color: #39ff14;
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  font-weight: bold;
  letter-spacing: 1px;
}
.ui-intro pre.ui-typing {
  background: none;
  border: none;
  color: #baffba;
  font-size: 1.08rem;
  margin: 0 0 0.5rem 0;
  padding: 0;
  white-space: pre-wrap;
  text-shadow: 0 0 4px #39ff14;
  min-height: 90px;
}
.ui-typing span {
  opacity: 0;
  animation: typingFadeIn 0.8s forwards;
  animation-delay: var(--delay, 0s);
  font-family: inherit;
  display: inline-block;
}
@keyframes typingFadeIn {
  to {
    opacity: 1;
  }
}
.timeline {
  margin-left: 0.5rem;
  border-left: 2px dashed #39ff14;
  padding-left: 1.5rem;
}
.timeline-item {
  margin-bottom: 1.5rem;
  position: relative;
}
.timeline-year {
  color: #39ff14;
  font-weight: bold;
  margin-right: 0.7rem;
  font-size: 1.05rem;
}
.timeline-title {
  font-weight: bold;
  font-size: 1.05rem;
}
.timeline-desc {
  margin: 0.2rem 0 0.2rem 0;
  font-size: 1rem;
  color: #baffba;
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}
.skill-badge {
  background: #181818;
  color: #39ff14;
  border: 1.5px solid #39ff14;
  border-radius: 20px;
  padding: 0.4rem 1.1rem;
  font-size: 1rem;
  font-weight: 600;
  box-shadow: 0 0 8px #39ff1433;
  transition: background 0.2s, color 0.2s;
}
.skill-badge:hover {
  background: #39ff14;
  color: #181818;
}
.ui-contact {
  text-align: center;
}
.ui-contact a {
  color: #39ff14;
  text-decoration: underline;
  transition: color 0.2s;
}
.ui-contact a:hover {
  color: #fff;
}
.ui-back-button {
  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  color: #39ff14;
  background: transparent;
  border: 2px solid #39ff14;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  font-family: "Share Tech Mono", "Consolas", monospace;
  box-shadow: 0 0 8px #39ff14;
}
.ui-back-button:hover {
  background: #39ff14;
  color: #181818;
}
@media (max-width: 700px) {
  .ui-panel {
    padding: 1rem 0.5rem;
  }
}
</style>
