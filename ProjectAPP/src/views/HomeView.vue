






<template>
    <button @click="console.log(thingy)" >API Call button</button>
    
    
    </template>
        
        
    <script setup lang="ts">
    import {getCountryInfo} from '../components/API_CINFO'
    const thingy = getCountryInfo('United States')
    
        
        
        
        
    </script>
        
        
    <style>
        
        
        
    </style>