import { ref } from 'vue';
import axios from "axios";
import {info} from "autoprefixer";

export const currentTheme = ref('light');

export const initTheme = () => {
  currentTheme.value = 'dark';
  if (currentTheme.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('theme', currentTheme.value);
};

export function switchTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  if (currentTheme.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  document.documentElement.setAttribute('data-theme', currentTheme.value);
  localStorage.setItem('theme', currentTheme.value);
}

export function sendPostBack() {
  axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => (this.info = response))
}

