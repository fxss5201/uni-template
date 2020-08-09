// 针对js中使用的色值，如果色值与uni.scss中的色值一致的话，请保证命名变量一致（在uni.scss中的变量名多$，采用中划线将字符串连接，此文件采用驼峰命名）
/**
 * 例如
 * uni.showModal({
 *   title: '提示的标题',
 *   content: '提示的内容',
 *   confirmColor: theme.uniColorPrimary,
 *   success: function (res) {
 *     if (res.confirm) {
 *       console.log('用户点击确定')
 *     } else if (res.cancel) {
 *       console.log('用户点击取消')
 *     }
 *   }
 * })
 */
const uniColorPrimary = '#007aff'

export default {
  uniColorPrimary
}
