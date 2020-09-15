import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'Night Mode On/Off'
  }
});

export default app;