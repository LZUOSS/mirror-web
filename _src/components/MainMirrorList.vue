<script setup>
import { ref, computed } from "vue";
import {
  options as globalOptions,
  software_mirrors,
} from "virtual:jekyll-data";
import HelpPages from "virtual:tuna-help-pages";
import BootStrapPopover from "bootstrap/js/dist/popover";
import SearchBox from "./SearchBox.vue";
import UpdateField from "./UpdateField.vue";
import { useMirrorList } from "../lib/mirrorList";
import processingHandlers from "../lib/mirrorListDataProcessing";

const { unlistedMirrors: unlisted, genMainMirrorList } =
  processingHandlers(globalOptions);

const rawMirrorList = useMirrorList(unlisted);

const mirrorList = computed(() => {
  return genMainMirrorList(rawMirrorList.value, HelpPages, software_mirrors);
});
const filter = ref("");
const query = computed(() => filter.value.trim().toLowerCase());
const directories = Object.entries(software_mirrors);
const directoryKeywords = new Map(
  directories
    .filter(([, folder]) => !folder.parent)
    .map(([path, folder]) => [
      path,
      [
        path,
        folder.title,
        ...directories
          .filter(([key]) => key === path || key.startsWith(`${path}/`))
          .flatMap(([, directory]) =>
            directory.entries.map((entry) => entry.name),
          ),
      ]
        .join(" ")
        .toLowerCase(),
    ]),
);

const filteredMirrorList = computed(() =>
  mirrorList.value.filter(
    (mirror) =>
      mirror.is_master &&
      (
        directoryKeywords.get(mirror.name) ?? mirror.name.toLowerCase()
      ).includes(query.value),
  ),
);

const vWithPopover = {
  mounted: (el) => {
    BootStrapPopover.getOrCreateInstance(el);
  },
  beforeUnmount: (el) => {
    BootStrapPopover.getInstance(el)?.dispose();
  },
};
</script>
<template lang="liquid">
  {% include main-mirror-list.html %}
</template>

<style lang="scss" scoped>
@use "../styles/3-wave.scss" as wave;
@use "../styles/sync-status.scss";
@use "../styles/badge-new.scss";

a.mirror-item-label::after {
  content: " ";
}

tbody {
  td {
    padding: 4px 8px;
    border-style: none;
  }
  font-size: 12pt;
}
#mirror-title {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
