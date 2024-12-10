<template>
  <div class="avatar-group">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.avatar-group {
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: baseline;
}

.avatar-group > *:not(:first-child) {
  margin-inline-start: -0.5em;
}
</style>
