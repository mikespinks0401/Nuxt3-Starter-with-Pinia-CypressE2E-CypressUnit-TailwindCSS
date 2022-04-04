<script setup lang="ts">
import {useUserStore} from './store/UserStore'

const user = useUserStore()
</script>

<template>
  <div>
    <NuxtWelcome />
    <p class="text-3xl flex justify-center align-center">{{user.name}}</p>
  </div>
</template>
