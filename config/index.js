export default {
  loginExpiredCode: '', // 用户信息过期的code
  token: 'token', // 如果使用到用户信息，需要存储token时，设置此token值，表示token的key
  publicPath: process.env.NODE_ENV === 'development' ? '' : '' // 配置请求的域名
}