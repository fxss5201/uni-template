<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		uni.onNetworkStatusChange(({isConnected}) => {
      if (isConnected) {
        uni.hideToast()
      } else {
        uni.hideToast()
        uni.showToast({
          title: '您已断网',
          icon: 'none',
          mask: true,
          duration: 6000000
        })
      }
    })
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
