<script setup>
import { UserReg } from '@/api/api.js'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const password = ref('')

function Register() {
  UserReg(name.value, email.value, password.value)
}
</script>

<template>
  <form @submit.prevent="Register" class="popup__form form box-y">
    <div class="box-x">
      <label for="text">Имя:</label
      ><input v-model="name" id="name" name="name" class="form__input" type="text" />
    </div>
    <div class="box-x">
      <label for="email">Email:</label
      ><input v-model="email" id="email" name="email" class="form__input" type="email" />
    </div>
    <div class="box-x">
      <label for="password">Пароль</label
      ><input
        v-model="password"
        id="password"
        name="password"
        class="form__input"
        type="password"
      />
    </div>
    <input type="submit" value="Регистрация" class="button" />
  </form>
</template>

<style lang="sass" scoped>
.form
    padding: 1em
    background-color: #222
    &__input
      background: none
      border-radius: 20px
      border: 1px solid #fff
      padding: .25em 1em
      width: 300px
</style>
