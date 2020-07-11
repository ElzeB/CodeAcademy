<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Netflix</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbar">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link">
              <router-link class="nav-link__link" to="/">Home</router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link class="nav-link__link" to="/about"
                >About</router-link
              >
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link class="nav-link__link" to="/todo-list"
                >Todo List</router-link
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<style lang="scss" scoped>
.nav-link__link {
  color: grey;
  &:hover {
    text-decoration: none;
    color: lighten($primary, 15%);
  }
  &.router-link-exact-active {
    color: $primary;
  }
}
</style>
