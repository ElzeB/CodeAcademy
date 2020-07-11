<template>
  <div class="hero">
    <div class="hero__content">
      <div class="hero__content__header">Atėjo metas atlaisvinti vietos spintoje?</div>
      <router-link class="btn btn-primary" to="/about">About</router-link>
    </div>
    <div class="hero__bg">
      <img src="~@/assets/img/hero.jpeg" alt />
      <div class="hero__bg__overlay"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero {
  display: flex;
  justify-content: space-between;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__header{
      font-size: 3rem;
    }
    .btn{
      align-self: start;
      margin-top: 2rem;
    }
  }
  &__bg {
    height: 600px;
    width: 120%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &__overlay {
      position: absolute;
      top: 0;
      height: 100%;
      width: 20%;
      clip-path: polygon(0 0, 100% 0, 0 100%, 0% 100%);
      background-image: linear-gradient(
        to right bottom,
        $white,
        rgba($white, 0)
      );
    }
  }
}
</style>