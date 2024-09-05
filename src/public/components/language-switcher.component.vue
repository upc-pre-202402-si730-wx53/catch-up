<script>
export default {
  name: "language-swticher",
  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  }
}
</script>

<template>
<pv-select-button v-model="$i18n.locale" :options="languages"></pv-select-button>
</template>

<style scoped>

</style>