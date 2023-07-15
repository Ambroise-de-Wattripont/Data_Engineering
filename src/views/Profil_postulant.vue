<template>
  <div>
    <h2>Profil</h2>

    <div class="profile-tabs">
      <button @click="activeTab = 'informations'">Informations</button>
      <button @click="activeTab = 'recherche'">Recherche</button>
      <button @click="activeTab = 'propositions'">Propositions</button>
    </div>

    <div v-if="activeTab === 'informations'">
      <h3>Informations du profil</h3>
      <div>
        <h4>Adresse mail</h4>
        <p>{{ profile.email }}</p>
        <button @click="editField('email')">Modifier</button>
      </div>
      <div>
        <h4>Nom</h4>
        <p>{{ profile.nom }}</p>
        <button @click="editField('nom')">Modifier</button>
      </div>
      <div>
        <h4>Prénom</h4>
        <p>{{ profile.prenom }}</p>
        <button @click="editField('prenom')">Modifier</button>
      </div>
      <div>
        <h4>Entreprise</h4>
        <p>{{ profile.entreprise }}</p>
        <button @click="editField('entreprise')">Modifier</button>
      </div>
    </div>

    <div v-else-if="activeTab === 'recherche'">
      <h3>Recherche de candidats</h3>
      <form @submit.prevent="submitSearchForm">
        <!-- Champs de recherche -->
        <button type="submit">Rechercher</button>
      </form>
    </div>

    <div v-else-if="activeTab === 'propositions'">
      <h3>Propositions envoyées</h3>
      <ul>
        <li v-for="(proposition, index) in propositions" :key="index">{{ proposition }}</li>
      </ul>
    </div>

    <div v-if="showEditForm">
      <h3>Modifier le champ "{{ editedField }}"</h3>
      <input v-model="editedValue" type="text">
      <button @click="saveField">Enregistrer</button>
      <button @click="cancelEdit">Annuler</button>
    </div>
  </div>
</template>

<script>
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
      // Gérer la soumission du formulaire de recherche ici
    }
  }
};
</script>

<style>
/* Styles CSS */

/* Ajoutez les styles supplémentaires ici */

</style>
