<template>
  <div>
    <p class="title">推荐歌单</p>
    <!-- 推荐歌单 -->
    <van-row gutter="20" type="flex" justify="space-around">
      <van-col span="8" v-for="recommend in reList" :key="recommend.id">
        <vanImage class="re-img" :src="recommend.picUrl"></vanImage>
        <!-- 名字 -->
        <p class="name van-multi-ellipsis--l2">{{recommend.name}}</p>
      </van-col>
    </van-row>
    <!-- 推荐歌单 -->

    <!-- 推荐最新音乐 -->
    <p class="title">最新音乐</p>
    <songItem v-for="newSong in newSongList" :key="newSong.id" :name="newSong.name" :artists="newSong | getNewSongArtistName">
    </songItem>
    <!-- 推荐最新音乐 -->

    <!-- 支撑的空block -->
    <div style="height: 1.5rem;"></div>  </div>
</template>

<script>
import { recommendMusicAPI, newMusicAPI } from "@/api"
import songItem from "@/components/songItem.vue"

export default {
  components:{
    songItem
  },

  data() {
    return {
      reList: [], // 推荐歌单列表
      newSongList: [], // 新歌列表
    }
  },

  async created() {
    // 获取歌单列表
    const resp = await recommendMusicAPI({
      limit: 6
    });
    this.reList = resp.data.result;
    
    // 获取新歌列表
    const newSongs = await newMusicAPI();
    console.log(newSongs);
    this.newSongList = newSongs.data.result;

  },

  filters: {
    /**
     * 过滤器
     * 获取新歌的作者
     * @param {Object} obj 
     */
    getNewSongArtistName(obj) {
      let aritists = obj.song.artists
      return aritists.reduce((s1, s2) => {
        if (s1 == '') {
          return s1 + s2.name;
        } else {
          return s1 + "/" + s2.name;
        }
      }, "")


    }
  }
}
</script>

<style scoped>
.title {
  padding: 0.266rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}

.name {
  font-size: 0.2rem;
  text-overflow: ellipsis;
}

.re-img {
  box-shadow: 2px 2px 4px;
}


</style>