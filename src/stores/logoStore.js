import { defineStore } from 'pinia';

export const useLogoStore = defineStore('logo', {
  state: () => ({
    isVisible: false,
  }),
  actions: {
    setVisibility(visible) {
      this.isVisible = visible;
    },
  },
});
