<script setup></script>

<template>
  <div class="wrapper">
    <slot> </slot>
  </div>
</template>

<style lang="sass" scoped>
.wrapper
  width: 1200px
  margin: auto

@media screen and (max-width: 1200px)
  .wrapper
    width: auto
    margin: 0
</style>
