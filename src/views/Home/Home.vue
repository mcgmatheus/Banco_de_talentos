<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pageContainer">
    <NavigationBar></NavigationBar>
    <div class="pageContent">
      <h1>Banco de Talentos</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, blanditiis sed
        exercitationem ex fugit magnam quia placeat quis, delectus facere recusandae tenetur. Ullam
        deleniti dolorum accusantium dicta explicabo, ea totam!
      </p>
    </div>
  </div>
</template>

<script>
import NavigationBar from '../../components/NavigationBar.vue'

export default {
  components: {
    NavigationBar
  }
}
</script>

<style scoped>
.pageContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.pageContainer > div {
  width: 80%;
  display: flex;
  justify-content: center;
}
.pageContent {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
