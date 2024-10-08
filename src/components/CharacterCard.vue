<template>
    <div class="card">
      <img :src="character.image" :alt="character.name" />
      <div class="container">
        <h4><b>{{ character.name }}</b></h4>
        <p>{{ character.status }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CharacterCard',
    props: {
      character: Object
    }
  }
  </script>
  
  <style scoped>
  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 200px;
    margin: 1rem;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .container {
    padding: 2px 16px;
  }
  </style>
  