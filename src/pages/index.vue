<script setup>
import { onMounted } from 'vue';
import {
  currentTheme, initTheme, switchTheme
} from '@/composables/theme.js';
</script>

<template>
  <header class="absolute inset-x-0 top-0">
    <div class="container flex justify-end p-5 mx-auto">
      <button
        class="overflow-hidden p-2"
        @click="switchTheme()"
      >
        <transition
          enter-active-class="transition duration-200 ease-out"
          leave-active-class="transition duration-200 ease-in"
          :enter-from-class="currentTheme === 'dark' ? 'transform -translate-y-full scale-50 opacity-0' : 'transform translate-y-full scale-50 opacity-0'"
          enter-to-class="transform translate-y-0"
          leave-from-class="transform translate-y-0"
          :leave-to-class="currentTheme === 'dark' ? 'transform translate-y-full scale-50 opacity-0' : 'transform -translate-y-full scale-50 opacity-0'"
          mode="out-in"
        >
          <svg
            v-if="currentTheme === 'dark'"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </transition>
      </button>
    </div>
  </header>

  <main class="flex flex-col justify-center items-center py-24 px-4 mx-auto max-w-screen-xl h-screen max-w-24xl">
    <h1 class="pb-20 font-mono text-center textstyle text-gray-500 dark:text-gray-100 transition-colors rounded-md drop-shadow-2xl text-1xl ">
      Знаешь ли ты правду о конфликте России и Украины, которую не покажут по ТВ? А по ТВ показывают не всё.

      Я так и знал, что ты не поверишь. Поэтому давай поспорим. Если поймаешь меня на лжи — я заплачу тебе <b>50 000 руб.</b> Я
      серьёзно.

      Я — самый масштабный бот за всю историю. Общаться со мной интересно, надо всего лишь жать на кнопки. Начнём?

    </h1>

    <div class="flex justify-center pb-5 space-x-5">
      <a
        target="_blank"
        rel="noopener"
        v-bind:href="'https://t.me/Russia_Ukraine_Bot?start='+click_id+'&event'+eventNum+'=1'"
        @click="eventNum=10; sendEvent()"

        class="inline-flex items-center p-1 space-x-1 dark:text-indigo-50 hover:bg-gray-800 dark:bg-gray-500 dark:hover:bg-gray-800 hover:bg-gray-300 rounded-md shadow-xl hover:shadow-md transition duration-300 myfont"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-brand-telegram"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
        </svg>
        <span>Открыть в Telegram</span>
      </a>

      <button
        target="_blank"
        rel="noopener"
        @click="showModalV=true;  eventNum=9; sendEvent(); "
        class="inline-flex items-center p-1 space-x-1 dark:text-indigo-50 hover:bg-gray-800 dark:bg-gray-500 dark:hover:bg-gray-800 hover:bg-gray-300 rounded-md shadow-xl hover:shadow-md transition duration-300 myfont"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path
            d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
          />
        </svg>
        <span>Открыть в WhatsApp</span>
      </button>
      <button
        target="_blank"
        rel="noopener"
        @click="eventNum=8;showModalW=true; sendEvent()"

        class="inline-flex items-center p-1 space-x-1 dark:text-indigo-50 hover:bg-gray-800 dark:bg-gray-500 dark:hover:bg-gray-800 hover:bg-gray-300 rounded-md shadow-xl hover:shadow-md transition duration-300 myfont"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          fill="currentColor"
          class="bi bi-telegram"
          viewBox="0 0 512 512"
        >
          <!--! Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"
          />
        </svg>
        <span>Открыть в Viber</span>
      </button>
    </div>
      <SavedModalW v-show="showModalV" @close-modal="showModalV = false"/>
      <SavedModalV v-show="showModalW" @close-modal="showModalW = false"/>
  </main>
</template>
<script>

import ViberModal from '@/components/ModalViber.vue';
import WatsUpModal from '@/components/ModalWatsup.vue';
import axios from "axios";


onMounted(() => {
  initTheme();
});



export default {

  components: { SavedModalV: ViberModal, SavedModalW: WatsUpModal },
  data() {
    return {
      eventNum: " ",
      showModalV: false,
      showModalW: false,
      click_id: " ",
    };
  },
  mounted() {
    let click_id;
    click_id = this.$route.query.start;
    // if(click_id !== null) {
    //   this.click_id = click_id;
    // }
  },
  methods: {
    sendEvent()
    {
      axios
        .get('https://pravdabot.com/cx79l1k.php?clickid='+this.$route.query.start+'&event'+this.eventNum+'=1' )
        .then(response => (this.info = response));
    }
  },
};

</script>
<style>
/* stylelint-disable */

.myfont {
  font-weight: 500;
  font-max-size: 2px;
  font-size: x-small;
}





body:after {
  background-image: url('./src/assets/img/images.jfif');
  background-size: auto;
  background-position: bottom;
}

body {
  @apply dark:bg-gray-500 dark:text-gray-200;
  /*@apply light:bg-gray-200 light:text-gray-200;*/
}
</style>
