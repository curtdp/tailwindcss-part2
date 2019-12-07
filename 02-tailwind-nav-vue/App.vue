<template>
  <div id="app" class="bg-indigo-300 md:flex md:justify-between md:items-center">
    <div class="px-4 py-2 w-full md:w-auto flex justify-between items-center text-white">
      <div><img class="h-10" src="./assets/logo.svg" alt=""></div>
      <button @click="isOpen = !isOpen" class="focus:outline-none focus:shadow-outline md:hidden">
        <svg class="w-6 h-6 fill-current text-white" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <polygon v-if="isOpen" id="Combined-Shape" points="10 8.58578644 2.92893219 1.51471863 1.51471863 2.92893219 8.58578644 10 1.51471863 17.0710678 2.92893219 18.4852814 10 11.4142136 17.0710678 18.4852814 18.4852814 17.0710678 11.4142136 10 18.4852814 2.92893219 17.0710678 1.51471863 10 8.58578644"></polygon>
          <path v-else d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z" id="Combined-Shape"></path>
        </svg>
      </button>
    </div>
    <nav :class="{ 'hidden': !isOpen }" class="px-2 pb-2 md:block">
      <ul class="md:flex">
        <li class="hover:bg-indigo-400 rounded text-white px-2 py-1 mt-1">
          <a class="block" href="#">Продукты</a>
        </li>
        <li class="hover:bg-indigo-400 rounded text-white px-2 py-1 mt-1">
          <a class="block" href="#">Новости</a>
        </li>
        <li class="hover:bg-indigo-400 rounded text-white px-2 py-1 mt-1">
          <a class="block" href="#">Контакты</a>
        </li>
        <li class="hover:bg-indigo-400 rounded text-white px-2 py-1 mt-1">
          <a class="block" href="#">О компании</a>
        </li>
        <li class="hover:bg-indigo-400 rounded text-white px-2 py-1 mt-1">
          <a class="block" href="#">Корзина</a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style src="./assets/tailwind.css">
