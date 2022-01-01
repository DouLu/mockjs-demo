import Mock from 'mockjs';
import mockFetch from 'mockjs-fetch';
mockFetch(Mock);

export const test1 = Mock.mock('/test1', 'POST', request => {
	console.log(
		'%c [ request ]-7',
		'font-size:13px; background:pink; color:#bf2c9f;',
		request
	);
	return 'sds';
});

export const test2 = Mock.mock('/test2', 'GET', request => {
	console.log(
		'%c [ request ]-7',
		'font-size:13px; background:pink; color:#bf2c9f;',
		request
	);
	return 'GET test2';
});

export const mock1 = Mock.mock('/mock1', {
	//"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
	'userinfo|4': [
		{
			//生成四个如下格式的数据
			'id|+1': 1, //数字从1开始，后续依次加1
			name: '@cname', //名字为随机中文名
			'age|18-28': 25, //年龄是18-28之间的随机数
			'sex|1': ['男', '女'], //性别是数组里的随机一项
			'job|1': ['web', 'teacher', 'python', 'php'] //job是数组里的随机一项
		}
	]
});

export const mock2 = Mock.mock('/mock2', {
	//"/mock"是通过ajax获取数据时填写的地址，可以随意写。但要和ajax请求时填写的地址一致。
	userinfo: {
		//生成四个如下格式的数据
		'id|+1': 1, //数字从1开始，后续依次加1
		name: '@cname', //名字为随机中文名
		'age|18-28': 25, //年龄是18-28之间的随机数
		'sex|1': ['男', '女'], //性别是数组里的随机一项
		'job|1': ['web', 'teacher', 'python', 'php'] //job是数组里的随机一项
	}
});
