<template>
  <div class="card">
      <img :src="img" alt="" @click="$router.push({path: 'item', params: id})">
      <div>
          <div class="price">{{price}}</div>
          <div class="text-muted">{{size}}/{{width}}/{{height}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props: ['id', 'price', 'size', 'height', 'width', '']
}
</script>

<style scoped lang="scss">
.card{
    display: grid;
    width: 100%;
    grid-template-rows: 7fr 2fr;
}

</style>