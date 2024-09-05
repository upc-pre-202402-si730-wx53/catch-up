<script setup>
</script>

<template>
  <header></header>

  <main>
    <pv-card>
      <template #header>
        <img alt="user header" src="./assets/images/profile-pic.jpeg">
      </template>
      <template #title>
        Advanced Card
      </template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
        deserunt
        quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </template>
      <template #footer>
        <pv-button icon="pi pi-check" label="Save"/>
        <pv-button icon="pi pi-times" label="Cancel" class="p-button-secondary" style="margin-left: .5em"/>
      </template>
    </pv-card>
  </main>
</template>

<style scoped>
</style>
