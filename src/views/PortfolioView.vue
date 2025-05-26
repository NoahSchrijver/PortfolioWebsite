<template>
  <div class="ui-portfolio">
    <h2>PORTFOLIO</h2>
    <div class="ui-projects">
      <div class="ui-project" v-for="project in projects" :key="project.id">
        <h3 class="ui-project-title">{{ project.title }}</h3>
        <p class="ui-project-description">{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="ui-project-link">Bekijk project</a>
      </div>
    </div>
    <button class="ui-back-button" @click="goBack">Terug</button>
  </div>
</template>

<script>
export default {
  name: 'PortfolioView',
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Project 1',
          description: 'Beschrijving van project 1.',
          link: 'https://voorbeeld.com/project1'
        },
        {
          id: 2,
          title: 'Project 2',
          description: 'Beschrijving van project 2.',
          link: 'https://voorbeeld.com/project2'
        },
        {
          id: 3,
          title: 'Project 3',
          description: 'Beschrijving van project 3.',
          link: 'https://voorbeeld.com/project3'
        }
      ]
    };
  },
  methods: {
    goBack() {
      this.$router.push('/home'); // Navigeer terug naar de HomeView
    }
  }
};
</script>

<style scoped>
.ui-portfolio {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 50vh;
  padding: 2rem 1rem;
  color: #39ff14;
  font-family: 'Share Tech Mono', 'Consolas', monospace;
  text-shadow: 0 0 8px #39ff14, 0 0 2px #fff;
}
.ui-portfolio h2 {
  margin-bottom: 2rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
  text-align: left;
  width: 100%;
  text-shadow: 0 0 12px #39ff14;
}
.ui-projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}
.ui-project {
  padding: 1.5rem;
  border: 2px solid #39ff14;
  border-radius: 14px;
  background: rgba(0, 32, 0, 0.25);
  box-shadow: 0 0 12px #39ff14 inset;
  transition: background 0.2s, box-shadow 0.2s;
}
.ui-project:hover {
  background: rgba(60, 255, 60, 0.08);
  box-shadow: 0 0 24px #39ff14, 0 0 8px #fff inset;
}
.ui-project-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.ui-project-description {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.ui-project-link {
  font-size: 1rem;
  color: #39ff14;
  text-decoration: none;
  border-bottom: 1px dashed #39ff14;
  transition: color 0.2s, border-bottom 0.2s;
}
.ui-project-link:hover {
  color: #fff;
  border-bottom: 1px solid #fff;
}
.ui-back-button {
  margin-top: 2rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #39ff14;
  background: transparent;
  border: 2px solid #39ff14;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.ui-back-button:hover {
  background: #39ff14;
  color: #000;
}
</style>