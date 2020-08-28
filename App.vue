<script>
import config from './config/index'
import theme from './config/theme'
export default {
	onLaunch: function() {
    // 在此处判断本地token是否存在，决定是否跳转到登录页面
    // 需要注意的是首页加载就调用的一些接口需要加上token判断，有的时候才发送请求
    // if (!uni.getStorageSync(config.token)) {
    //   uni.redirectTo({
    //     url: ''
    //   })
    // }
    
    // 网络监控
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

    // 更新版本提示
    if (uni.canIUse('getUpdateManager')) {
      const updateManager = uni.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            uni.showModal({
              title: '更新提示',
              content: '新版本已经准备好，请重启应用',
              showCancel: false,
              confirmColor: theme.showModalConfirmColor,
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            uni.showModal({
              title: '已经有新版本了哟~',
              content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
              showCancel: false,
              confirmColor: theme.showModalConfirmColor
            })
          })
        }
      })
    } else {
      uni.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试',
        showCancel: false,
        confirmColor: theme.showModalConfirmColor
      })
    }
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
