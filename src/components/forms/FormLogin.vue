<script setup>
import { UserLogin } from '@/api/api.js'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const emit = defineEmits(['changeToken'])

async function Register() {
  const res = await UserLogin(email.value, password.value)
  emit('changeToken', res.token)
}
</script>

<template>
  <form @submit.prevent="Register" class="popup__form form box-y">
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
    <input type="submit" value="Войти" class="button" />
  </form>
</template>

<style lang="sass" scoped>
.form
    padding: 1em
    background-color: #222
    border-radius: 20px
    &__input
      background: none
      border-radius: 20px
      border: 1px solid #fff
      padding: .25em 1em
      width: 300px
</style>
