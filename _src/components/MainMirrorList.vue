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
  return genMainMirrorList(rawMirrorList.value, HelpPages);
});
const filter = ref("");
const query = computed(() => filter.value.trim().toLowerCase());
const directories = Object.entries(software_mirrors);
const folders = directories
  .filter(([, folder]) => !folder.parent && folder.entries.length)
  .map(([path, folder]) => ({
    name: path,
    url: `/${path}/`,
    keywords: [
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
  }));
const filteredFolders = computed(() =>
  folders.filter((folder) => folder.keywords.includes(query.value)),
);

const filteredMirrorList = computed(() =>
  mirrorList.value.filter(
    (mirror) =>
      mirror.is_master && mirror.name.toLowerCase().includes(query.value),
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
