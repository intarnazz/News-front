<script setup>
import { RouterLink } from 'vue-router'
import { UserLogout } from '@/api/api.js'
import LayoutWrapper from '@/layout/LayoutWrapper.vue'
import FormRegister from '@/components/forms/FormRegister.vue'
import FormLogin from '@/components/forms/FormLogin.vue'
import { ref } from 'vue'

const props = defineProps(['token'])
const popupIsOpen = ref(false)
const emit = defineEmits(['changeToken'])

function PopupChange(value) {
  popupIsOpen.value = value
}
function changeToken(token) {
  emit('changeToken', token)
  PopupChange(false)
}
function logout() {
  UserLogout(props.token)
  emit('changeToken', '')
}
</script>

<template>
  <header class="header box-shadow">
    <LayoutWrapper class="box-x header__wrapper">
      <RouterLink to="/"> News Vue3 + laravel10 ♥ </RouterLink>
      <div v-if="!props.token" class="box-x">
        <button @click="PopupChange('login')" class="button">Войти</button>
        <button @click="PopupChange('reg')" class="button">Регистрация</button>
      </div>
      <div v-else class="box-x">
        {{ props.token }}
        <button @click="logout()" class="button">Выйти</button>
      </div>
      <div v-if="popupIsOpen" class="popup">
        <FormRegister v-if="popupIsOpen === 'reg'" />
        <FormLogin @changeToken="changeToken" v-if="popupIsOpen === 'login'" />
        <button @click="PopupChange(false)" class="button popup__button">
          <span class="material-symbols-outlined"> close </span>
        </button>
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
  &__button
    background-color: #1e1e1e
    width: 50px
    height: 50px
    border-radius: 50px
    display: flex
    align-items: center
    justify-content: center
    position: absolute
    top: 50px
    right: 100px
    transition: .2s
    border: none
  &__button:hover
    transform: scale(1.1)
  &__button:active
    transform: scale(1.2)


.header
  background-color: #18181b
  padding: 1em 0
  &__logo
    width: 70px
    height: 70px
</style>
