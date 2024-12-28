<script setup>
import NavBar from '@/components/NavBar.vue'
import GavelIcon from '@/components/icons/GavelIcon.vue'
import FolderIcon from '@/components/icons/FolderIcon.vue'
import StarCrownIcon from '@/components/icons/StarCrownIcon.vue'
import ScalesIcon from '@/components/icons/ScalesIcon.vue'
import ShieldIcon from '@/components/icons/ShieldIcon.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <main>
    <h1>Главная страница</h1>
    <GavelIcon />
    <FolderIcon />
    <StarCrownIcon />
    <ScalesIcon />
    <ShieldIcon />
  </main>
  <footer>
    <h1>Footer</h1>
  </footer>
</template>
