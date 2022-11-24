<script setup lang='ts'>
const route = useRoute()
</script>

<template>
  <div>
    Blog {{ route.params.id }}
  </div>
</template>

<style lang="scss" scoped>

</style>