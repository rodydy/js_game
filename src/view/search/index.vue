<template>
  <div>
    <van-search v-model="userKeyWords" placeholder="请输入搜索关键词" @search="searchFun" @clear="keyWordsResetFun" />

    <!-- 热词铺设 -->
    <div class="hot-key" v-show="hotKeyState">
      <span v-for="(hotkey, index) in hotKeyList" :key="index" @click="toSearchFrameFun(hotkey.first)">
        {{ hotkey.first }}
      </span>
    </div>
    <!-- 热词铺设 -->

    <!-- 搜索结果 -->
    <div class="keyWordsResult" v-show="!hotKeyState">
      <songItem :name="item.name" :artists="item |getNewSongArtistName " v-for="item in keyWordsResult" :key="item.id">
      </songItem>
    </div>
    <!-- 搜索结果 -->

    <!-- 底部 -->
    <div style="height:1.5rem;"></div>
  </div>
</template>

<script>
import songItem from "@/components/songItem.vue"
import { searchAPI, hotAPI } from "@/api"

export default {
  components: {
    songItem
  },

  async created() {
    let hot = await hotAPI();
    this.hotKeyList = hot.data.result.hots;
  },

  data() {
    return {
      userKeyWords: '', // 用户输入的关建字
      hotKeyList: [], //热词
      keyWordsResult: [], // 搜索结果
      hotKeyState: true, // true 页面的状态是热词, false 页面的状态是搜索过后展示结果
      page: 1, // 页面
      getting: false, // 是否在拿数据,防抖作用,看作互斥对象
    }
  },

  computed: {
    /**
     * 页偏移量
     */
    offset() {
      return (this.page - 1) * 30;
    }
  },

  methods: {
    toSearchFrameFun(val) {
      this.userKeyWords = val;
    },

    keyWordsResetFun() {
      console.log("取消");
      this.hotKeyState = true;
    },

    async searchFun() {
      if (this.userKeyWords.length > 0) {
        // 获得数据
        let response = await searchAPI(this.userKeyWords, this.offset);
        this.keyWordsResult = response.data.result.songs;
        this.hotKeyState = false;
      }
    }

  },

  filters: {
    /**
     * 过滤器
     * 获取新歌的作者
     * @param {Object} obj 
     */
    getNewSongArtistName(obj) {
      let aritists = obj.artists
      return aritists.reduce((s1, s2) => {
        if (s1 == '') {
          return s1 + s2.name;
        } else {
          return s1 + "/" + s2.name;
        }
      }, "")


    }
  },

  watch: {
    /**
     * 监听改变搜索值，1000ms后自动发出请求
     * @param {String} oldVal 
     * @param {String} newVal 
     */
    userKeyWords(oldVal, newVal) {
      if (!this.getting) {
        setTimeout(() => {
          this.searchFun();
        }, 1000);
      }


    }
  }
}
</script>

<style scoped>
.hot-key span {
  font-size: 20px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  background-color: #ccc;
  padding: 0 20px;
  margin: 5px 8px;
  border-radius: 10px;
  display: inline-block;
}
</style>