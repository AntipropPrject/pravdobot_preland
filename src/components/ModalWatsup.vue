/* eslint-disable */
<script setup>
import { onMounted } from 'vue';
import {
  currentTheme, initTheme, switchTheme,
} from '@/composables/theme.js';
</script>
<template>
  <transition name="fade">
    <div class="modal-overlay " @click="$emit('close-modal')">
      <div class="modal shadow-xl" @click="$emit('close-modal')">
        <p class="pb-20 font-mono text-center padstyle dark:text-gray-100 transition-colors text-1xl">К сожалению, версия для WhatsApp в процессе разработки. Пообщайтесь со мной через Телеграм! Если он у вас не установлен — самое время это сделать, давно пора было! ;)</p>
        <button target="_blank"
                rel="noopener"
                href=" https://t.me/Russia_Ukraine_Bot?start=[ID_КЛИКА]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" zoomAndPan="magnify" viewBox="0 0 30 30.000001" height="40" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="id1"><path d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#id1)"><path fill="rgb(13.729858%, 12.159729%, 12.548828%)" d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 " fill-opacity="1" fill-rule="nonzero"/></g></svg>
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* stylelint-disable */
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s, transform .3s;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-10%) translateX(0vw)

}


.modal {
  text-align: center;
  background-color: white;
  height: 400px;
  width: 500px;
  margin-top: 8%;
  padding: 60px 60px;
  border-radius: 20px;
  justify-content: center;

  @apply dark:bg-gray-500 dark:text-gray-200;
}
.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h6 {
  font-weight: 500;
  font-size: 28px;
  margin: 20px 0;
}
.padstyle {
  margin-bottom: -10%;
}

p {
  font-size: 16px;
  margin: 20px 0;
}

/*button {*/
/*  background-color: #ac003e;*/
/*  width: 150px;*/
/*  height: 40px;*/
/*  color: white;*/
/*  font-size: 14px;*/
/*  border-radius: 16px;*/
/*  margin-top: 50px;*/
/*}*/
</style>

<script>
export default {
};
</script>
