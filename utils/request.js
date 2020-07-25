// uni.request 和 uni.uploadFile 方法封装
import store from '../store'
import config from '../config'

export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: `${config.publicPath}${options.url}`, // 统一配置域名信息
      method: options.method,
      header: options.header || {
        'content-type': 'application/json',
        'token': store.state.token
      },
      data: options.data || {},
      success(res) {
        /**
         * https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showToast.html
         * uni.showLoading 和 uni.showToast 同时只能显示一个
         * 我们一般会在发起请求的时候 uni.showLoading ，此处需要先 uni.hideLoading() ，才方便后面的提示信息
         */ 
        uni.hideLoading()
        if (res.statusCode === 200) {
          // code 看公司及个人定义
          if (res.data.code === 0) {
            resolve(res.data)
          } else {
            // 返回的信息需要报错错误的msg，进行uni.showToast
            uni.showToast({
              title: res.data.msg,
              icon: 'none'
            })
            // 此处再根据code统一做一些相关处理，比如登录过期等操作
            if(res.data.code === 402003) {
              // 删除本地Storage的token
              uni.removeStorageSync(config.token)
              // uni.showToast 默认显示 1500ms ，之后跳转到登录页面
              setTimeout(() => {
                uni.reLaunch({
                  url: 'pages/login/index'
                })
              }, 1500)
            }
            reject(res.data)
          }
        } else {
          // statusCode 不为 200 的时候先报网络出错加 statusCode
          uni.showToast({
            title: `网络出错: ${res.statusCode}`,
            icon: 'none'
          })
        }
      },
      fail(err) {
        uni.hideLoading()
        uni.showToast({
          title: '网络出错',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}

export function upload(options) {
  return new Promise((resolve, reject) => {
    uni.uploadFile({
      url: `${config.publicPath}${options.url}`,
      filePath: options.filePath,
      name: options.name,
      formData: options.formData || {},
      header: {
        'content-type': 'multipart/form-data',
        'token': store.state.token
      },
      success(result) {
        uni.hideLoading()
        if (result.statusCode === 200) {
          /**
           * https://uniapp.dcloud.io/api/request/network-file
           * data	String	开发者服务器返回的数据
           */
          const res = JSON.parse(result.data)
          if (res.code === 0) {
            resolve(res)
          } else {
            uni.showToast({
              title: res.msg,
              icon: 'none'
            })
            if(res.code === 402003) {
              uni.removeStorageSync(config.token)
              setTimeout(() => {
                uni.reLaunch({
                  url: 'pages/login/index'
                })
              }, 1500)
            }
            reject(res)
          }
        } else {
          uni.showToast({
            title: `网络出错: ${result.statusCode}`,
            icon: 'none'
          })
        }
      },
      fail(err) {
        uni.hideLoading()
        uni.showToast({
          title: '网络出错',
          icon: 'none'
        })
        reject(err)
      }
    })
  })
}