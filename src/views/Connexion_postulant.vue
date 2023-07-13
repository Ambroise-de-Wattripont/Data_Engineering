<script lang="ts">
  const emailP="exemple@gmail.com"
  const passewordP=String
</script>

<template>
=

    <div id="connexion">
    <p>Adresse mail {{ emailP }}</p>
        <input v-model="emailP"/>
    <p>Mot de passe {{ passwordP }}</p>
    <input v-model="passewordP"/>
    </div>


  
<RouterLink to="/profil_postulant">
  <button> Connexion </button>
</RouterLink>

<p>Probleme de connexion ?</p>
<p>Pas de compte ?</p>
<RouterLink to="/inscription">
  <button>Inscription</button>
</RouterLink>

</template>