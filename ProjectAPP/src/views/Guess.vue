<template>
  <main>

    <div class="title">
      <h1>Welcome to the Flag guessing Game!</h1>
    </div>
<div class="play">
<h2>Click the button below to play</h2>
<button @click="getrandomISO()">Play!</button>
<p class="warning">Warning: Answers are case senstive and require the countries full offical name</p>
<p>Points: {{ userpoints }}</p>


</div>

<div class="user-guess">
<form @submit.prevent="checkGuess()">

<input class="Enterguessbar" type="text" placeholder="Enter your guess" v-model="userguessinput">
<button type="submit" class="submitbutton">Guess</button>

</form>


</div>


<div class="flag">
  <p>Flag</p>
  <img class="country-flag" v-if="ISOFLAG" :src="ISOFLAG" alt="Country flag" />
</div>
  

  






  </main>
</template>






<script setup lang="ts">
import {getCodes, getName} from 'country-list'
import { GetCountryFlag,FLAG_URL } from '@/components/Flag';
import { ref } from 'vue'
import Swal from 'sweetalert2'

let ISOFLAG = ref("")
let CurrentISO = ref("")
let userguessinput = ref("")
let userpoints = ref(0)

async function getflag(x:string){
  await GetCountryFlag(x)
  ISOFLAG.value = FLAG_URL.rectangle_image_url

}

function isoToCountryName(code: string): string | null {
  return getName(code) || null; 
}

async function getrandomISO(){
const countryCodes = getCodes();
const randomCode = countryCodes[Math.floor(Math.random() * countryCodes.length)];
CurrentISO.value = randomCode
await getflag(CurrentISO.value)




}


function Alert_right() {
  Swal.fire({
    title: 'Correct!',
    text: '✅ Correct! You guessed the country.',
    icon: 'success',
    background: 'black',
    color: 'white',
    confirmButtonText: 'OK',
  })
}

function Alert_wrong(correctCountry: string) {
  Swal.fire({
    title: 'Incorrect!',
    text: `❌ Incorrect! The correct answer was: ${correctCountry}`,
    icon: 'error',
    background: 'black',
    color: 'Gray',
    confirmButtonText: 'OK',
  })
}

function checkGuess() {
  const correctCountry = isoToCountryName(CurrentISO.value);
  const userGuess = userguessinput.value;

  if (userGuess === correctCountry) {
    Alert_right()
    userpoints.value += 1
  } else {
    Alert_wrong(String(correctCountry))
    userpoints.value -= 1
  }

  userguessinput.value = ""; // Clear the input field after submission
}






</script>





<style scoped>
main {
  font-family: 'Arial', sans-serif;
  text-align: center;
  background-color: #f4f4f9;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  margin: auto;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Title */
.title h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 10px;
}

/* Play Section */
.play {
  margin-bottom: 20px;
}

.play button {
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.play button:hover {
  background-color: #0056b3;
}

.warning {
  font-size: 0.9rem;
  color: #d9534f;
  font-weight: bold;
  margin-top: 10px;
}

/* Points Display */
.points {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
}

.points span {
  color: #28a745;
}

/* User Guess Input */
.user-guess form {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.Enterguessbar {
  width: 250px;
  padding: 10px;
  font-size: 1rem;
  border: 2px solid #ccc;
  border-radius: 5px;
}

.submitbutton {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;
}

.submitbutton:hover {
  background-color: #218838;
}

/* Flag Display */
.flag {
  margin-top: 20px;
}

.flag p {
  font-size: 1.3rem;
  font-weight: bold;
  color: #333;
}

.country-flag {
  width: 200px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
}
</style>
