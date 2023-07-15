<template>
   <div>
     <header class="header">
       <h1>Recrutage inversé</h1>
       <router-link to="/connexion_postulant">Connexion postulant</router-link>
       <router-link to="/connexion_recruteur">Connexion recrutement</router-link>
     </header>
     <main class="body">
       <p>Ce site est un projet de fin d'année, réalisé par Ambroise de Wattripont et Sébastien Touret</p>
       <p>Il a pour but de permettre l'interaction entre recruteur et postulant d'une manière unique : ce sont les recruteurs qui cherchent parmi les profils des recrutants.</p>
       <p>Il vous suffit simplement de vous inscrire en fonction de si vous êtes postulant ou recruteur.</p>
       <p>En tant que postulant, vous devrez afficher votre CV, votre lettre de motivation, le domaine dans lequel vous cherchez un emploi et quel type de contrat vous cherchez.</p>
       <p>En tant que recruteur, vous n'avez qu'à indiquer de quelle entreprise vous venez et ensuite vous pourrez chercher le postulant qui vous intéresse.</p>
     </main>
   </div>
 </template>
 
 <style>
 /* styles.css */

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
}

.header {
  padding: 10px;
  border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.body {
  margin-top: 20px;
  
}

.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
  border: 1px solid #000;
}

.footer a {
  margin-left: 10px;
  padding: 8px 16px;
  border: 1px solid #000;
  border-radius: 4px;
  text-decoration: none;
}

/* Ajoutez d'autres styles si nécessaire */

 
 </style>
 