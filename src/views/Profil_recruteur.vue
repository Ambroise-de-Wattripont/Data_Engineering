<template>
  <div>
    <h2>Profil</h2>

    <div class="profile-tabs">
      <button @click="activeTab = 'informations'" :class="{ active: activeTab === 'informations' }">Informations</button>
      <button @click="activeTab = 'recherche'" :class="{ active: activeTab === 'recherche' }">Recherche</button>
      <button @click="activeTab = 'propositions'" :class="{ active: activeTab === 'propositions' }">Propositions</button>
    </div>

    <div v-if="activeTab === 'informations'" class="tab-content">
      <h3>Informations du profil</h3>
      <div>
        <h4 class="profile-field">Adresse mail</h4>
        <p class="profile-value">{{ profile.email }}</p>
        <button @click="editField('email')">Modifier</button>
      </div>
      <div>
        <h4 class="profile-field">Nom</h4>
        <p class="profile-value">{{ profile.nom }}</p>
        <button @click="editField('nom')">Modifier</button>
      </div>
      <div>
        <h4 class="profile-field">Prénom</h4>
        <p class="profile-value">{{ profile.prenom }}</p>
        <button @click="editField('prenom')">Modifier</button>
      </div>
      <div>
        <h4 class="profile-field">Entreprise</h4>
        <p class="profile-value">{{ profile.entreprise }}</p>
        <button @click="editField('entreprise')">Modifier</button>
      </div>
    </div>

    <div v-else-if="activeTab === 'recherche'" class="tab-content">
      <h3>Recherche de candidats</h3>
      <form @submit.prevent="submitSearchForm">
        <div>
          <label for="competences">Compétences recherchées :</label>
          <input id="competences" v-model="searchForm.competences" type="text" required>
        </div>
        <div>
          <label for="typeContrat">Type de contrat souhaité :</label>
          <select id="typeContrat" v-model="searchForm.typeContrat" required>
            <option value="">Sélectionnez un type de contrat</option>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
            <option value="Stage">Stage</option>
          </select>
        </div>
        <div>
          <label for="domaineCompetence">Domaine de compétence :</label>
          <input id="domaineCompetence" v-model="searchForm.domaineCompetence" type="text" required>
        </div>
        <button type="submit">Rechercher</button>
      </form>
    </div>

    <div v-else-if="activeTab === 'propositions'" class="tab-content">
      <h3>Propositions envoyées</h3>
      <ul>
        <li v-for="(proposition, index) in propositions" :key="index">{{ proposition }}</li>
      </ul>
    </div>

    <div v-if="showEditForm" class="edit-form">
      <h3>Modifier le champ "{{ editedField }}"</h3>
      <input v-model="editedValue" type="text">
      <button @click="saveField">Enregistrer</button>
      <button @click="cancelEdit">Annuler</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeTab: 'informations',
      profile: {
        email: "exemple@gmail.com",
        nom: "Doe",
        prenom: "John",
        entreprise: "Ma société"
      },
      searchForm: {
        competences: "",
        typeContrat: "",
        domaineCompetence: ""
      },
      propositions: ["Proposition 1", "Proposition 2", "Proposition 3"],
      showEditForm: false,
      editedField: "",
      editedValue: ""
    };
  },
  methods: {
    editField(field) {
      this.editedField = field;
      this.editedValue = this.profile[field];
      this.showEditForm = true;
    },
    saveField() {
      this.profile[this.editedField] = this.editedValue;
      this.showEditForm = false;
      this.editedField = "";
      this.editedValue = "";
    },
    cancelEdit() {
      this.showEditForm = false;
      this.editedField = "";
      this.editedValue = "";
    },
    submitSearchForm() {
      // Handle the search form submission here
    }
  }
};
</script>

<style>
/* styles.css */

.profile-tabs {
  display: flex;
  justify-content: space-between;
}

.profile-tabs button {
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

.profile-tabs button.active {
  color: #f00;
}

.tab-content {
  margin-top: 20px;
}

.profile-field {
  font-weight: bold;
  margin: 0;
}

.profile-value {
  margin: 0;
  margin-left: 10px;
}

.edit-form {
  margin-top: 20px;
}

.edit-form h3 {
  margin: 0;
}

.edit-form input {
  margin-bottom: 10px;
}

.edit-form button {
  background-color: #f00;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}

.edit-form button:hover {
  background-color: #c00;
}

/* Ajoutez ces classes aux éléments HTML correspondants */

</style>
