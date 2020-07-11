<template>
  <div class="grid">
      <card-item v-for='{id, img, price, size, height, width} in items' :key="id"
      :img="img"
      :price="price"
      :size="size"
      :height="height"
      :width="width"
      />
  </div>
</template>

<script>
import CardItem from'@/components/common/CardItem.vue';
export default {
    props: ['items'],
    components: {
        CardItem
    }
}
</script>

<style scoped lang="scss">
    .grid {
        display:grid;
        grid-template-columns: repeat(5, 1fr);
        grid-auto-rows: 240px;
        gap: 1rem;
    }
</style>