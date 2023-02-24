<template>
  <div id="container">
    <strong>{{ name }}</strong>
    <h2 class="song">A$AP Rocky - D.M.B. (Official Video)</h2>
    <i class="text-emerald-500 fas fa-arrow-up">420%</i>
    <p>Explore <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI
        Components</a></p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: String,
});
</script>

<style scoped>
/* .stat {
  @apply fas fa-arrow-up;
} */

.song {
  @apply text-yellow-300;
}

#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
