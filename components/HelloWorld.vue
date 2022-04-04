<script setup lang="ts">
import {useUserStore} from '../store/UserStore'

const user = useUserStore()
</script>

<template>
    <div>
        <div class="w-full min-h-screen bg-black flex justify-center items-center">
            <p class="text-white text-3xl">Hello {{user.name}}</p>
        </div>

    </div>
</template>