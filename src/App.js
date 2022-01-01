import './App.css';
import { getData, postData } from './request';
import axios from 'axios';

function App() {
	// getData('/mock2', { a: 'a' }).then(res => {
	// 	console.log(
	// 		'%c [ res ]-33',
	// 		'font-size:13px; background:pink; color:#bf2c9f;',
	// 		res
	// 	);
	// });
	// postData('/test1', { a: 'aaa' }).then(res => {
	// 	console.log(
	// 		'%c [ res ]-17',
	// 		'font-size:13px; background:pink; color:#bf2c9f;',
	// 		res
	// 	);
	// });
	// getData('/test2', { get: 'sds' }).then(res => {
	// 	console.log(
	// 		'%c [ res ]-17',
	// 		'font-size:13px; background:pink; color:#bf2c9f;',
	// 		res
	// 	);
	// });
	getData('/test2/test1?a=1').then(res => {
		console.log(
			'%c [ res ]-17',
			'font-size:13px; background:pink; color:#bf2c9f;',
			res
		);
	});
	// axios
	// 	.get('/mock1', { dataType: 'json' }) //这列的'/mock'与mock.js文件里的地址一致
	// 	.then(res => {
	// 		console.log(res.data.userinfo);
	// 	});
	return <div className="App">test1</div>;
}

export default App;
