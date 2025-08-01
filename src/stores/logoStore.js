import { defineStore } from 'pinia';

export const useLogoStore = defineStore('logo', {
  state: () => ({
    isVisible: false,
    isWhownOnce: true
  }),
  actions: {
    setVisibility(visible) {
      this.isVisible = visible;
    },
    setVisibilityOnce(visible){
      this.isWhownOnce = visible;
    }
  },
});
