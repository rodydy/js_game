<template>
  <div>
    <van-nav-bar :title="title" left-text="返回" right-text="按钮" left-arrow @click-left="onClickLeft"
      @click-right="onClickRight" />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar v-model="active">
      <van-tabbar-item name="home" replace to="/layout/home" icon="home-o" badge="5">Home</van-tabbar-item>
      <van-tabbar-item name="search" replace to="/layout/search" icon="search">Search</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 'home',
      title: this.$route.meta.title,
    };
  },
  watch:{
    $route(){
      this.title = this.$route.meta.title;
    }
  },
  methods: {
    onClickLeft() {
    },
    onClickRight() {
    },
  },
}
</script>

<style>

</style>