<template>
    <div>
        <div class="title"></div>
        <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer1"
            :playsinline="true"
            :options="playerOptions1"
        ></video-player>
        <div class="title"></div>
        <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer2"
            :playsinline="true"
            :options="playerOptions2"
        ></video-player>
        <div class="title"></div>
        <video-player  class="video-player vjs-custom-skin"
            ref="videoPlayer2"
            :playsinline="true"
            :options="playerOptions3"
        ></video-player>
    </div>
</template>
<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-contrib-hls'
export default {
  methods: {
    getdata () {
      this.$axios.get('/api/app_video_url/')
        .then((res) => {
          this.url = res.data
          console.log(this.url[0])
          console.log(this.url[1])
          console.log(this.url[2])
        })
    }
  },
  created () {
    this.getdata()
  },
  mounted () {
    console.log('this is current player instance object', this.player)
  },
  // computed: {
  //   player () {
  //     return this.$refs.videoPlayer.player
  //   }
  // },
  data () {
    return {
      url: [],
      playerOptions1: {
        // 播放速度
        // playbackRates: [1.0],
        // 如果true,浏览器准备好时开始回放。
        autoplay: false,
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: 'http://hls01open.ys7.com/openlive/d9503c4d814b47e68da0b684f8c7b7ce.m3u8?autoplay=1&audio=1&accessToken=at.5ll5ge6r5iwmj3s63xhhwvoa6ald68bq-2o9saekhwa-1jb958w-4mv9fsp8m', // 路径
          type: 'application/x-mpegURL' // 类型
        }],
        poster: '', // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
      playerOptions2: {
        // 播放速度
        // playbackRates: [1.0],
        // 如果true,浏览器准备好时开始回放。
        autoplay: false,
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: 'http://hls01open.ys7.com/openlive/1067b12ea0cb4a1481f9c68980d44c39.m3u8?autoplay=1&audio=1&accessToken=at.5ll5ge6r5iwmj3s63xhhwvoa6ald68bq-2o9saekhwa-1jb958w-4mv9fsp8m', // 路径
          type: 'application/x-mpegURL' // 类型
        }],
        poster: '', // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
      playerOptions3: {
        // 播放速度
        // playbackRates: [1.0],
        // 如果true,浏览器准备好时开始回放。
        autoplay: false,
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: 'http://hls01open.ys7.com/openlive/828112a8f4624bca9a4ff4c90e39bb64.m3u8?autoplay=1&audio=1&accessToken=at.5ll5ge6r5iwmj3s63xhhwvoa6ald68bq-2o9saekhwa-1jb958w-4mv9fsp8m', // 路径
          type: 'application/x-mpegURL' // 类型
        }],
        poster: '', // 你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    }
  }
}
</script>
<style scoped>
  .title{
    margin: 20px 15px 10px;
    color: #6d6d72;
    font-size: 15px;
}
</style>
