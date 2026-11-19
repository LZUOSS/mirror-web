<script setup>
import { useMirrorList } from "../lib/mirrorList";
import { computed } from "vue";

const rawMirrorList = useMirrorList();
const path = location.pathname.toLowerCase().replace(/\/?$/, "/");

const nowBrowsingMirror = computed(() => {
  let bestMatch = null;
  let matchedLength = 0;
  for (const mirror of rawMirrorList.value) {
    const url = mirror.url?.startsWith("/") ? mirror.url : `/${mirror.name}/`;
    const prefix = url.toLowerCase().replace(/\/?$/, "/");
    if (
      prefix !== "/" &&
      prefix.length > matchedLength &&
      path.startsWith(prefix)
    ) {
      bestMatch = mirror;
      matchedLength = prefix.length;
    }
  }
  return bestMatch;
});
</script>

<template>
  <template v-if="nowBrowsingMirror">
    <strong>Last Update:&nbsp;</strong>
    <UpdateField :mir="nowBrowsingMirror"></UpdateField>
  </template>
</template>
