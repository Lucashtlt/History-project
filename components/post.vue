<template>
  <div class="post-container">
      <h2>{{title}}</h2>
      <p>{{description}}</p>
  </div>
</template>

<script>
export default {
    props:['title', 'description'],
    
}
</script>

<style scoped>
.post-container {
    width: 100%;
    background-color: white;
    margin: 50px;
    padding: 20px;
}
</style>