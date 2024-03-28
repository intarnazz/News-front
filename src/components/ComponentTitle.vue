<script setup>
const props = defineProps(['title'])
</script>

<template>
  <div class="box-x">
    <h2>{{ props.title }}</h2>
    <div class="flex">
      <hr />
    </div>
  </div>
</template>

<style scoped lang="sass">
h2
  font-size: 1.3em
  color: $mainColor
</style>
