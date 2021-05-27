const celery = require('node-celery');
const url = 'redis://localhost:6379/0';
console.log('start')
client = celery.createClient({
		CELERY_BROKER_URL: url,
		CELERY_RESULT_BACKEND: url
	});

client.on('error', function(err) {
	console.log(err);
});

client.on('connect', function() {
    console.log('connected')
	const result = client.call('tasks.add', [1, 2]);
	result.on('ready', function(data) {
		console.log('ready')
		console.log(data);
	});

	console.log(result)
	setTimeout(() => {
		result.get((res) => console.log(res))
	}, 5000);
});

