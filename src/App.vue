<template>
  <div>
    <h1>Rick and Morty Characters</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="characters && characters.length" class="cards-container">
      <CharacterCard 
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import CharacterCard from './components/CharacterCard.vue';

export default {
  name: 'App',
  components: {
    CharacterCard
  },
  setup() {
    const characters = ref([]);
    const loading = ref(true);
    const error = ref(null);

    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if (!response.ok) {
          throw new Error('Failed to fetch characters');
        }
        const data = await response.json();
        characters.value = data.results;
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchCharacters();
    });

    return {
      characters,
      loading,
      error,
    };
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
