<template>
  <div id="connexion">
    <p>Adresse mail {{ emailP }}</p>
    <input v-model="emailP" />
    <p>Mot de passe {{ passwordP }}</p>
    <input v-model="passwordP" />

    <router-link to="/profil_">
      <button>Connexion</button>
    </router-link>

    <p>Problème de connexion ?</p>
    <p>Pas de compte ?</p>
    <router-link to="/inscription">
      <button>Inscription</button>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      emailP: "exemple@gmail.com",
      passwordP: ""
    };
  }
};
</script>