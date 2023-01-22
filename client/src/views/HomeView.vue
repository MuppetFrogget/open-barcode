<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";

const counter = useCounterStore();

const { count, doubleCount } = storeToRefs(counter);
// the increment action can just be extracted
const { increment } = counter;
</script>

<template>
  <q-page padding>
    Hello, World!
    <div class="text-h1">Hello</div>

    <div class="flex">
      <q-btn outline color="primary" label="increment" @click="increment" />

      <div class="text-h2 q-mx-sm">
        {{ count }}
      </div>

      <q-separator vertical />

      <div class="text-h2 q-mx-sm">
        {{ doubleCount }}
      </div>
    </div>
  </q-page>
</template>
