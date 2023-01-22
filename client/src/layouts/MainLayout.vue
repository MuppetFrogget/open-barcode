<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import { appName } from "@/assets/mockData.json";

const tab = ref("tab1");
const drawer = ref(false);
const miniState = ref(true);

const loggedIn = ref(false);

function toggleDrawer() {
  drawer.value = !drawer.value;
}

function logIn() {
  loggedIn.value = !loggedIn.value;
  drawer.value = !drawer.value;
}
</script>

<template>
  <q-layout view="lHh lpR lff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat
          color="primary"
          text-color="white"
          size="lg"
          icon="img:https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          to="/"
        >
          <q-toolbar-title>
            {{ appName }}
          </q-toolbar-title>
        </q-btn>

        <q-space />

        <q-btn class="lt-lg" dense flat round icon="menu" @click="toggleDrawer" />

        <q-tabs v-model="tab" class="gt-md" shrink>
          <q-route-tab name="tab1" label="Guide" to="/guide" />
          <q-route-tab name="tab2" label="About us" to="/about" />
          <q-tab name="tab3" label="Tab 3" />
        </q-tabs>

        <q-space class="gt-md" />

        <q-btn v-if="!loggedIn" class="gt-md" flat color="white" label="Sign in" @click="logIn" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      class="bg-grey-3"
      :width="200"
      :breakpoint="1400"
      :mini="miniState"
      mini-to-overlay
      bordered
      @mouseover="miniState = false"
      @mouseout="miniState = true"
    >
      <q-scroll-area class="fit">
        <!-- TODO: optimize it to work properly when drawer is open -->
        <!-- <q-img class="gt-md" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img> -->

        <div>
          <q-avatar size="40px" class="gt-md q-ma-sm">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>

          <q-separator />
        </div>

        <q-list class="gt-lg" padding>
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> Inbox </q-item-section>
          </q-item>

          <q-item v-ripple active clickable>
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Star </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section> Send </q-item-section>
          </q-item>

          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section> Drafts </q-item-section>
          </q-item>
        </q-list>

        <q-list class="lt-lg" padding>
          <q-item v-ripple clickable to="/">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item v-ripple clickable to="/about">
            <q-item-section avatar>
              <q-icon name="book" />
            </q-item-section>

            <q-item-section> About us </q-item-section>
          </q-item>
        </q-list>

        <q-list class="fixed-bottom" padding>
          <div v-if="loggedIn">
            <q-item v-ripple class="lt-lg" clickable to="/profile">
              <q-item-section avatar>
                <q-avatar size="sm" color="primary" text-color="white"> J </q-avatar>
              </q-item-section>

              <q-item-section> Sign as J </q-item-section>
            </q-item>

            <q-item v-ripple clickable to="/settings">
              <q-item-section avatar>
                <q-icon name="settings" />
              </q-item-section>

              <q-item-section> Settings </q-item-section>
            </q-item>

            <q-item v-ripple clickable @click="(loggedIn = false), (drawer = false)">
              <q-item-section avatar>
                <q-icon name="login" />
              </q-item-section>

              <q-item-section> Exit </q-item-section>
            </q-item>
          </div>

          <q-item v-else v-ripple clickable @click="loggedIn = true">
            <q-item-section avatar>
              <q-icon name="user" />
            </q-item-section>

            <q-item-section> Sign in </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <RouterView />

      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
        <q-btn icon="keyboard_arrow_up" color="primary" />
      </q-page-scroller>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>{{ appName }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
