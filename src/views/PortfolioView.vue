<template>
  <div class="ui-portfolio">
    <h2 class="ui-portfolio-title">PORTFOLIO</h2>
    <!-- Filter dropdown -->
    <select v-model="selectedCategory" class="ui-category-filter">
      <option value="">Alle categorieën</option>
      <option v-for="cat in categories" :key="cat" :value="cat">
        {{ cat }}
      </option>
    </select>
    <div class="ui-projects">
      <div
        class="ui-project"
        :class="{ expanded: project.expanded }"
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        :style="{ animationDelay: index * 0.12 + 's' }"
      >
        <div class="ui-project-header" @click="toggleDetails(index)">
          <img
            :src="getImageSrc(project.image)"
            :alt="project.title"
            class="ui-project-image"
          />
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
          <a :href="project.link" target="_blank" class="ui-project-link"
            >Bekijk project</a
          >
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
        expanded: false, // Voeg een 'expanded' eigenschap toe aan elk project
      })),
      selectedCategory: "",
    };
  },
  computed: {
    categories() {
      // Unieke categorieën uit je projecten
      return [...new Set(this.projects.map((p) => p.catagory || p.category))];
    },
    filteredProjects() {
      if (!this.selectedCategory) return this.projects;
      return this.projects.filter(
        (p) => (p.catagory || p.category) === this.selectedCategory
      );
    },
  },
  methods: {
    toggleDetails(index) {
      this.projects[index].expanded = !this.projects[index].expanded; // Toggle de 'expanded' status
    },
    goBack() {
      this.$router.push("/home"); // Navigeer terug naar de HomeView
    },
    getImageSrc(image) {
      // Voor lokale afbeeldingen in assets/images-portfolio
      if (image.startsWith("http")) return image;
      return require(`@/assets/images-portfolio/${image}`);
    },
  },
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
  position: relative;
}

/* Titel binnen het scherm */
.ui-portfolio-title {
  font-size: 1.5rem;
  color: #39ff14;
  text-shadow: 0 0 8px #39ff14, 0 0 2px #fff;
  margin-bottom: 1rem;
}

/* Filter dropdown */
.ui-category-filter {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #39ff14;
  background: #111;
  color: #39ff14;
}

/* Grid layout voor projecten */
.ui-projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Altijd 3 kolommen */
  gap: 1rem;
  width: 100%;
  grid-auto-rows: minmax(150px, auto);
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
  opacity: 0;
  animation: projectFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.ui-project.expanded {
  height: auto;
  overflow: visible;
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
  position: absolute; /* <-- voeg toe */
  left: 1rem; /* afstand vanaf de linkerzijde */
  bottom: 1rem; /* afstand vanaf de onderzijde */
  margin-top: 0; /* verwijder evt. margin-top */
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

@keyframes projectFadeIn {
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
