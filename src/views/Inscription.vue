<template>
  <div id="app">
    <h2>Inscription Recruteur</h2>
    <form v-if="!isPostulantFormFilled" @submit.prevent="submitRecruteurForm">
      <div>
        <label for="recruteurEmail">Adresse mail:</label>
        <input id="recruteurEmail" v-model="recruteur.email" type="email" required>
      </div>
      <div>
        <label for="recruteurPassword">Mot de passe:</label>
        <input id="recruteurPassword" v-model="recruteur.password" type="password" required>
      </div>
      <div>
        <label for="recruteurNom">Nom:</label>
        <input id="recruteurNom" v-model="recruteur.nom" type="text" required>
      </div>
      <div>
        <label for="recruteurPrenom">Prénom:</label>
        <input id="recruteurPrenom" v-model="recruteur.prenom" type="text" required>
      </div>
      <div>
        <label for="recruteurEntreprise">Entreprise:</label>
        <input id="recruteurEntreprise" v-model="recruteur.entreprise" type="text" required>
      </div>
      <button type="submit">Inscription Recruteur</button>
    </form>

    <h2>Inscription Postulant</h2>
    <form v-if="!isRecruteurFormFilled" @submit.prevent="submitPostulantForm">
      <div>
        <label for="postulantEmail">Adresse mail:</label>
        <input id="postulantEmail" v-model="postulant.email" type="email" required>
      </div>
      <div>
        <label for="postulantPassword">Mot de passe:</label>
        <input id="postulantPassword" v-model="postulant.password" type="password" required>
      </div>
      <div>
        <label for="postulantNom">Nom:</label>
        <input id="postulantNom" v-model="postulant.nom" type="text" required>
      </div>
      <div>
        <label for="postulantPrenom">Prénom:</label>
        <input id="postulantPrenom" v-model="postulant.prenom" type="text" required>
      </div>
      <div>
        <label for="postulantCV">CV:</label>
        <input id="postulantCV" type="file" accept=".pdf,.doc,.docx" required @change="handleCVUpload">
      </div>
      <div>
        <label for="postulantLettreMotivation">Lettre de motivation:</label>
        <textarea id="postulantLettreMotivation" v-model="postulant.lettreMotivation" required></textarea>
      </div>
      <div>
        <label for="postulantCompetences">Compétences:</label>
        <input id="postulantCompetences" v-model="postulant.competences" type="text" required>
      </div>
      <div>
        <label for="postulantTypeContrat">Type de contrat:</label>
        <select id="postulantTypeContrat" v-model="postulant.typeContrat" required>
          <option value="">Sélectionnez un type de contrat</option>
          <option value="CDI">CDI</option>
          <option value="CDD">CDD</option>
          <option value="Stage">Stage</option>
          <!-- Ajoutez d'autres options ici -->
        </select>
      </div>
      <div>
        <label for="postulantAnnonce">Annonce:</label>
        <input id="postulantAnnonce" v-model="postulant.annonce" type="text" required>
      </div>
      <button type="submit">Inscription Postulant</button>
    </form>

    <p v-else>Veuillez remplir un seul formulaire à la fois.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recruteur: {
        email: "",
        password: "",
        nom: "",
        prenom: "",
        entreprise: ""
      },
      postulant: {
        email: "",
        password: "",
        nom: "",
        prenom: "",
        cv: null,
        lettreMotivation: "",
        competences: "",
        typeContrat: "",
        annonce: ""
      }
    };
  },
  computed: {
    isRecruteurFormFilled() {
      return (
        this.recruteur.email !== "" ||
        this.recruteur.password !== "" ||
        this.recruteur.nom !== "" ||
        this.recruteur.prenom !== "" ||
        this.recruteur.entreprise !== ""
      );
    },
    isPostulantFormFilled() {
      return (
        this.postulant.email !== "" ||
        this.postulant.password !== "" ||
        this.postulant.nom !== "" ||
        this.postulant.prenom !== "" ||
        this.postulant.cv !== null ||
        this.postulant.lettreMotivation !== "" ||
        this.postulant.competences !== "" ||
        this.postulant.typeContrat !== "" ||
        this.postulant.annonce !== ""
      );
    }
  },
  methods: {
    submitRecruteurForm() {
      console.log("Données du formulaire Recruteur soumises :", this.recruteur);
      // Ajoutez ici la logique pour traiter les données du formulaire Recruteur
    },
    submitPostulantForm() {
      console.log("Données du formulaire Postulant soumises :", this.postulant);
      // Ajoutez ici la logique pour traiter les données du formulaire Postulant
    },
    handleCVUpload(event) {
      const file = event.target.files[0];
      // Faites ce que vous voulez avec le fichier CV, par exemple l'ajouter à this.postulant.cv
      this.postulant.cv = file;
    }
  }
};
</script>
