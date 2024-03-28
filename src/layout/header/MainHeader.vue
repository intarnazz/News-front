<script setup>
import { RouterLink } from 'vue-router'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import FormRegister from '@/components/forms/FormRegister.vue'
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
      <div v-if="popupIsOpen" class="popup">
        <FormRegister />
      </div>
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
  background-color: rgba(0, 0, 0, .8)
  display: flex
  align-items: center
  justify-content: center
.header
  background-color: #18181b
  padding: 1em 0
  &__logo
    width: 70px
    height: 70px
</style>
