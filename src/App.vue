<script setup>
import MainHeader from '@/layout/header/MainHeader.vue'
import { onMounted, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const token = ref('')

function init() {
  token.value = localStorage.getItem('token')
}

onMounted(() => {
  init()
})

function changeToken(value) {
  localStorage.setItem('token', value)
  token.value = value
}

watchEffect(() => {
  document.title = route.meta.title || 'Default Title'
  const description = route.meta.description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', description || 'Default description')
  }
})
</script>

<template>
  <MainHeader :token="token" @changeToken="changeToken" />
  <RouterView />
</template>

<style lang="sass" scoped></style>
