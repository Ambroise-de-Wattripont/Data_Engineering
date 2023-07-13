<template>
  <div id="connexion">
    <p>Adresse mail {{ emailR }}</p>
    <input v-model="emailR" />
    <p>Mot de passe {{ passwordR }}</p>
    <input v-model="passwordR" />

    <router-link to="/profil_recruteur">
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
      emailR: "exemple@gmail.com",
      passwordR: ""
    };
  }
};
</script>
