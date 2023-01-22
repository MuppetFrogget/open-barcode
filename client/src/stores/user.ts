import { ref, computed } from "vue";
import { defineStore } from "pinia";

// TODO: write interface of regular user
// interface User {
//   username: string;
//   isAdmin: boolean;
// }

export const useUserStore = defineStore("user", () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
