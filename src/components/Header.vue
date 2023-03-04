<script setup>

</script>

<template>
  <nav class="global-nav">
    <div class="global-nav-links">
      <a href="#" class="global-nav-item">Rooms</a>
      <a href="#" class="global-nav-item">Ideas</a>
      <a href="#" class="global-nav-item">Stores</a>
      <a href="#" class="global-nav-item">Contact</a>
    </div>
  </nav>
  <nav class="local-nav">
    <div class="local-nav-links">
      <a href="" class="product-name">AirUpbox Pro</a>
      <a href="">개요</a>
      <a href="">제품사양</a>
      <a href="">구입하기</a>
    </div>
  </nav>
</template>

<style scoped lang="scss">
/**
  상하단 공통 스타일
 */
.global-nav-links,
.local-nav-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
}

.global-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  padding: 0 1rem;
  z-index: 10;
}
/**
  하단 스타일
 */
.local-nav {
  position: absolute;
  top: 45px;
  left: 0;
  width: 100%;
  height: 52px;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd;
  z-index: 11;

  .local-nav-links {
    a {
      margin-left: 2em;
      font-size: .8rem;
      &.product-name {
        margin-left: 0;
        margin-right: auto;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
}
</style>