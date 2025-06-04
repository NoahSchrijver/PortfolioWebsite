<template>
  <div class="ui-portfolio">
    <h2 class="ui-portfolio-title">PORTFOLIO</h2>
    <div class="ui-projects">
      <div
        class="ui-project"
        v-for="(project, index) in projects"
        :key="project.id"
      >
        <div class="ui-project-header" @click="toggleDetails(index)">
          <img :src="project.image" :alt="project.title" class="ui-project-image" />
          <div class="ui-project-info">
            <h3 class="ui-project-title">{{ project.title }}</h3>
            <p class="ui-project-description">{{ project.description }}</p>
          </div>
          <span class="ui-project-toggle">
            {{ project.expanded ? "▲" : "▼" }}
          </span>
        </div>
        <div v-if="project.expanded" class="ui-project-details">
          <p>{{ project.details }}</p>
          <a :href="project.link" target="_blank" class="ui-project-link">Bekijk project</a>
        </div>
      </div>
    </div>
    <button class="ui-back-button" @click="goBack">Terug</button>
  </div>
</template>

<script>
import projects from "@/data/projects.json"; // Importeer de JSON

export default {
  name: "PortfolioView",
  data() {
    return {
      projects: projects.map((project) => ({
        ...project,
        expanded: false // Voeg een 'expanded' eigenschap toe aan elk project
      }))
    };
  },
  methods: {
    toggleDetails(index) {
      this.projects[index].expanded = !this.projects[index].expanded; // Toggle de 'expanded' status
    },
    goBack() {
      this.$router.push("/home"); // Navigeer terug naar de HomeView
    }
  }
};
</script>

<style scoped>
/* Algemene layout */
.ui-portfolio {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto; /* Zorg dat de inhoud scrollbaar is als het scherm vol is */
}

/* Titel binnen het scherm */
.ui-portfolio-title {
  font-size: 1.5rem;
  color: #39ff14;
  text-shadow: 0 0 8px #39ff14, 0 0 2px #fff;
  margin-bottom: 1rem;
}

/* Grid layout voor projecten */
.ui-projects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 3 kolommen indien mogelijk */
  gap: 1rem;
  width: 100%;
  grid-auto-rows: minmax(150px, auto); /* Zorg voor consistente rijen */
}

/* Projectkaart */
.ui-project {
  border: 2px solid #39ff14;
  border-radius: 8px;
  background: rgba(0, 32, 0, 0.25);
  box-shadow: 0 0 12px #39ff14 inset;
  transition: background 0.2s, box-shadow 0.2s, height 0.3s ease; /* Voeg een overgang toe voor de hoogte */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  overflow: hidden; /* Beperk de inhoud */
  height: 150px; /* Standaard hoogte */
}

.ui-project.expanded {
  height: auto; /* Laat de hoogte groeien als het project is uitgeklapt */
}

/* Header van het project */
.ui-project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
}

/* Afbeelding */
.ui-project-image {
  width: 60px;
  height: auto;
  margin-right: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 8px #39ff14;
}

/* Projectinformatie */
.ui-project-info {
  flex: 1;
}

.ui-project-title {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.ui-project-description {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: #baffba;
}

/* Toggle-pijltje */
.ui-project-toggle {
  font-size: 1.2rem;
  color: #39ff14;
  cursor: pointer;
}

/* Uitklapbare details */
.ui-project-details {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px dashed #39ff14;
  font-size: 0.9rem;
  color: #baffba;
}

/* Link naar project */
.ui-project-link {
  font-size: 0.9rem;
  color: #39ff14;
  text-decoration: none;
  border-bottom: 1px dashed #39ff14;
  transition: color 0.2s, border-bottom 0.2s;
}

.ui-project-link:hover {
  color: #fff;
  border-bottom: 1px solid #fff;
}

/* Terugknop */
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