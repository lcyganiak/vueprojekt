<template>
  <ul class="nav nav-pills">
    <router-link to="/" tag="li" activeClass="active" exact>
      <a class="nav-link">
        <i class="fas fa-home"></i>
        Home
      </a>
    </router-link>
    <router-link to="/books" tag="li" active-class="active" class="nav-item">
      <a class="nav-link">
        <i class="fas fa-book"></i>
        Books
      </a>
    </router-link>
    <router-link to="/addbook" activeClass="active" tag="li" class="nav-item">
      <a class="nav-link">
        <i class="fas fa-plus"></i>
        Add Book
      </a>
    </router-link>
  </ul>
</template>

<script>
export default {};
</script>
<style  scoped>
</style>
