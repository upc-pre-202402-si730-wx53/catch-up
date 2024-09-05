<script setup>
import LanguageSwticher from "@/public/components/language-switcher.component.vue";
</script>

<template>
  <header>
    <language-swticher></language-swticher>
  </header>

  <main>
    <pv-card>
      <template #header>
        <img alt="user header" src="./assets/images/profile-pic.jpeg">
      </template>
      <template #title>
        Advanced Card
      </template>
      <template #content>
        {{ $t('card-content') }}
      </template>
      <template #footer>
        <pv-button icon="pi pi-check" :label="$t('submit')"  />
        <pv-button icon="pi pi-times" :label="$t('read-more')" label="Cancel" class="p-button-secondary" style="margin-left: .5em"/>
      </template>
    </pv-card>
  </main>
</template>

<style scoped>
</style>
