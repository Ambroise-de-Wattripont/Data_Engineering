<script lang="ts">
  const emailR="exemple@gmail.com"
  const passewordR=String
</script>

<template>

  <div id="connexion">
      <p>Adresse mail {{ emailR }}</p>
          <input v-model="emailR"/>
       <p>Mot de passe {{ passwordR }}</p>
    <input v-model="passewordR"/>
  </div>


<RouterLink to="/profil_recruteur">
  <button> Connexion </button>
</RouterLink>

<p>Probleme de connexion ?</p>
<p>Pas de compte ?</p>
<RouterLink to="/inscription">
  <button>Inscription</button>
</RouterLink>

</template>