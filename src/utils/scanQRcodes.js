// const { getSetting, openSetting, authorize, confirm, toast } = require('./setting.js')
import  {getSetting, openSetting, authorize, confirm, toast} from './setting.js'

/** 
 * @description 用户扫码
 * 1.判断是否有摄像头权限
 * 2. 未授权 ->  引导设置
 * 3. 用户拒绝 -> 提示功能不可用
 * 4. 授权成功 -> 扫码
 * 
  */


export const scanQRcode = async() => {
  try {
    /* 判断是否有摄像头权限 */
    const scopeName = 'scope.camera'
    const hasCameraPermission = await getSetting(scopeName)
    console.log('hasCameraPermission', hasCameraPermission)
    switch (hasCameraPermission) {
      case undefined:
       await authorize(scopeName)
      case false:
        /* 拒绝授权 */
        if(!await confirm('需要使用摄像头，请前往设置中开启权限。是否前往设置？')){
          throw new Error('已拒绝授权，功能不可用')
        }
        if(!await openSetting(scopeName)){
				throw new Error('未主动授权')
			}
    }
    /* 已授权，打开相机 */
    uni.scanCode({
      success(res) {
        const result = res.result
        const scanType = res.scanType
        toast(`扫描成功：${result}, 类型：${scanType}`)
      },
      fail(err) {
        toast(`扫码失败：${err}`)
      }
    })
  } catch (error) {
    toast(`扫码失败：${error}`)
  }
}