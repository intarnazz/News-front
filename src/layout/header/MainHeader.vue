<script setup>
import { RouterLink } from 'vue-router'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import { ref } from 'vue'

const popupIsOpen = ref(true)
</script>

<template>
  <header class="header box-shadow">
    <LayoutWrapper class="box-x header__wrapper">
      <RouterLink to="/"> News Vue3 + laravel10 ♥ </RouterLink>
      <div class="box-x">
        <button class="button">Войти</button>
        <button class="button">Регистрация</button>
      </div>

      <div v-if="popupIsOpen" class="popup"></div>
    </LayoutWrapper>
  </header>
</template>

<style lang="sass" scoped>
.popup
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100dvh
  background-color: #00000011
.header
  background-color: #18181b
  padding: 1em 0
  &__logo
    width: 70px
    height: 70px
</style>
