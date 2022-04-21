<script setup lang="ts">
import { Button } from "@/components";
import { useCssModule } from "vue";

useCssModule();
</script>

<template>
  <main>
    <Button variant="primary">Primary</Button>
    <Button :class="$style.custom">Default</Button>
  </main>
</template>

<style scoped module>
.custom {
  width: 100%;
}
</style>
