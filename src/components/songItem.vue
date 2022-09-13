<template>
  <div>
    <van-cell :title="name" :label="artists" center>
      <template #right-icon>
        <van-icon name="play-circle-o" size="0.6rem" />
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
    props:{
        name:String,
        artists:String,
    }
}
</script>

<style scoped>
.van-cell {
  border-bottom: 1px solid #eee;
}
</style>