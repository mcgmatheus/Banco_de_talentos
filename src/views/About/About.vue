<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="pageContainer">
    <NavigationBar></NavigationBar>
    <div class="pageContent">
      <h1>Nosso trabalho</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur, blanditiis sed
        exercitationem ex fugit magnam quia placeat quis, delectus facere recusandae tenetur. Ullam
        deleniti dolorum accusantium dicta explicabo, ea totam!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, cumque dolorum laboriosam
        repudiandae harum quam dolorem distinctio? Quia accusamus reprehenderit expedita explicabo,
        obcaecati ratione tempore aliquam? Placeat similique laboriosam doloribus!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quisquam, dolorum
        molestiae excepturi obcaecati qui, accusantium accusamus voluptatem fuga necessitatibus
        praesentium culpa corporis, rem totam possimus natus explicabo ab reiciendis!
      </p>
      <img
        src="https://images.unsplash.com/photo-1602407294553-6ac9170b3ed0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
        alt="Image of a notebook and a curriculum"
      />
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
img {
  height: 300px;
  padding-top: 25px;
  padding-bottom: 50px;
}
</style>
