export const getSetting = (name) => {
	return new Promise((resolve, reject) => {
		uni.getSetting({
			success(res) {
				if (name) {
					resolve(res.authSetting[name])
				} else {
					resolve(res)
				}

			},
			fail(err) {
				reject(err)
			}
		})
	})
}

export const openSetting = (name) => {
	return new Promise((resolve, reject) => {
		uni.openSetting({
			success(res) {
				if (name) {
					resolve(res.authSetting[name])
				} else {
					resolve(res)
				}
			}
		})
	})
}

   /* 弹框申请 */
export const authorize = (scope) => {
	return new Promise((reslove, reject) => {
		uni.authorize({
			scope,
			success(res) {
				reslove(res)
			}
		})
	})
}

export const confirm = async (content, title = '提醒') => {
	return new Promise((reslove, reject) => {
		uni.showModal({
			title,
			content,
			success({
				confirm
			}) {
				reslove(confirm)
			},
			fail: reject
		})
	})
}


/* Toast */
export const toast = (title, icon = 'success') => {
	uni.showToast({
		title,
		icon,
	})
}


