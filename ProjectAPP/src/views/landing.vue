<template>
  <main class="landing-container">
    <header class="header">
      <h1>Welcome to the Country Info Center</h1>
      <p>Guess the flags, grab country info and even filter countries!</p>
    </header>


  
  </main>
</template>

<script setup lang="ts">
const getStarted = () => {
  alert("Welcome to the Country Info Center!");
};
</script>

<style scoped>
.landing-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  color: white;
  font-family: Arial, sans-serif;
}

.header {
  margin-bottom: 20px;
}

.content p {
  margin-bottom: 15px;
  font-size: 1.2rem;
}

button {
  background: #ff6b6b;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

button:hover {
  background: #ff3b3b;
}

.footer {
  position: absolute;
  bottom: 10px;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
