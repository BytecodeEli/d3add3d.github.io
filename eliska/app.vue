<template>
  <div>
	<!-- <NuxtWelcome /> -->
    <main class="main-grid">
      <div class="main-grid-cell gradient-border" @pointerover="spotlight = true; spotlightText = 'O mne'" @pointerout="spotlight = false">Bla bla bla, niečo o mne, haha</div>
      <div class="main-grid-cell gradient-border" @pointerover="spotlight = true; spotlightText = 'Projekty'" @pointerout="spotlight = false">Moje projekty</div>
    </main>
    <div class="spotlight-container" v-bind:class="{ active: spotlight }">
      <div class="spotlight-text" v-bind:class="{ active: spotlight }">{{ spotlightText }}</div>
      <div class="spotlight" v-bind:class="{ active: spotlight }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      spotlight: false,
      spotlightText: "Foo"
    }
  }
}
</script>