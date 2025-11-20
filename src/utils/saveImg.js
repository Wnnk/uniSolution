

// const { getSetting, openSetting, authorize, confirm, toast } = require('./setting.js')
import  {getSetting, openSetting, authorize, confirm, toast} from './setting.js'

/** 
 * @description: 保存图片
 * 	1.判断是否包含业务权限
 * 	2.权限： 未设置 -> 官方设置
 *  3.权限：已经拒绝 -> 引导打开 
 * 	4.权限设置: 下载图片
 * 	5.保存本地图片
 * 	6.无权限:错误处理
 * 
 * @param {string} url 网络地址
 * @param {object} config 弹框配置
 * @param {boolean} config.successModal 成功
 * @param {boolean} config.failModal 失败
 * 
 **/

export const saveImg = async (url, {
	successModal,
	failModal,
} = {
	successModal: true,
	failModal: true
}) => {
	try {
		/* 鉴定参数 */
		if(!url){
			throw new Error('该函数必须图片url')
		}
		/* 查询权限 */
		const scopeName = 'scope.writePhotosAlbum'
		const result = await getSetting(scopeName)
		console.log(result)
		switch (result) {
			/* 第一次未授权，弹框申请授权 */
			case undefined:
			await authorize(scopeName)
			break;
			/* 用户拒绝授权 */
			case false:
			if(!await confirm('请打开相册权限，才能完成此功能')){
				throw new Error('用户已拒绝授权')
			}
			if(!await openSetting(scopeName)){
				throw new Error('未主动授权')
			}
			break;
		}
		
		/* 进入下载图片到本地流程 */
		const { tempFilePath } = await downloadFile({url})
		console.log(tempFilePath)
		if(!tempFilePath){
			throw new Error('url无法获取图片')
		}
		uni.saveImageToPhotosAlbum({
			filePath:tempFilePath,
			success() {
				successModal =true; 
				toast('保存成功')
			},
			fail() {
				failModal = true
				toast('保存失败')
			}
		})

	} catch (error) {
		//TODO handle the exception
		console.error(error)
		if(failModal){
			toast('保存失败')
		}
	}
}