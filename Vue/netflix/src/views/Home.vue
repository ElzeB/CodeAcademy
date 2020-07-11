<template>
  <div class="container">
    <home-hero />
    <home-items :items="items"/>
  </div>
</template>

<script>
import HomeHero from '@/components/home/HomeHero.vue'
import HomeItems from '@/components/home/HomeItems.vue'

export default {
  name: 'Home',
  components: {
    HomeHero,
    HomeItems
  },
  data(){
    return {
      items: [
        {
          id: 'asd',
          img: require('@/assets/img/item1.jpeg'),
          price:22.00,
          size: 'xl',
          height: 22,
          width: 40,
          brand: 'Zara'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>